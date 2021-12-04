import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ProfileUsers from "./src/views/ProfileUsers";
import { NavigationContainer } from "@react-navigation/native";
import HomeStackNavigator from "./src/navigations/Navigator";
import ViewsFirs from "./src/views/ViewsFirs";
import ScannerQR from "./src/views/ScannerQr";

const App = () => {
  //return <ScannerQR />;

  return (
    <NavigationContainer>
      <HomeStackNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
