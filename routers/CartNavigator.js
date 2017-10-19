import { StackNavigator } from "react-navigation";
import navigationUtils from "../utils/navigationUtils";
import CartTabScreen from "../CartTabScreen";

const CartStackNavigator = StackNavigator({
  cartTabScreen: {
    screen: CartTabScreen,
    path: "cart/index"
  }
});

export default CartStackNavigator;
