import React, { Component } from "react";
import { NavigationActions } from "react-navigation";
import { Platform, StyleSheet, Text, View } from "react-native";
import styles from "./styles";
import Touchable from "./Touchable";

export default class OneScreen extends Component {
  static navigationOptions = {
    title: "One"
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.pageName}>One Screen</Text>
        <Touchable
          onPress={() => {
            console.log(this.props.navigation.routes);
            debugger;
            this.props.navigation.dispatch(
              NavigationActions.reset({
                index: 0,
                key: null,
                actions: [
                  NavigationActions.navigate({
                    routeName: "two"
                  })
                ]
              })
            );
          }}
        >
          REPLACE with 2
        </Touchable>
        <Touchable onPress={() => this.props.navigation.navigate("two")}>
          PUSH to 2
        </Touchable>
      </View>
    );
  }
}
