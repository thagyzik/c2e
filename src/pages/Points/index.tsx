import React, { useState, useEffect } from 'react'
import styles from './styles'
import { View, Text, TouchableOpacity, ScrollView, Image, Alert, SafeAreaView } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Feather as Icon } from '@expo/vector-icons'
import api from '../../services/api'
import * as Location from 'expo-location'
import MapView, { Marker } from 'react-native-maps'
import Baterias from '../../assets/pilha.svg'
import Eletronicos from '../../assets/eletronico.svg'
import Lampadas from '../../assets/lampada.svg'

interface Points {
    id: number,
    name: string,
    latitude: number,
    longitude: number
}

interface Params {
    selectedUf: string,
    selectedCity: string
}

const Points = () => {
    const navigation = useNavigation<any>()
    const route = useRoute()
    const routeParams = route.params as Params
    const [points, setPoints] = useState<Points[]>([])
    const [selectedItems, setSelectedItems] = useState<number[]>([])
    const [initialPosition, setInitialPosition] = useState<[number, number]>([0,0])

    useEffect(() => {
        async function loadPosition(){
            const { status } = await Location.requestPermissionsAsync()
            
            if(status !== 'granted'){
                Alert.alert('Oooops...', 'Precisamos da sua permissão para obter sua localização')
                return
            }

            const location = await Location.getCurrentPositionAsync()

            const { latitude, longitude} = location.coords

            setInitialPosition([latitude, longitude])
        }

        loadPosition()
    }, [])

    useEffect(() => {
        console.log(routeParams.selectedUf);
        console.log(routeParams.selectedCity);
        
        api.get('/points', {
            params: {
                city: routeParams.selectedCity,
                uf: routeParams.selectedUf,
                items: selectedItems
            }
        }).then(response => {
            setPoints(response.data)
        })
    }, [selectedItems])

    function handleNavigateBack() {
        navigation.goBack()
    }

    function handleNavigateToDetail(id: number) {
        navigation.navigate('Detail', {point_id: id})
    }

    function handleSelectedItem (id: number){
        const alreadySelected = selectedItems.findIndex(item => item === id)
    
        if(alreadySelected >= 0){
            const filteredItems = selectedItems.filter(item => item !== id)
            setSelectedItems(filteredItems)
        } else {
            setSelectedItems([...selectedItems, id])
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <TouchableOpacity onPress={handleNavigateBack}>
                    <Icon style={styles.iconLogout} name="log-out" size={25} />
                </TouchableOpacity>

                <Text style={styles.title}>Seja Bem Vindo.</Text>
                <Text style={styles.description}>Encontre no mapa um ponto de coleta.</Text>

                <View style={styles.mapContainer}>
                    { initialPosition[0] !== 0 && (
                        <MapView style={styles.map}
                        loadingEnabled={initialPosition[0] === 0}
                        initialRegion={{
                            latitude: initialPosition[0],
                            longitude: initialPosition[1],
                            latitudeDelta: 0.014,
                            longitudeDelta: 0.014
                        }}>
                            {points.map(point => (
                                <Marker key={String(point.id)}
                                style={styles.mapMarker}
                                onPress={() => handleNavigateToDetail(point.id)}
                                coordinate={{
                                    latitude: point.latitude,
                                    longitude: point.longitude}}>
                                        
                                    <View style={styles.mapMarkerContainer}>
                                        <Image style={styles.mapMarkerImage} source={require('../../assets/empresa.png')}/>
                                        <Text style={styles.itemTitle}>Ponto</Text>
                                    </View>
                                </Marker>
                            ))}
                        </MapView>
                    )}
                </View>
            </View>

            <View style={styles.itemsContainer}>
                <ScrollView horizontal
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingHorizontal: 20}}>
                        <TouchableOpacity
                        key={String(1)}
                        style={[
                            styles.item,
                            selectedItems.includes(1) ? styles.selectedItem : {}
                        ]}
                        onPress={() => handleSelectedItem(1)}
                        activeOpacity={0.6}>
                        <Lampadas width="42" height="42"/>
                        <Text style={styles.itemTitle}>Lâmpadas</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        key={String(2)}
                        style={[
                            styles.item,
                            selectedItems.includes(2) ? styles.selectedItem : {}
                        ]}
                        onPress={() => handleSelectedItem(2)}
                        activeOpacity={0.6}>
                        <Baterias width="42" height="42"/>
                        <Text style={styles.itemTitle}>Pilhas e Baterias</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        key={String(3)}
                        style={[
                            styles.item,
                            selectedItems.includes(3) ? styles.selectedItem : {}
                        ]}
                        onPress={() => handleSelectedItem(3)}
                        activeOpacity={0.6}>
                        <Eletronicos width="42" height="42"/>
                        <Text style={styles.itemTitle}>Componentes Eletrônicos</Text>
                        </TouchableOpacity>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default Points