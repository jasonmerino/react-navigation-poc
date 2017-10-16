import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { NavigationActions, StateUtils } from "react-navigation";
import styles from "./styles";
import Touchable from "./Touchable";

export default class AccountScreen extends Component {
  static navigationOptions = {
    title: "Account"
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.pageName}>Account Screen</Text>
        <Touchable
          onPress={() => {
            this.props.navigation.dispatch(
              NavigationActions.reset({
                index: 0,
                key: "root",
                actions: [NavigationActions.navigate({ routeName: "shopTab" })]
              })
            );
          }}
        >
          Shop tab, product page
        </Touchable>
      </View>
    );
  }
}
