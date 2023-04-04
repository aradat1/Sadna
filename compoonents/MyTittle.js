import { View, Text, StyleSheet } from "react-native";
import React from "react";

const MyTittle = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default MyTittle;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    marginVertical: 5,
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
  },
});