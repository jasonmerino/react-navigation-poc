import React, { Component } from "react";
import { NavigationActions } from "react-navigation";
import { Platform, StyleSheet, Text, View } from "react-native";
import styles from "./styles";
import Touchable from "./Touchable";

export default class CategoryScreen extends Component {
  static navigationOptions = {
    title: "Category"
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.pageName}>Category Screen</Text>
        {/* <Touchable
          onPress={() => {
            console.log(this.props.navigation.routes);
            debugger;
            this.props.navigation.dispatch(
              NavigationActions.reset({
                index: 0,
                key: "root",
                actions: [
                  NavigationActions.navigate({
                    routeName: "productDrops"
                  })
                ]
              })
            );
          }}
        >
          REPLACE with product drop
        </Touchable> */}
        <Touchable
          onPress={() => this.props.navigation.navigate("productDrops")}
        >
          PUSH
        </Touchable>
      </View>
    );
  }
}
