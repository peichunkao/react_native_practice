import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import ColorCounter from "./ColorCounter";

const SquareScreen = () => {
  const ColorIncrement = 10;
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
    }
  };

  return (
    <View>
      <ColorCounter
        onIncrease={() => setColor("red", ColorIncrement)}
        onDecrease={() => setColor("red", -1 * ColorIncrement)}
        name="Red"
      />
      <ColorCounter
        onIncrease={() => setColor("green", ColorIncrement)}
        onDecrease={() => setColor("green", -1 * ColorIncrement)}
        name="Green"
      />
      <ColorCounter
        onIncrease={() => setColor("blue", ColorIncrement)}
        onDecrease={() => setColor("blue", -1 * ColorIncrement)}
        name="Blue"
      />
      <View
        style={{
          width: 200,
          height: 200,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`
        }}
      ></View>
      <Text>{`rgb(${red}, ${green}, ${blue})`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
