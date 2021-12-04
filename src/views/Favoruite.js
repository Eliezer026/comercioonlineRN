import React, { Component } from "react";
import { View, Text } from "react-native";

class Favoruite extends Component {
  render() {
    return (
      <View
        style={{
          justifyContent: "center",
          alignContent: "center",
          flex: 1,
        }}
      >
        <Text>Favoruite</Text>
      </View>
    );
  }
}

export default Favoruite;
