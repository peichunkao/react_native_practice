import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetails from "./ImageDetails";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetails
        title="Forest"
        url={require("../../images/forest.jpg")}
        score={10}
      />
      <ImageDetails
        title="Beach"
        url={require("../../images/beach.jpg")}
        score={6}
      />
      <ImageDetails
        title="Mountain"
        url={require("../../images/mountain.jpg")}
        score={8}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
