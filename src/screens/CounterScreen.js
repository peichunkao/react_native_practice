import React, { useState, useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + action.payload };
    case "decrement":
      return { ...state, counter: state.counter - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  // const [counter, updateCounter] = useState(0);
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <View>
      <Button
        title="Increase"
        style={styles.text}
        onPress={() => dispatch({ type: "increment", payload: 1 })}
      />
      <Button
        title="Decrease"
        style={styles.text}
        onPress={() => dispatch({ type: "decrement", payload: 1 })}
      />
      <Text style={styles.text}>Current count:{state.counter} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 35
  }
});

export default CounterScreen;
