import React, { Component } from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import AppNavigator from "./js/AppNavigator";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#ef5350",
    accent: "#f1c40f"
  }
};

export default class App extends Component {
  render() {
    return (
      <PaperProvider theme={theme}>
        <AppNavigator />
      </PaperProvider>
    );
  }
}
