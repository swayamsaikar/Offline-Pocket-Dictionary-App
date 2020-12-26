import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default class Header extends Component {
  render() {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F7665E",
          padding: 35,
        }}
      >
        <Text style={{ color: "#ffffff", fontSize: 18 }}>
          Pocket Dictionary
        </Text>
      </View>
    );
  }
}
