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
import SearchHeader from "./SearchHeader";

export default class HomeScreen extends Component {
  static navigationOptions = {
    headerMode: "screen",
    header: () => <SearchHeader />
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.pageName}>Home Screen</Text>
        <Touchable
          onPress={() =>
            this.props.navigation.navigate("category", {
              categoryId: 123
            })}
        >
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
