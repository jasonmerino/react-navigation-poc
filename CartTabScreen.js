import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import styles from "./styles";

export default class CartTabScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarOnPress: () => {
      navigation.navigate("one");
      console.log(navigation);
      debugger;
    },
    title: "NONE"
  });

  render() {
    return null;
  }
}
