import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    paddingTop: 20,
  },

  iconLogout: {
    marginTop: 20,
    color: "#092b5a",
  },

  pointImage: {
    width: "100%",
    height: 160,
    resizeMode: "cover",
    borderRadius: 10,
    marginTop: 32,
  },

  pointName: {
    color: "#322153",
    fontSize: 28,
    fontFamily: "Ubuntu_700Bold",
    marginTop: 24,
    textAlign: "center",
  },

  itemsTitle: {
    marginTop: 20,
    color: "#322153",
    fontFamily: "Roboto_500Medium",
    fontSize: 20,
  },

  pointItems: {
    fontFamily: "Roboto_400Regular",
    fontSize: 18,
    lineHeight: 24,
    marginTop: 8,
    color: "#6C6C80",
  },

  address: {
    marginTop: 32,
  },

  addressTitle: {
    color: "#322153",
    fontFamily: "Roboto_500Medium",
    fontSize: 22,
  },

  scrollView: {
    flexDirection: "column",
    flex: 1,
    height: "100%",
  },

  addressContent: {
    flexDirection: "column",
    marginTop: 8,
  },
  adressContentText: {
    color: "#6C6C80",
    fontFamily: "Roboto_500Medium",
    fontSize: 18,
    marginBottom: 5,
    marginTop: 8,
  },

  viewAdressInfo: {
    height: 200,
    flexDirection: "column",
  },

  footer: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: "#999",
    paddingVertical: 20,
    paddingHorizontal: 32,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  gerenciar: {
    borderColor: "#999",
    paddingVertical: 20,
    paddingHorizontal: 30,
    flexDirection: "row",
  },

  buttonGerenciar: {
    backgroundColor: "#092b5a",
    borderRadius: 8,
    height: 55,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flex: 1,
  },

  button: {
    width: "48%",
    backgroundColor: "#092b5a",
    borderRadius: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    marginLeft: 1,
    color: "#FFF",
    fontSize: 16,
    fontFamily: "Roboto_500Medium",
    paddingLeft: 5,
  },

  buttonTextAction: {
    marginLeft: 1,
    color: "#FFF",
    fontSize: 16,
    fontFamily: "Roboto_500Medium",
    paddingLeft: 20,
  },

  buttonIcon: {
    height: 45,
    width: 45,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    justifyContent: "center",
    alignItems: "center",
  },
})
