import React, { Component } from "react";
import { NavigationActions } from "react-navigation";
import { Platform, StyleSheet, Text, View } from "react-native";
import styles from "./styles";
import Touchable from "./Touchable";

export default class ProductDropsScreen extends Component {
  static navigationOptions = {
    title: "Product Drops"
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.pageName}>Product Drops Screen</Text>
        <Touchable onPress={() => this.props.navigation.goBack()}>
          POP
        </Touchable>
        <Touchable onPress={() => this.props.navigation.navigate("product")}>
          PUSH
        </Touchable>
      </View>
    );
  }
}
