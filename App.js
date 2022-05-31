import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { styles } from "./styles";

export default function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

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
      {list.map((item) => (
        <View key={item.id}>
          <Text style={styles.itemList}>{item.value}</Text>
        </View>
      ))}
    </View>
  );
}
