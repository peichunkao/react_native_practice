import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View>
      <Text>This is my textscreen.</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        placeholder="Enter a name"
        onChangeText={newValue => setName(newValue)}
      />
      <Text>My name is: {name}</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        placeholder="Enter your password."
        onChangeText={newValue => setPassword(newValue)}
      />
      {password.length < 4? <Text>Password must be more than 4 character</Text>: null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1
  }
});

export default TextScreen;
