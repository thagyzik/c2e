import { StyleSheet } from "react-native"
export const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    height: 55,
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

  selectView: {
    flexDirection: "column",
    flex: 1,
    height: "100%",
  },

  main: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
  },

  title: {
    color: "#322153",
    fontSize: 28,
    fontFamily: "Inter-SemiBold",
    textAlign: "center",
    marginTop: 30,
    flex: 1,
  },

  description: {
    color: "#6C6C80",
    fontSize: 16,
    marginTop: 20,
    fontFamily: "Inter-SemiBold",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 40,
  },

  logoImg: {
    width: 160,
    height: 100,
  },

  footer: {},

  select: {},

  button: {
    backgroundColor: "#092b5a",
    height: 55,
    flexDirection: "row",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    marginTop: 5,
  },

  buttonLink: {
    backgroundColor: "transparent",
    height: 60,
    flexDirection: "row",
    overflow: "hidden",
    alignItems: "center",
    marginBottom: 30,
    marginTop: "10%",
  },

  buttonText: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    color: "#FFF",
    fontFamily: "Inter-SemiBold",
    fontSize: 18,
  },
  buttonTextLink: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    color: "#092b5a",
    fontFamily: "Inter-SemiBold",
    fontSize: 16,
  },
  buttonSignUp: {
    backgroundColor: "transparent",
    borderColor: "#092b5a",
    borderWidth: 2,
    height: 55,
    flexDirection: "row",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    marginTop: "12%",
  },
  buttonTextSignUp: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    color: "#092b5a",
    fontFamily: "Inter-SemiBold",
    fontSize: 18,
  },

  teste: {
    flexDirection: "column",
  },

  textInputDireita: {
    color: "#092b5a",
    fontSize: 17,
    fontFamily: "Inter-SemiBold",
    paddingEnd: 10,
  },

  textInputEsquerda: {
    width: "100%",
    height: 40,
    borderRadius: 30,
    color: "#092b5a",
    fontSize: 17,
    fontFamily: "Inter-SemiBold",
    paddingEnd: 10,
  }
})
