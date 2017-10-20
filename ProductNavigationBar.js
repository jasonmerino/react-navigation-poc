import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import styles from "./styles";

function ProductNavigationBar(props) {
  return (
    <View style={styles.customHeader}>
      <Text style={styles.ProductNavigationBar}>{props.title}</Text>
      <Text style={styles.customHeaderSubTitle}>{props.subtitle}</Text>
    </View>
  );
}

export default ProductNavigationBar;
