import React, { Component } from "react";
import { NavigationActions } from "react-navigation";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import styles from "./styles";
import Touchable from "./Touchable";

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: "Home"
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.pageName}>Home Screen</Text>
        <Touchable onPress={() => this.props.navigation.navigate("category")}>
          PUSH
        </Touchable>
        <Touchable onPress={() => this.props.navigation.navigate("cart")}>
          MODAL
        </Touchable>
        <Touchable
          onPress={() => {
            this.props.navigation.dispatch(
              NavigationActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({
                    routeName: "customHeader"
                  })
                ]
              })
            );
          }}
        >
          REPLACE with Custom Header Screen
        </Touchable>
      </View>
    );
  }
}
