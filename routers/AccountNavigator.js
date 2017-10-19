import { StackNavigator } from "react-navigation";
import navigationUtils from "../utils/navigationUtils";
import AccountScreen from "../AccountScreen";
import CategoryScreen from "../CategoryScreen";

const AccountStackNavigator = StackNavigator({
  account: {
    screen: AccountScreen,
    path: "account/index"
  }
});

export default AccountStackNavigator;
