import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    // marginTop: 28
  },
  title: {
    fontSize: 35,
    margin: 20,
    alignSelf: "center",
  },
  input: {
    borderBottomWidth: 1,
    padding: 10,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  button: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 70,
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#2975E9",
    borderRadius: 100,
  },
  labelButtton: {
    color: "#eee",
    fontSize: 25,
    marginLeft: 5,
  },
  listContent: {
    marginTop: 15,
  },

  buttonContent: {
    flex: 1,
    alignItems: "flex-end",
  },
  produto: {
    borderBottomWidth: 1,
    borderBottomColor: "#999",
  },
  produtoContent: {
    margin: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
});