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
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#6B4E71",
    flex: 0.85,
  },
  containerList: {
    marginHorizontal: 20,
  },
  containerItemList: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  itemList: {
    fontSize: 14,
  },
  deleteButton: {
    backgroundColor: "#6B4E71",
    paddingVertical: 10,
    paddingHorizontal: 18,
  },
  deleteButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
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
