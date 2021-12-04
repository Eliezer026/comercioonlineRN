import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../views/Home";
import Detail from "../views/Detail";
import Favoruite from "../views/Favoruite";
import Profile from "../views/Profile";
import { Image } from "react-native";
import ListProducts from "../views/ListProducts";
import ViewsSeeMore from "../views/ViewsSeeMore";
import ViewsFirs from "../views/ViewsFirs";

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false,
};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="ViewsFirs" component={ViewsFirs} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Details" component={Detail} />
      <Stack.Screen name="ListProducts" component={ListProducts} />
      <Stack.Screen name="ViewsSeeMore" component={ViewsSeeMore} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
