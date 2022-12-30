import React, { useEffect, useState } from "react"
import styles from "./styles"
import api from "../../services/api"
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  SafeAreaView,
} from "react-native"
import { Feather as Icon } from "@expo/vector-icons"
import { useNavigation, useRoute } from "@react-navigation/native"
import * as Location from "expo-location"
import MapView, { MapPressEvent, Marker } from "react-native-maps"
import { TextInput } from "react-native-gesture-handler"
import Baterias from "../../assets/pilha.svg"
import Eletronicos from "../../assets/eletronico.svg"
import Lampadas from "../../assets/lampada.svg"
import { RectButton } from "react-native-gesture-handler"
import Modal from "react-modal"

interface Item {
  id: number
  title: string
  image_url: string
}

interface Params {
  selectedUf: string
  selectedCity: string
}

const CreatePoint = () => {
  const route = useRoute()
  const routeParams = route.params as Params
  const navigation = useNavigation<any>()
  const [initialPosition, setInitialPosition] = useState<[number, number]>([
    0, 0,
  ])
  const [uf, setUf] = useState("")
  const [city, setCity] = useState("")
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [whatsapp, setWhatsApp] = useState("")
  const [rua, setRua] = useState("")
  const [bairro, setBairro] = useState("")
  const [complemento, setComplemento] = useState("")
  const [selectedItems, setSelectedItems] = useState<number[]>([])
  const [modalIsOpen, setIsOpen] = useState(false)
  const [items, setItems] = useState<Item[]>([])
  const [token, setToken] = useState<number>()

  Modal.setAppElement("#root")

  useEffect(() => {
    api.get("/items").then((response) => {
      setItems(response.data.serializedItems)
    })
  }, [])

  useEffect(() => {
    setUf(routeParams.selectedUf)
    setCity(routeParams.selectedCity)
  }, [])

  useEffect(() => {
    async function loadPosition() {
      const { status } = await Location.requestForegroundPermissionsAsync()

      if (status !== "granted") {
        Alert.alert(
          "Oooops...",
          "Precisamos da sua permissão para obter sua localização"
        )
        return
      }

      const location = await Location.getCurrentPositionAsync()

      const { latitude, longitude } = location.coords

      setInitialPosition([latitude, longitude])
    }

    loadPosition()
  }, [])

  function handleNavigateBack() {
    navigation.goBack()
  }

  function handleSelectedLocation(e: MapPressEvent) {
    setInitialPosition([
      e.nativeEvent.coordinate.latitude,
      e.nativeEvent.coordinate.longitude,
    ])
  }

  function handleSelectedItem(id: number) {
    const alreadySelected = selectedItems.findIndex((item) => item === id)

    if (alreadySelected >= 0) {
      const filteredItems = selectedItems.filter((item) => item !== id)
      setSelectedItems(filteredItems)
    } else {
      setSelectedItems([...selectedItems, id])
    }
  }

  async function handleSubmit() {
    const nameSelected = nome
    const emailSelected = email
    const whatsappSelected = whatsapp
    const ruaSelected = rua
    const bairroSelected = bairro
    const complementoSelected = complemento
    const ufSelected = uf
    const citySelected = city
    const [latitude, longitude] = initialPosition
    const items = selectedItems
    const data = new FormData()

    var regex = new RegExp(
      "^\\([0-9]{2}\\)((3[0-9]{3}-[0-9]{4})|(9[0-9]{3}-[0-9]{5}))$"
    )

    if (
      nameSelected === "" ||
      emailSelected === "" ||
      whatsappSelected === "" ||
      ruaSelected === "" ||
      bairroSelected === "" ||
      complementoSelected === "" ||
      items.length === 0
    ) {
      Alert.alert("Todos os campos são obrigatórios")
    } else if (!regex.test(whatsappSelected)) {
      Alert.alert("Numero inválido. Ex:(41)1234-56789")
    } else if (!emailSelected.includes("@") || !emailSelected.includes(".")) {
      Alert.alert("E-mail inválido")
    } else {
      var numero_aleatorio = Math.random()
      numero_aleatorio = Math.floor(numero_aleatorio * 1000)

      setToken(numero_aleatorio)

      const tokenSelected = token

      whatsappSelected.replace("(", "").replace(")", "").replace("-", "")

      data.append("name", nameSelected)
      data.append("email", emailSelected)
      data.append(
        "whatsapp",
        whatsappSelected.replace("(", "").replace(")", "").replace("-", "")
      )
      data.append("latitude", String(latitude))
      data.append("longitude", String(longitude))
      data.append("city", citySelected)
      data.append("uf", ufSelected)
      data.append("street", ruaSelected)
      data.append("neighborhood", bairroSelected)
      data.append("complement", complementoSelected)
      data.append("token", String(tokenSelected))
      data.append("items", items.join(","))

      await api.post("/points", data)

      openModal()

      setTimeout(() => {
        closeModal()
        handleReload()
      }, 2000)
    }
  }

  function handleReload() {
    var numero_aleatorio = Math.random()
    numero_aleatorio = Math.floor(numero_aleatorio * 100)

    setToken(numero_aleatorio)

    Alert.alert(
      `Ponto criado com Sucesso!\n Importante: guarde o código de gerenciamento deste ponto:\n ${token}`
    )
  }

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
    // history.push('/')
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleNavigateBack}>
          <Icon style={styles.iconLogout} name="arrow-left" size={20} />
        </TouchableOpacity>

        <Text style={styles.title}>Cadastre seu ponto de coleta</Text>

        <ScrollView>
          <ScrollView
            horizontal
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 1 }}
            keyboardShouldPersistTaps="handled"
          >
            <TextInput
              placeholder="Nome"
              style={styles.textInputDireita}
              onChangeText={(text) => setNome(text)}
            />
            <TextInput
              placeholder="E-mail"
              style={styles.textInputEsquerda}
              onChangeText={(text) => setEmail(text)}
            />
          </ScrollView>
          <ScrollView
            horizontal
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 1 }}
            keyboardShouldPersistTaps="handled"
          >
            <TextInput
              placeholder="WhatsApp"
              style={styles.textInputDireita}
              onChangeText={(text) => setWhatsApp(text)}
            />
            <TextInput
              placeholder="Rua"
              style={styles.textInputEsquerda}
              onChangeText={(text) => setRua(text)}
            />
          </ScrollView>
          <ScrollView
            horizontal
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 1 }}
            keyboardShouldPersistTaps="handled"
          >
            <TextInput
              placeholder="Bairro"
              style={styles.textInputDireita}
              onChangeText={(text) => setBairro(text)}
            />
            <TextInput
              placeholder="Complemento"
              style={styles.textInputEsquerda}
              onChangeText={(text) => setComplemento(text)}
            />
          </ScrollView>
        </ScrollView>

        <Text style={styles.description}>Selecione o endereço no mapa.</Text>

        <View style={styles.mapContainer}>
          {initialPosition[0] !== 0 && (
            <MapView
              scrollEnabled={true}
              style={styles.map}
              loadingEnabled={initialPosition[0] === 0}
              initialRegion={{
                latitude: initialPosition[0],
                longitude: initialPosition[1],
                latitudeDelta: 0.014,
                longitudeDelta: 0.014,
              }}
              onPress={(e) => handleSelectedLocation(e)}
            >
              <Marker
                style={styles.mapMarker}
                coordinate={{
                  latitude: initialPosition[0],
                  longitude: initialPosition[1],
                }}
              ></Marker>
            </MapView>
          )}
        </View>

        <Text style={styles.description}>
          Selecione os itens vinculados a este ponto.
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 1 }}
        >
          <TouchableOpacity
            key={String(1)}
            style={[
              styles.item,
              selectedItems.includes(1) ? styles.selectedItem : {},
            ]}
            onPress={() => handleSelectedItem(1)}
            activeOpacity={0.6}
          >
            <Lampadas width="60" height="60" />
            <Text style={styles.itemTitle}>Lâmpadas</Text>
          </TouchableOpacity>
          <TouchableOpacity
            key={String(2)}
            style={[
              styles.item,
              selectedItems.includes(2) ? styles.selectedItem : {},
            ]}
            onPress={() => handleSelectedItem(2)}
            activeOpacity={0.6}
          >
            <Baterias width="60" height="60" />
            <Text style={styles.itemTitle}>Pilhas/Baterias</Text>
          </TouchableOpacity>
          <TouchableOpacity
            key={String(3)}
            style={[
              styles.item,
              selectedItems.includes(3) ? styles.selectedItem : {},
            ]}
            onPress={() => handleSelectedItem(3)}
            activeOpacity={0.6}
          >
            <Eletronicos width="60" height="60" />
            <Text style={styles.itemTitle}>Eletrônicos</Text>
          </TouchableOpacity>
        </ScrollView>
        <ScrollView>
          <RectButton style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </RectButton>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default CreatePoint
