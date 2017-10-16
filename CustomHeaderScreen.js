import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import styles from "./styles";
import CustomHeaderTitle from "./CustomHeaderTitle";
import Touchable from "./Touchable";

export default class CustomHeaderScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const count =
      (navigation.state.params && navigation.state.params.count) || 0;
    return {
      headerTitle: (
        <CustomHeaderTitle
          title="Custom Header Title"
          subtitle={`Subtitle ${count}`}
        />
      )
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.pageName}>Custom Header Screen</Text>
        <Touchable
          onPress={() =>
            this.props.navigation.setParams({
              count:
                ((this.props.navigation.state.params &&
                  this.props.navigation.state.params.count) ||
                  0) + 1
            })}
        >
          Update route params
        </Touchable>
      </View>
    );
  }
}
