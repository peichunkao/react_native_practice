import React, { useState } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import uuid from "uuid/v4"

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  let boxes = colors.map(item => {
    return (
      <View
        style={{ width: 100, height: 100, backgroundColor: `${item}` }}
      ></View>
    );
  });

  return (
    <View style={styles.button}>
      <Button
        title="Add a Color"
        onPress={() => {
          setColors([...colors, randomColor()]);
        }}
      />
      {/* {boxes} */}
      <FlatList
        keyExtractor = {() => uuid()}
        data={colors}
        renderItem={({item}) => {
          return <View style={{ width: 100, height: 100, backgroundColor: item }}></View>
          
        }}
      ></FlatList>
    </View>
  )
}

const randomColor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "blue",
    alignItems: "center",
    textAlign: "center",
    fontSize: 30
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: randomColor()
  }
});

export default ColorScreen;
