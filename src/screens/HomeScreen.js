import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Ava I Love You!!!!</Text>
      <Text style={styles.text}>Ava I Love You!!!!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "red"
  }
});

export default HomeScreen;
