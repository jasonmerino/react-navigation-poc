import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import styles from "./styles";
import Touchable from "./Touchable";

export default class ProductScreen extends Component {
  static navigationOptions = {
    title: "Product"
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.pageName}>Product Screen</Text>
        <Touchable onPress={() => this.props.navigation.goBack("shop/index")}>
          Pop to Top
        </Touchable>
      </View>
    );
  }
}
