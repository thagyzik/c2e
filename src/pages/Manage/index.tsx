import React, { useEffect, useState } from "react"
import styles from "./styles"
import { View, Text, TouchableOpacity, Alert, SafeAreaView } from "react-native"
import { Feather as Icon } from "@expo/vector-icons"
import { useNavigation, useRoute } from "@react-navigation/native"
import { TextInput } from "react-native-gesture-handler"
import { RectButton } from "react-native-gesture-handler"
import api from "../../services/api"

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
  }
  items: {
    title: string
  }[]
}

const Manage = () => {
  const route = useRoute()
  const routeParams = route.params as Params
  const navigation = useNavigation<any>()
  const [token, setToken] = useState("")
  const [data, setData] = useState<Data>({} as Data)

  useEffect(() => {
    api.get(`/points/${routeParams.point_id}`).then((response) => {
      setData(response.data)
    })
  }, [])

  function handleNavigateBack() {
    navigation.goBack()
  }

  async function handleSubmit() {
    if (String(token) === String(data.point.token)) {
      Alert.alert("Validado com sucesso!")

      navigation.navigate("Update", { point_id: routeParams.point_id })
    } else {
      Alert.alert(
        "Código informado não é o mesmo vinculado ao ponto de coleta!"
      )
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleNavigateBack}>
          <Icon style={styles.iconLogout} name="arrow-left" size={25} />
        </TouchableOpacity>

        <Text style={styles.title}>
          Confirme qual o código token vinculado a este ponto de coleta.
        </Text>

        <Text style={styles.description}>
          Preencha o código token, o mesmo informado durante o cadastro.
        </Text>

        <TextInput
          placeholder="Token: "
          style={styles.token}
          onChangeText={(text) => setToken(text)}
        />

        <View style={styles.footer}>
          <RectButton style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Validar token</Text>
          </RectButton>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Manage
