import { StackNavigator } from "react-navigation";
import navigationUtils from "../utils/navigationUtils";
import CartTabScreen from "../CartTabScreen";
import styles from "../styles";

const CartStackNavigator = StackNavigator(
  {
    cartTabScreen: {
      screen: CartTabScreen,
      path: "cart/index"
    }
  },
  {
    navigationOptions: {
      ...styles.navigationStyle
    }
  }
);

export default CartStackNavigator;
