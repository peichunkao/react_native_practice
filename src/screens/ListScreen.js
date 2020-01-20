import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity
} from "react-native";
import uuid from "uuid/v4";

const ListScreen = props => {
  const friends = [
    { name: "Mike", age: 20, key: uuid() },
    { name: "Steven", age: 30, key: uuid() },
    { name: "Ava", age: 40, key: uuid() },
    { name: "Russle", age: 50, key: uuid() },
    { name: "Rusty", age: 60, key: uuid() },
    { name: "Choco", age: 70, key: uuid() },
    { name: "Hardy", age: 80, key: uuid() },
    { name: "William", age: 90, key: uuid() }
  ];

  return (
    <View>
      <Button
        onPress={() => props.navigation.navigate("Home")}
        title="Go to Homepage"
      />
      <Button
        onPress={() => props.navigation.navigate("Image")}
        title="Go to ImageScreen"
      />
      <Button
        onPress={() => props.navigation.navigate("Counter")}
        title="Go to Counter"
      />
      <Button
        onPress={() => props.navigation.navigate("Color")}
        title="Go to Color"
      />
      <Button
        onPress={() => props.navigation.navigate("Square")}
        title="Go to SquareScreen"
      />
      <Button
        onPress={() => props.navigation.navigate("Text")}
        title="Go to TextScreen"
      />

      <Button
        onPress={() => props.navigation.navigate("Box")}
        title="Go to BoxScreen"
      />

      <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
        <Text style={{ textAlign: "center" }}>Go to HomePage</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate("Components")}>
        <Text style={{ textAlign: "center" }}>Go to Components</Text>
      </TouchableOpacity>
      <FlatList
        // keyExtractor={(friend) => friend.name}
        //horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={friends}
        renderItem={({ item }) => {
          return (
            <Text style={styles.list}>
              {item.name} - Age:{item.age}
            </Text>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    fontSize: 20,
    color: "blue",
    marginVertical: 20,
    marginHorizontal: 50,
    borderWidth: 5,
    padding: 10,
    marginTop: 10,
    textAlignVertical: "center"
  }
});

export default ListScreen;
