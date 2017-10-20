import React from "react";
import PropTypes from "prop-types";
import { withNavigation } from "react-navigation";
import {
  Platform,
  StyleSheet,
  View,
  TextInput,
  Animated,
  Text
} from "react-native";
import Touchable from "./Touchable";

const styles = StyleSheet.create({
  container: {
    height: 64,
    paddingTop: 22,
    ...Platform.select({
      ios: {
        backgroundColor: "#fff"
      },
      android: {
        backgroundColor: "#63666A"
      }
    }),
    width: "100%",
    flexDirection: "row"
  },
  input: {
    height: 44,
    flex: 1,
    margin: 8,
    fontSize: 11,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: "#00A499",
    backgroundColor: "#fff"
  }
});

class SearchHeader extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  pop = () => {
    this.props.navigation.goBack(null);
  };

  renderBackButton = () => {
    if (this.props.withBackButton) {
      return (
        <Touchable onPress={this.pop}>
          <Text style={{ color: Platform.OS === "ios" ? "#63666A" : "#fff" }}>
            Back
          </Text>
        </Touchable>
      );
    }
  };

  render() {
    return (
      <Animated.View style={styles.container}>
        {this.renderBackButton()}
        <TextInput
          placeholder="What are you shopping for today?"
          style={styles.input}
        />
      </Animated.View>
    );
  }
}

export default withNavigation(SearchHeader);
