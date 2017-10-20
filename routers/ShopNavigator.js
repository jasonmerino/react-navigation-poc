import { StackNavigator, NavigationActions } from "react-navigation";
import navigationUtils from "../utils/navigationUtils";
import HomeScreen from "../HomeScreen";
import CategoryScreen from "../CategoryScreen";
import ProductDropsScreen from "../ProductDropsScreen";
import CustomHeaderScreen from "../CustomHeaderScreen";
import ProductScreen from "../ProductScreen";
import styles from "../styles";

const ShopStackNavigator = StackNavigator(
  {
    shop: {
      screen: HomeScreen,
      path: "shop/index"
    },
    category: {
      screen: CategoryScreen,
      path: "shop/category"
    },
    productDrops: {
      screen: ProductDropsScreen,
      path: "shop/product-drop"
    },
    customHeader: {
      screen: CustomHeaderScreen,
      path: "shop/custom-header"
    },
    product: {
      screen: ProductScreen,
      path: "shop/product"
    }
  },
  {
    navigationOptions: {
      ...styles.navigationStyle,
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
