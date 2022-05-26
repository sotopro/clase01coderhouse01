import { View, TextInput, Button } from "react-native";
import { styles } from "./styles";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TextInput
          placeholder="new task"
          style={styles.input}
          placeholderTextColor="#6B4E71"
        />
        <Button title="ADD" onPress={() => null} color="#6B4E71" />
      </View>
    </View>
  );
}
