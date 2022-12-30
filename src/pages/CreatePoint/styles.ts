import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 20,
  },

  iconLogout: {
    color: "#092b5a",
  },

  title: {
    fontSize: 22,
    fontFamily: "Ubuntu_700Bold",
    marginTop: 25,
    textAlign: "center",
    marginBottom: 20,
    color: "#092b5a",
  },

  description: {
    color: "#092b5a",
    fontSize: 17,
    fontFamily: "Roboto_400Regular",
    marginBottom: 4,
  },

  mapContainer: {
    flex: 10,
    width: "100%",
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 10,
    marginBottom: 20,
  },

  map: {
    width: "100%",
    height: "100%",
  },

  mapMarker: {
    width: 90,
    height: 80,
  },

  mapMarkerImage: {
    width: 90,
    height: 45,
    resizeMode: "cover",
  },

  mapMarkerTitle: {
    flex: 1,
    fontFamily: "Roboto_400Regular",
    color: "#FFF",
    fontSize: 13,
    lineHeight: 23,
  },

  itemsContainer: {
    flexDirection: "row",
  },

  item: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#eee",
    height: 110,
    width: 120,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    marginTop: 7,
  },

  selectedItem: {
    borderColor: "#092b5a",
    borderWidth: 2,
    backgroundColor: "#e8f5ff",
  },

  itemTitle: {
    fontFamily: "Roboto_400Regular",
    textAlign: "center",
    fontSize: 15,
    marginTop: 3,
  },

  textInputDireita: {
    width: 150,
    color: "#092b5a",
    fontSize: 17,
    fontFamily: "Roboto_400Regular",
    paddingEnd: 10,
  },

  textInputEsquerda: {
    width: "100%",
    height: 40,
    borderRadius: 30,
    color: "#092b5a",
    fontSize: 17,
    fontFamily: "Roboto_400Regular",
    paddingEnd: 10,
  },

  button: {
    backgroundColor: "#092b5a",
    height: 60,
    flexDirection: "row",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    marginTop: 10,
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    color: "#FFF",
    fontFamily: "Roboto_500Medium",
    fontSize: 18,
  },
})
