import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import styles from "./styles";

export default class CartTabScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarOnPress: () => {
      navigation.navigate("cart");
    },
    title: "Cart"
  });

  render() {
    return null;
  }
}
