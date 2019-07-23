import React, { Component } from "react";
import { Image, View } from "react-native";

export default class App extends Component {
  componentDidMount() {
    setTimeout(() => this.props.navigation.navigate("Home"), 2000);
  }
  render() {
    return (
      <View
        style={{
          backgroundColor: "#ef5350",
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Image
          style={{ width: 300, height: 108 }}
          source={require("../../../assets/logo.png")}
        />
      </View>
    );
  }
}
