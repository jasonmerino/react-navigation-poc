import { StackNavigator } from "react-navigation";
import navigationUtils from "../utils/navigationUtils";
import AccountScreen from "../AccountScreen";
import CategoryScreen from "../CategoryScreen";
import styles from "../styles";

const AccountStackNavigator = StackNavigator(
  {
    account: {
      screen: AccountScreen,
      path: "account/index"
    }
  },
  {
    navigationOptions: {
      ...styles.navigationStyle
    }
  }
);

export default AccountStackNavigator;
