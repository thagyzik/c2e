import { StyleSheet } from "react-native"
export const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    height: 60,
    fontSize: 18,
    borderWidth: 2,
    borderColor: "gray",
    borderRadius: 8,
    color: "#6C6C80",
    textAlign: "center",
    marginBottom: 10,
  },
  inputAndroid: {
    height: 60,
    fontSize: 18,
    borderWidth: 2,
    borderColor: "gray",
    borderRadius: 8,
    color: "#6C6C80",
    textAlign: "center",
  },
})

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },

  main: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
  },

  title: {
    color: "#322153",
    fontSize: 28,
    fontFamily: "Ubuntu_700Bold",
    textAlign: "center",
    marginTop: 30,
  },

  description: {
    color: "#6C6C80",
    fontSize: 16,
    marginTop: 30,
    fontFamily: "Roboto_400Regular",
    textAlign: "center",
    lineHeight: 24,
  },
  logoImg: {
    width: 200,
    height: 150,
  },

  footer: {},

  select: {},

  input: {
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  teste: {
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#FFF",
    borderRadius: 10,
    color: "#092b5a",
    padding: 20,
  },

  button: {
    backgroundColor: "#092b5a",
    height: 60,
    flexDirection: "row",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
  },

  buttonLink: {
    backgroundColor: "transparent",
    height: 60,
    flexDirection: "row",
    overflow: "hidden",
    alignItems: "center",
    marginTop: 20,
  },

  buttonText: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    color: "#FFF",
    fontFamily: "Roboto_500Medium",
    fontSize: 18,
  },
  buttonTextLink: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    color: "#092b5a",
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
  },
  buttonSignUp: {
    backgroundColor: "transparent",
    borderColor: "#092b5a",
    borderWidth: 2,
    height: 60,
    flexDirection: "row",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    marginTop: 50,
  },
  buttonTextSignUp: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    color: "#092b5a",
    fontFamily: "Roboto_500Medium",
    fontSize: 18,
  },
})
