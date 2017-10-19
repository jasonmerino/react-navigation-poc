import { TabNavigator, NavigationActions } from "react-navigation";
import navigationUtils from "../utils/navigationUtils";
import ShopStackNavigator from "./ShopNavigator";
import CartStackNavigator from "./CartNavigator";
import AccountStackNavigator from "./AccountNavigator";

const Tabs = TabNavigator(
  {
    shopTab: {
      screen: ShopStackNavigator,
      path: "shop",
      navigationOptions: {
        tabBarLabel: "Shop"
      },
      initialRouteName: "customHeader"
    },
    cartTab: {
      screen: CartStackNavigator
    },
    accountTab: {
      screen: AccountStackNavigator,
      path: "account",
      navigationOptions: {
        tabBarLabel: "Account"
      },
      initialRouteName: "account"
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "#e91e63"
    },
    initialRouteName: "shopTab",
    tabBarPosition: "bottom",
    animationEnabled: false
  }
);

navigationUtils.augmentWithDeepLinkPatterns(Tabs, (path, params) => {
  if (navigationUtils.pageURLPatterns.P_PAGE.test(path)) {
    return NavigationActions.navigate({
      routeName: "shopTab",
      action: NavigationActions.navigate({
        routeName: "product"
      })
    });
  }
});

export default Tabs;
