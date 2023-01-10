import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    paddingTop: 50,
  },

  iconLogout: {
    marginTop: 20,
    color: "#092b5a",
  },

  title: {
    color: "#322153",
    fontSize: 32,
    fontFamily: "Inter-SemiBold",
    alignItems: "flex-end",
  },

  description: {
    color: "#6C6C80",
    fontSize: 18,
    marginTop: 50,
    fontFamily: "Inter-SemiBold",
    maxWidth: 260,
    lineHeight: 24,
  },

  main: {
    flex: 1,
    justifyContent: "center",
  },
})
