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
import OneScreen from "./OneScreen";
import TwoScreen from "./TwoScreen";
import CustomHeaderScreen from "./CustomHeaderScreen";
import ProductScreen from "./ProductScreen";
import CartScreen from "./CartScreen";
import navigationUtils from "./utils/navigationUtils";
import Tabs from "./routers/TabNavigator";

const Root = StackNavigator(
  {
    root: {
      screen: navigationUtils.componentizeNavigator(Tabs)
    },
    cart: navigationUtils.createScreen(CartScreen, "cart")
  },
  {
    headerMode: "none"
  },
  true
);

export default navigationUtils.componentizeNavigator(Root);
