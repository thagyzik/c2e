import { StyleSheet } from "react-native"
import Constants from "expo-constants"

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 20 + Constants.statusBarHeight,
  },

  iconLogout: {
    color: "#092b5a",
  },

  title: {
    fontSize: 22,
    fontFamily: "Ubuntu_700Bold",
    marginTop: 50,
    textAlign: "center",
  },

  description: {
    color: "#6C6C80",
    fontSize: 20,
    marginTop: 50,
    fontFamily: "Roboto_400Regular",
    textAlign: "center",
    marginBottom: 40,
  },
  token: {
    color: "#092b5a",
    fontSize: 30,
    marginTop: 50,
    fontFamily: "Roboto_400Regular",
    textAlign: "center",
    marginBottom: 40,
  },

  button: {
    backgroundColor: "#092b5a",
    height: 50,
    flexDirection: "row",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    marginTop: 90,
  },

  buttonText: {
    flex: 1,
    textAlign: "center",
    color: "#FFF",
    fontFamily: "Roboto_500Medium",
    fontSize: 18,
  },

  footer: {},
})
