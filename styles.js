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
  ProductNavigationBar: {
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

styles.navigationStyle = Platform.select({
  ios: {
    headerTitleStyle: {
      color: "#63666A"
    },
    headerStyle: {
      backgroundColor: "#F5FCFF",
      borderBottomWidth: 1,
      borderBottomColor: "#ddd"
    },
    headerTintColor: "#00A499"
  },
  android: {
    headerTitleStyle: {
      color: "#fff"
    },
    headerStyle: {
      backgroundColor: "#63666A"
    },
    headerTintColor: "#fff"
  }
});

export default styles;
