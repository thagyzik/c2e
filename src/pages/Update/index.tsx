import React, { useEffect, useState } from "react"
import styles from "./styles"
import api from "../../services/api"
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native"
import { Feather as Icon } from "@expo/vector-icons"
import { useNavigation, useRoute } from "@react-navigation/native"
import { TextInput } from "react-native-gesture-handler"
import { RectButton } from "react-native-gesture-handler"

interface Item {
  id: number
  title: string
  image_url: string
}

interface Params {
  point_id: number
}

interface Data {
  point: {
    name: string
    email: string
    whatsapp: string
    city: string
    uf: string
    street: string
    neighborhood: string
    complement: string
    token: string
    latitude: string
    longitude: string
  }
  items: {
    title: string
  }[]
}

const Update = () => {
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
  const [data, setData] = useState<Data>({} as Data)

  useEffect(() => {
    api.get(`/points/${routeParams.point_id}`).then((response) => {
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

    var regex = new RegExp(
      "^\\([0-9]{2}\\)((3[0-9]{3}-[0-9]{4})|(9[0-9]{3}-[0-9]{5}))$"
    )

    if (
      nameSelected === "" ||
      emailSelected === "" ||
      whatsappSelected === "" ||
      ruaSelected === "" ||
      bairroSelected === "" ||
      complementoSelected === ""
    ) {
      Alert.alert("Todos os campos são obrigatórios")
    } else if (!regex.test(whatsappSelected)) {
      Alert.alert("Numero inválido. Ex:(41)1234-56789")
    } else if (!emailSelected.includes("@") || !emailSelected.includes(".")) {
      Alert.alert("E-mail inválido")
    } else {
      whatsappSelected.replace("(", "").replace(")", "").replace("-", "")

      data.append("name", nameSelected)
      data.append("email", emailSelected)
      data.append(
        "whatsapp",
        whatsappSelected.replace("(", "").replace(")", "").replace("-", "")
      )
      data.append("street", ruaSelected)
      data.append("neighborhood", bairroSelected)
      data.append("complement", complementoSelected)

      await api.put(`/pointsUpdate/${routeParams.point_id}`, data)

      openModal()

      setTimeout(() => {
        closeModal()
        handleReload()
      }, 2000)
    }
  }

  function handleReload() {
    Alert.alert(`Ponto atualizado com Sucesso!`)
  }

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
    // history.push('/')
  }

  async function handleDelete() {
    await api.delete(`/points/${routeParams.point_id}`).then((response) => {
      if (response.status === 400) {
        Alert.alert(`Ocorreu um erro ao tentar deletar ponto!`)
      } else if (response.status === 200) {
        Alert.alert(`Ponto deletado!`)

        navigation.navigate("Home")
      }
    })
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleNavigateBack}>
          <Icon style={styles.iconLogout} name="arrow-left" size={24} />
        </TouchableOpacity>

        <Text style={styles.title}>Atualizar ponto de coleta</Text>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 10 }}
        >
          <View style={{ flex: 1, marginBottom: 40 }}>
            <TextInput
              placeholder="Nome"
              style={styles.textInput}
              onChangeText={(text) => setNome(text)}
            />

            <TextInput
              placeholder="E-mail"
              style={styles.textInput}
              onChangeText={(text) => setEmail(text)}
            />

            <TextInput
              placeholder="WhatsApp"
              style={styles.textInput}
              onChangeText={(text) => setWhatsApp(text)}
            />

            <TextInput
              placeholder="Rua"
              style={styles.textInput}
              onChangeText={(text) => setRua(text)}
            />

            <TextInput
              placeholder="Bairro"
              style={styles.textInput}
              onChangeText={(text) => setBairro(text)}
            />

            <TextInput
              placeholder="Complemento"
              style={styles.textInput}
              onChangeText={(text) => setComplemento(text)}
            />

            <RectButton style={styles.button} onPress={handleUpdate}>
              <Text style={styles.buttonText}>Atualizar</Text>
            </RectButton>

            <RectButton style={styles.buttonDelete} onPress={handleDelete}>
              <Text style={styles.buttonTextDelete}>Excluir</Text>
            </RectButton>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Update
