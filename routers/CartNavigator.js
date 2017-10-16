import { StackNavigator } from "react-navigation";
import navigationUtils from "../utils/navigationUtils";
import CartTabScreen from "../CartTabScreen";

const CartStackNavigator = StackNavigator({
  cartTabScreen: navigationUtils.createScreen(CartTabScreen, "cart/index")
});

export default CartStackNavigator;
