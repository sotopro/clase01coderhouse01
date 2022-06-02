import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 60,
    marginHorizontal: 20,
  },
  containerList: {
    marginHorizontal: 20,
  },
  modalContent: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
  },
  modalTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    marginVertical: 20,
    marginHorizontal: 20,
  },
  modalText: {
    fontSize: 18,
    marginHorizontal: 20,
  },
  modalMessage: {
    fontSize: 18,
    marginHorizontal: 20,
    marginVertical: 20,
    fontWeight: "bold",
  },
});
