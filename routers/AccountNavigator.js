import { StackNavigator } from "react-navigation";
import navigationUtils from "../utils/navigationUtils";
import AccountScreen from "../AccountScreen";
import OneScreen from "../OneScreen";

const AccountStackNavigator = StackNavigator({
  account: navigationUtils.createScreen(AccountScreen, "account/index"),
  one: navigationUtils.createScreen(OneScreen, "account/one")
});

export default AccountStackNavigator;
