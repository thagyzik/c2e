import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 40,
  },

  iconLogout: {
    color: "#092b5a",
  },

  title: {
    fontSize: 24,
    fontFamily: "Ubuntu_700Bold",
    marginTop: 30,
    marginBottom: 15,
    textAlign: "center",
  },

  description: {
    color: "#6C6C80",
    fontSize: 16,
    marginTop: 4,
    fontFamily: "Roboto_400Regular",
  },

  textInput: {
    width: "100%",
    height: "15%",
    borderRadius: 8,
    fontSize: 16,
    fontFamily: "Roboto_400Regular",
    borderColor: "#092b5a",
    borderWidth: 2,
    paddingLeft: 15,
    marginTop: 15,
    color: "#092b5a",
  },

  button: {
    backgroundColor: "#092b5a",
    height: 60,
    flexDirection: "row",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    marginTop: 30,
  },

  buttonDelete: {
    backgroundColor: "#092b5a",
    height: 60,
    flexDirection: "row",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    marginTop: 10,
  },

  buttonTextDelete: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    color: "#FFF",
    fontFamily: "Roboto_500Medium",
    fontSize: 20,
  },

  buttonText: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    color: "#FFF",
    fontFamily: "Roboto_500Medium",
    fontSize: 20,
  },

  footer: {},
})
