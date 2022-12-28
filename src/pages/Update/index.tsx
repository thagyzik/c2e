import React, { useEffect, useState }from 'react'
import styles from './styles'
import api from '../../services/api'
import { View, Text, TouchableOpacity, ScrollView, Alert, SafeAreaView } from 'react-native'
import { Feather as Icon } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as Location from 'expo-location'
import MapView, { MapPressEvent, Marker } from 'react-native-maps'
import { TextInput } from 'react-native-gesture-handler'
import Baterias from '../../assets/pilha.svg'
import Eletronicos from '../../assets/eletronico.svg'
import Lampadas from '../../assets/lampada.svg'
import { RectButton } from 'react-native-gesture-handler'
import Modal from 'react-modal'
import { point } from 'leaflet'

interface Item {
    id: number,
    title: string,
    image_url: string
}

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
        latitude: string,
        longitude: string,
    },
    items: {
        title: string
    }[]
}

const Update = () => {

    const route = useRoute()
    const routeParams = route.params as Params
    const navigation = useNavigation<any>()
    const [initialPosition, setInitialPosition] = useState<[number, number]>([0,0])
    const [uf, setUf] = useState('')
    const [city, setCity] = useState('')
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [whatsapp, setWhatsApp] = useState('')
    const [rua, setRua] = useState('')
    const [bairro, setBairro] = useState('')
    const [complemento, setComplemento] = useState('')
    const [selectedItems, setSelectedItems] = useState<number[]>([])
    const [modalIsOpen, setIsOpen] = useState(false)
    const [items, setItems] = useState<Item[]>([])
    const [token, setToken] = useState<number>()
    const [data, setData] = useState<Data>({} as Data)

    useEffect(() => {
        api.get(`/points/${routeParams.point_id}`).then(response => {
            setData(response.data)
        })
    }, [])

    function handleNavigateBack() {
        navigation.goBack()
    }

    async function handleUpdate() {
    
        const nameSelected = nome
        const emailSelected = email
        const whatsappSelected = whatsapp
        const ruaSelected = rua
        const bairroSelected = bairro
        const complementoSelected = complemento
        const data = new FormData()

        var regex = new RegExp('^\\([0-9]{2}\\)((3[0-9]{3}-[0-9]{4})|(9[0-9]{3}-[0-9]{5}))$');

        if(nameSelected === "" || emailSelected === "" || whatsappSelected === "" || ruaSelected === "" || bairroSelected === "" ||
        complementoSelected === "" ){
            Alert.alert(
                "Todos os campos são obrigatórios",
            );

        } else if(!regex.test(whatsappSelected)){
            Alert.alert(
                "Numero inválido. Ex:(41)1234-56789",
            );

        } else if(!emailSelected.includes("@") || !emailSelected.includes(".")){
            Alert.alert(
                "E-mail inválido",
            );

        } else {

            whatsappSelected.replace("(","").replace(")","").replace("-","");

            data.append('name', nameSelected)
            data.append('email', emailSelected)
            data.append('whatsapp', whatsappSelected.replace("(","").replace(")","").replace("-",""))
            data.append('street', ruaSelected)
            data.append('neighborhood', bairroSelected)
            data.append('complement', complementoSelected)
            
            await api.put(`/pointsUpdate/${routeParams.point_id}`, data)

            openModal()
    
            setTimeout(() => {
                closeModal()
                handleReload()
            }, 2000)

        }
    }

    function handleReload() {
        Alert.alert(
            `Ponto atualizado com Sucesso!`,
          );
    }

    function openModal() {
        setIsOpen(true)
    }
    
    function closeModal() {
        setIsOpen(false)
        // history.push('/')
    }

    async function handleDelete() {

        await api.delete(`/points/${routeParams.point_id}`).then(response => {
            if(response.status === 400){
                Alert.alert(
                    `Ocorreu um erro ao tentar deletar ponto!`,
                );
            } else if(response.status === 200){
                Alert.alert(
                    `Ponto deletado!`,
                );
        
                navigation.navigate('Home')
            }
        })

    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <TouchableOpacity onPress={handleNavigateBack}>
                    <Icon style={styles.iconLogout} name="log-out" size={19} />
                </TouchableOpacity>

                <Text style={styles.title}>Atualizar ponto de coleta</Text>

                <ScrollView>
                    <ScrollView horizontal
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{paddingHorizontal: 1}}>
                        <TextInput placeholder='Nome' style={styles.textInputDireita} onChangeText={text=>setNome(text)}/>
                        <TextInput placeholder='E-mail' style={styles.textInputEsquerda} onChangeText={text=>setEmail(text)}/>
                    </ScrollView>
                    <ScrollView horizontal
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{paddingHorizontal: 1}}>
                        <TextInput placeholder='WhatsApp' style={styles.textInputDireita} onChangeText={text=>setWhatsApp(text)}/>
                        <TextInput placeholder='Rua' style={styles.textInputEsquerda} onChangeText={text=>setRua(text)}/>
                    </ScrollView>
                    <ScrollView horizontal
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{paddingHorizontal: 1}}>
                        <TextInput placeholder='Bairro' style={styles.textInputDireita} onChangeText={text=>setBairro(text)}/>
                        <TextInput placeholder='Complemento' style={styles.textInputEsquerda} onChangeText={text=>setComplemento(text)}/>
                    </ScrollView>

                    <RectButton style={styles.button} onPress={handleUpdate}>
                        <View style={styles.buttonIcon}>
                            <Icon name="log-in" color="#FFF" size={25}/>
                        </View>
                        <Text style={styles.buttonText}>Atualizar</Text>
                    </RectButton>

                    <RectButton style={styles.button} onPress={handleDelete}>
                        <View style={styles.buttonIcon}>
                            <Icon name="log-in" color="#FFF" size={25}/>
                        </View>
                        <Text style={styles.buttonText}>Excluir</Text>
                    </RectButton>
                </ScrollView>
            </View>
        </SafeAreaView>
    )

}

export default Update