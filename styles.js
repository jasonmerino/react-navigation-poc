import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  pageName: {
    fontWeight: "bold",
    marginBottom: 10
  },
  touchable: {
    height: 44
  },
  customHeaderTitle: {
    ...Platform.select({
      ios: {
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center"
      },
      android: {}
    })
  },
  customHeaderSubTitle: {
    ...Platform.select({
      ios: {
        textAlign: "center"
      },
      android: {}
    })
  }
});

export default styles;
