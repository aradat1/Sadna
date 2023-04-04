import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const MyButton = ({ title, onPress, color, icon, style }) => {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: color }, style]}
      onPress={onPress}
    >
      <View style={styles.titleAndIconContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.icon}>{icon}</View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "flex-end",
    height: 70,
    width: "90%",
    borderRadius: 30,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "black",
  },
  title: {
    textTransform: "capitalize",
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
  },
  titleAndIconContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  icon: {
    marginVertical: 6,
    marginHorizontal: 20,
  },
});

export default MyButton;