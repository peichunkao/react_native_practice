import React from "react";
import { View, Text, Button } from "react-native";

const ColorCounter = ({ name, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{name}</Text>
      <Button title={`Increase ${name}`} onPress={() => onIncrease()} />
      <Button title={`Decrease ${name}`} onPress={() => onDecrease()} />
    </View>
  );
};

export default ColorCounter