import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import {
  TabNavigator,
  StackNavigator,
  NavigationActions,
  StateUtils
} from "react-navigation";
import HomeScreen from "./HomeScreen";
import CartTabScreen from "./CartTabScreen";
import AccountScreen from "./AccountScreen";
import CategoryScreen from "./CategoryScreen";
import ProductDropsScreen from "./ProductDropsScreen";
import CustomHeaderScreen from "./CustomHeaderScreen";
import ProductScreen from "./ProductScreen";
import CartScreen from "./CartScreen";
import navigationUtils from "./utils/navigationUtils";
import Tabs from "./routers/TabNavigator";

const Root = StackNavigator(
  {
    root: {
      screen: Tabs
    },
    cart: {
      screen: CartScreen,
      path: "cart"
    }
  },
  {
    headerMode: "none",
    mode: "card",
    initialRouteName: "root"
  },
  true
);

export default Root;
