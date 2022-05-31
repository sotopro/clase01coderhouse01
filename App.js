import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  FlatList,
  Modal,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";

export default function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const handleOnChangeText = (text) => {
    setText(text);
  };

  const addItem = () => {
    if (text !== "") {
      setList((currentList) => [
        ...currentList,
        { id: Math.random(), value: text },
      ]);
      setText("");
    }
  };

  const onHandlerDelete = (id) => {
    setList((currentList) => currentList.filter((item) => item.id !== id));
    setItemSelected({});
    setModalVisible(!modalVisible);
  };

  const onHandlerModal = (id) => {
    setItemSelected(list.filter((item) => item.id === id)[0]);
    setModalVisible(!modalVisible);
  };

  const renderItem = ({ item }) => (
    <View style={styles.containerItemList}>
      <Text style={styles.itemList}>{item.value}</Text>
      <TouchableOpacity
        onPress={() => onHandlerModal(item.id)}
        style={styles.deleteButton}
      >
        <Text style={styles.deleteButtonText}>X</Text>
      </TouchableOpacity>
    </View>
  );

  const keyExtractor = (item) => item.id.toString();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TextInput
          placeholder="new task"
          style={styles.input}
          placeholderTextColor="#6B4E71"
          value={text}
          onChangeText={(text) => handleOnChangeText(text)}
        />
        <Button title="ADD" onPress={() => addItem()} color="#6B4E71" />
      </View>
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.containerList}
      />
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => null}
      >
        <TouchableOpacity
          style={styles.modalContent}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <View style={styles.modalTitleContainer}>
            <Text style={styles.modalTitle}>Delete Item</Text>
          </View>
          <Text style={styles.modalText}>Are you sure?</Text>
          <Text style={styles.modalMessage}>{itemSelected.value}</Text>
          <Button
            title="Okay"
            onPress={() => onHandlerDelete(itemSelected.id)}
            color="#6B4E71"
          />
        </TouchableOpacity>
      </Modal>
    </View>
  );
}
