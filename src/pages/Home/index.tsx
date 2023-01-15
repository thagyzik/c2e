import React, { useState, useEffect } from "react"
import {
  View,
  Text,
  Alert,
  TextInput,
  Image,
  ScrollView,
  SafeAreaView
} from "react-native"
import { RectButton } from "react-native-gesture-handler"
import { useNavigation } from "@react-navigation/native"
import styles from "./styles"
import axios from "axios"

interface IBGECityResponse {
  nome: string
}

const Home = () => {
  const navigation = useNavigation<any>()
  const [selectedUf, setSelectedUf] = useState("")
  const [selectedCity, setSelectedCity] = useState("0")
  const [city, setCity] = useState<string[]>([])
  const estadosArray = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MS", "MG", "PA", "PB", "PR", "PE", "RJ", "RN", "RO", "RR", "SC", "SP", "SE", "TO"];

  function handleNavigateToPoints() {

    if (estadosArray.includes(selectedUf) && city.includes(selectedCity)) {
      navigation.navigate("Points", {
        selectedUf,
        selectedCity,
      })
    } else {
      if(!estadosArray.includes(selectedUf)){
        Alert.alert("Estado Inválido", "Formato exemplo: PR")
      } else if (!city.includes(selectedCity)){
        Alert.alert("Cidade Inválida", "Formato exemplo: Curitiba")
      } else {
        Alert.alert("Entrada invalida", "VerifiquAe o Estado e Cidade")
      }
    }
  }

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

  function cidade(value: string) {
    setSelectedCity(value)
  }

  function estado(value: string) {
    setSelectedUf(value)
  }

  function handleNavigateToCreatePoint() {

    if (estadosArray.includes(selectedUf) && city.includes(selectedCity)) {
      navigation.navigate("CreatePoint", {
        selectedUf,
        selectedCity,
      })
    } else {
      if(!estadosArray.includes(selectedUf)){
        Alert.alert("Estado Inválido", "Formato exemplo: PR")
      } else if (!city.includes(selectedCity)){
        Alert.alert("Cidade Inválida", "Formato exemplo: Curitiba")
      } else {
        Alert.alert("Entrada invalida", "VerifiquAe o Estado e Cidade")
      }
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.main}>
            <Image
              style={styles.logoImg}
              source={require("../../assets/logo-projeto.png")}
            />
            <View style={styles.teste}>
              <Text style={styles.description}>
                Ajudamos pessoas a encontrarem pontos de coleta de forma
                eficiente
              </Text>

              <View style={styles.selectView}>
                <TextInput
                  placeholder="Informe o Estado"
                  style={styles.textInputDireita}
                  onChangeText={(text) => estado(text)}
                />

                <TextInput
                  placeholder="Informe uma Cidade"
                  style={styles.textInputEsquerda}
                  onChangeText={(text) => cidade(text)}
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
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Home
