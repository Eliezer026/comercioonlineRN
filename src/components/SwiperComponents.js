import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-swiper";

const SwiperComponents = () => {
  return (
    <Swiper
      style={StyleSheet.wrapper}
      dotStyle={{
        marginTop: -200,
        width: 15,
        height: 5,
        borderRadius: 10,
        backgroundColor: "#fff",
      }}
      activeDotColor="#FFF"
      activeDotStyle={{
        marginTop: -200,
        width: 30,
        height: 6,
        borderRadius: 10,
        backgroundColor: "#FFF",
      }}
    >
      <View style={StyleSheet.slide}>
        <Image
          source={require("../images/paisajes.jpeg")}
          style={{
            marginLeft: 120,
            marginBottom: 130,
            height: 720,
            width: 428,
            marginTop: 68,
            resizeMode: "stretch",
            borderRadius: 10,
          }}
        />
      </View>
      <View style={StyleSheet.slide}>
        <Image
          source={require("../images/paisajes.jpeg")}
          style={{
            marginLeft: 120,
            marginBottom: 130,
            height: 720,
            width: 428,
            marginTop: 68,
            resizeMode: "stretch",
            borderRadius: 30,
          }}
        />
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#FFF",
  },
});

export default SwiperComponents;
