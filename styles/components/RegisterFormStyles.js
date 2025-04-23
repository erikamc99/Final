import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: "100%",
    height: "80%",
    padding: 20,
    justifyContent: "space-evenly",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
  input: {
    borderBottomWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 5,
    fontSize: 16,
  },
  errorText: {
    color: "red",
  },
  loginPrompt: {
    flexDirection: "row",
    justifyContent: "center",
  },
  loginLink: {
    color: "#016216",
    fontWeight: "bold",
  },
});