import { StyleSheet } from "react-native"
import Constants from "expo-constants"

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 30,
  },

  iconLogout: {
    color: "#092b5a",
  },

  title: {
    fontSize: 22,
    fontFamily: "Inter-SemiBold",
    marginTop: 25,
    textAlign: "center",
    color: "#092b5a",
  },

  description: {
    color: "#6C6C80",
    fontSize: 18,
    marginTop: 10,
    fontFamily: "Inter-SemiBold",
    textAlign: "center",
    marginBottom: 4,
  },

  descriptionItem: {
    color: "#6C6C80",
    fontSize: 15,
    marginTop: 10,
    fontFamily: "Inter-SemiBold",
    textAlign: "center",
    marginBottom: 4,
  },

  mapContainer: {
    flex: 10,
    width: "100%",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 20,
    marginTop: 16,
  },

  map: {
    width: "100%",
    height: "100%",
  },

  mapMarker: {
    width: 90,
    height: 80,
  },

  mapMarkerContainer: {
    width: 90,
    height: 70,
    backgroundColor: "#092b5a",
    flexDirection: "column",
    borderRadius: 8,
    overflow: "hidden",
    alignItems: "center",
  },

  mapMarkerImage: {
    width: 90,
    height: 45,
    resizeMode: "cover",
  },

  mapMarkerTitle: {
    flex: 1,
    fontFamily: "Inter-SemiBold",
    color: "#FFF",
    fontSize: 13,
    lineHeight: 23,
  },

  itemsContainer: {
    flexDirection: "row",
    marginTop: 16,
    marginBottom: 32,
  },

  item: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#eee",
    height: 110,
    width: 130,
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
    fontFamily: "Inter-SemiBold",
    textAlign: "center",
    fontSize: 12,
    marginTop: 3,
    color: "#FFF",
  },

  itemTitleItens: {
    fontFamily: "Inter-SemiBold",
    textAlign: "center",
    fontSize: 15,
    marginTop: 3,
    color: "#092b5a",
  },
})
