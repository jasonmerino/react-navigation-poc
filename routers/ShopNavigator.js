import { StackNavigator, NavigationActions } from "react-navigation";
import navigationUtils from "../utils/navigationUtils";
import HomeScreen from "../HomeScreen";
import OneScreen from "../OneScreen";
import TwoScreen from "../TwoScreen";
import CustomHeaderScreen from "../CustomHeaderScreen";
import ProductScreen from "../ProductScreen";

const ShopStackNavigator = StackNavigator(
  {
    shop: navigationUtils.createScreen(HomeScreen, "shop/index"),
    one: navigationUtils.createScreen(OneScreen, "shop/one"),
    two: navigationUtils.createScreen(TwoScreen, "shop/two"),
    customHeader: navigationUtils.createScreen(
      CustomHeaderScreen,
      "shop/customHeader"
    ),
    product: navigationUtils.createScreen(ProductScreen, "shop/product")
  },
  {
    navigationOptions: {
      headerBackTitle: null // disabled text next to back button
    }
    // initialRouteName: "customHeader"
  }
);

navigationUtils.augmentWithDeepLinkPatterns(
  ShopStackNavigator,
  (path, params) => {
    if (navigationUtils.pageURLPatterns.P_PAGE.test(path)) {
      return NavigationActions.navigate({
        routeName: "product"
      });
    }
  }
);

export default ShopStackNavigator;
