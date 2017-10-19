import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import styles from "./styles";
import Touchable from "./Touchable";

export default class ProductScreen extends Component {
  static navigationOptions = {
    title: "Product",
    tabBarVisible: false
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.pageName}>Product Screen</Text>
      </View>
    );
  }
}
