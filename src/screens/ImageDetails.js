import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetails = ({ title, url, score }) => {
  return (
    <View>
      <Image source={url} />
      <Text>This is ImageDetail: {title}</Text>
      <Text>The score of this picture: {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetails;
