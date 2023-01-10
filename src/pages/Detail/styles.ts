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

  pointName: {
    color: "#322153",
    fontSize: 28,
    fontFamily: "Inter-SemiBold",
    marginTop: 24,
    textAlign: "center",
  },

  itemsTitle: {
    marginTop: 20,
    color: "#322153",
    fontFamily: "Inter-SemiBold",
    fontSize: 20,
  },

  pointItems: {
    fontFamily: "Inter-SemiBold",
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
    fontFamily: "Inter-SemiBold",
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
    fontFamily: "Inter-SemiBold",
    fontSize: 18,
    marginBottom: 5,
    marginTop: 8,
  },

  viewAdressInfo: {
    height: "60%",
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
    fontFamily: "Inter-SemiBold",
    paddingLeft: 5,
  },

  buttonTextAction: {
    marginLeft: 1,
    color: "#FFF",
    fontSize: 16,
    fontFamily: "Inter-SemiBold",
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
