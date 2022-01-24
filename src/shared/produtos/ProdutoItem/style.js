import { StyleSheet } from "react-native";
import Constants from 'expo-constants';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginTop: Constants.statusBarHeight
  },
  title: {
    fontSize: 35,
    marginTop: 25,
    margin: 20,
    alignSelf: "center",
  },
  inputContainer: {
    padding: 10,
    marginHorizontal: 20,
    marginBottom: 20,
    height: 60
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 5
  },
  inputMsgError: {
    color: 'red',
    fontWeight: "bold",
  },
  flatButton: {
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
    flex: 1,
    marginTop: 15,
    // marginBottom: 100
  },

  buttonContent: {
    flex: 1,
    alignItems: "flex-end",
  },
  produto: {
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    margin: 10,
    padding: 15,
    height: 115,
    borderColor: '#24C0EB',
  },
  produtoHeader: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 60

  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },

  inputSection: {
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 20,
    width: 300,
    height:60,
    borderColor: '#24C0EB',
    marginBottom: 15,
    padding: 15
  },
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 20,
    width: 361,
    height:59,
    borderColor: '#24C0EB',
    marginBottom: 15
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
    // borderWidth: 1
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 22,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 20,
    color: '#000'
  }
});