import React from "react"
import styles from "./styles"
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native"
import { useNavigation, useRoute } from "@react-navigation/native"
import { Feather as Icon, FontAwesome } from "@expo/vector-icons"

const Administrator = () => {
  const navigation = useNavigation()

  function handleNavigateBack() {
    navigation.goBack()
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.container}>
        <TouchableOpacity onPress={handleNavigateBack}>
          <Icon style={styles.iconLogout} name="arrow-left" size={25} />
        </TouchableOpacity>
        <View style={styles.main}>
          <View>
            <Text style={styles.title}>
              Contate o administrador do 2E APP em caso de dúvidas, melhorias ou
              sugestões.
            </Text>
            <Text style={styles.description}>E-mail: c2eapp@gmail.com</Text>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Administrator
