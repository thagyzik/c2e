import React, { useState, useEffect } from "react"
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Alert,
  TextInput,
  Image,
} from "react-native"
import { Feather as Icon } from "@expo/vector-icons"
import axios from "axios"
import { RectButton } from "react-native-gesture-handler"
import RNPickerSelect from "react-native-picker-select"
import { useNavigation } from "@react-navigation/native"
import styles, { pickerSelectStyles } from "./styles"

interface IBGEUFResponse {
  sigla: string
}

interface IBGECityResponse {
  nome: string
}

const Home = () => {
  const navigation = useNavigation<any>()
  const [uf, setUf] = useState<string[]>([])
  const [city, setCity] = useState<string[]>([])
  const [selectedUf, setSelectedUf] = useState("")
  const [selectedCity, setSelectedCity] = useState("0")

  useEffect(() => {
    axios
      .get<IBGEUFResponse[]>(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
      )
      .then((response) => {
        const siglas = response.data.map((uf) => uf.sigla)
        setUf(siglas)
      })
  }, [])

  useEffect(() => {
    if (selectedUf === "0") {
      return
    }

    axios
      .get<IBGECityResponse[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`
      )
      .then((response) => {
        const cityNames = response.data.map((city) => city.nome)
        setCity(cityNames)
      })
  }, [selectedUf])

  function handleNavigateToPoints() {
    if (selectedUf && selectedCity) {
      navigation.navigate("Points", {
        selectedUf,
        selectedCity,
      })
    } else {
      Alert.alert("Entrada invalida", "Selecione uma cidade")
    }
  }

  function handleNavigateToCreatePoint() {
    if (selectedUf && selectedCity) {
      navigation.navigate("CreatePoint", {
        selectedUf,
        selectedCity,
      })
    } else {
      Alert.alert("Entrada invalida", "Selecione uma cidade")
    }
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.container}>
        <View style={styles.main}>
          <Image
            style={styles.logoImg}
            source={require("../../assets/logo-projeto.png")}
          />
          <View style={styles.teste}>
            <Text style={styles.description}>
              Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente
            </Text>

            <View style={styles.selectView}>
              <RNPickerSelect
                placeholder={{
                  label: "Selecione uma UF",
                  value: null,
                  color: "#092b5a",
                }}
                useNativeAndroidPickerStyle={false}
                style={pickerSelectStyles}
                onValueChange={(uf) => setSelectedUf(uf)}
                items={uf.map((uf) => ({ label: uf, value: uf }))}
              />
              <RNPickerSelect
                placeholder={{
                  label: "Selecione uma Cidade",
                  value: null,
                  color: "#092b5a",
                }}
                useNativeAndroidPickerStyle={false}
                style={pickerSelectStyles}
                onValueChange={(city) => setSelectedCity(city)}
                items={city.map((city) => ({ label: city, value: city }))}
              />
              <RectButton
                style={styles.button}
                onPress={handleNavigateToPoints}
              >
                <Text style={styles.buttonText}>Buscar Ponto</Text>
              </RectButton>

              <RectButton
                style={styles.buttonSignUp}
                onPress={handleNavigateToCreatePoint}
              >
                <Text style={styles.buttonTextSignUp}>Cadastrar Ponto</Text>
              </RectButton>

              <RectButton
                style={styles.buttonLink}
                onPress={() => navigation.navigate("Administrator")}
              >
                <Text style={styles.buttonTextLink}>
                  Contatar Administrador
                </Text>
              </RectButton>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Home
