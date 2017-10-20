import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import styles from "./styles";

export default class CartScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerMode: "float",
    title: "Cart"
  });

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.pageName}>Cart Screen</Text>
      </View>
    );
  }
}
