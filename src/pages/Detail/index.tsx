import React, { useEffect, useState } from 'react'
import styles from './styles'
import { View, Text, TouchableOpacity, Image, SafeAreaView, Linking } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'
import * as MailComposer from 'expo-mail-composer'
import api from '../../services/api'
import { Feather as Icon, FontAwesome } from '@expo/vector-icons'

interface Params {
    point_id: number
}

interface Data {
    point: {
        name: string,
        email: string,
        whatsapp: string,
        city: string,
        uf: string,
        street: string,
        neighborhood: string,
        complement: string,
        token: string,
    },
    items: {
        title: string
    }[]
}

const Detail = () => {
    const navigation = useNavigation<any>()
    const route = useRoute()
    const routeParams = route.params as Params
    const [data, setData] = useState<Data>({} as Data)

    useEffect(() => {
        api.get(`/points/${routeParams.point_id}`).then(response => {
            setData(response.data)
        })
    }, [])

    function handleNavigateBack() {
        navigation.goBack()
    }

    function handleComposerMail() {
        MailComposer.composeAsync({
            subject: 'Interesse na coleta de resíduos.',
            recipients: [data.point.email]
        })
    }

    function handleWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=${data.point.whatsapp}&text=Tenho interesse sobre coleta de resíduos`)
    }

    if(!data.point){ //substitui uma tela de load
        return null
    }

    function handleGerenciar(id: number) {
        navigation.navigate('Manage', {point_id: id})
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <TouchableOpacity onPress={handleNavigateBack}>
                        <Icon style={styles.iconLogout} name="log-out" size={25} />
                </TouchableOpacity>

                <Image style={styles.pointImage} source={require('../../assets/empresa.png')}/>
                <Text style={styles.pointName}>{data.point.name}</Text>
                <Text style={styles.itemsTitle}>Itens Coletados:</Text>
                <Text style={styles.pointItems}>{data.items.map(item => item.title).join(', ')}</Text>

                <View style={styles.address}>
                    <Text style={styles.addressTitle}>Endereço:</Text>
                    <Text style={styles.addressContent}>{data.point.street}, {data.point.neighborhood}. {data.point.complement}. {data.point.city} - {data.point.uf}</Text>
                </View>

                <View>
                    <Text>WhatsApp: {data.point.whatsapp}, E-mail: {data.point.email}</Text>
                </View>

            </View>

            <View style={styles.gerenciar}>
                <RectButton style={styles.buttonGerenciar} onPress={() => handleGerenciar(routeParams.point_id)}>
                    <View style={styles.buttonIconGerenciar}>
                        <Icon name="log-in" color="#FFF" size={25}/>
                    </View>
                    <Text style={styles.buttonText}>Gerenciar Ponto de Coleta</Text>
                </RectButton>
            </View>

            <View style={styles.footer}>
                <RectButton style={styles.button} onPress={handleWhatsapp}>
                    <FontAwesome name="whatsapp" size={20} color="#FFF" />
                    <Text style={styles.buttonText}>Whatsapp</Text>
                </RectButton>

                <RectButton style={styles.button} onPress={handleComposerMail}>
                    <Icon name="mail" size={20} color="#FFF" />
                    <Text style={styles.buttonText}>E-mail</Text>
                </RectButton>

            </View>
        </SafeAreaView>
    )
}

export default Detail