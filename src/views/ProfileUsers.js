import React, { Component } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  Text,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";

const ProfileUsers = () => {
  return (
    <View>
      <View
        style={{
          backgroundColor: "#FFF",
          flex: 1,
        }}
      >
        <View
          style={{
            backgroundColor: "#00ffff",
            height: 200,
            borderBottomLeftRadius: 60,
            borderBottomRightRadius: 60,
            paddingHorizontal: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 70,
              width: "100%",
            }}
          ></View>
        </View>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../images/imagewoman.jpeg")}
            style={{
              width: 160,
              height: 160,
              borderRadius: 100,
              marginTop: -70,
            }}
          />
          <Text
            style={{
              marginTop: -15,
              fontSize: 25,
              fontWeight: "bold",
              padding: 40,
            }}
          >
            Alison Smith
          </Text>
        </View>
      </View>

      <LinearGradient
        colors={["transparent"]}
        style={{
          left: 0,
          right: 0,
          height: 90,
          marginTop: 360,
        }}
      >
        <ScrollView showsHorizontalScrollIndicator={false}>
          <View
            style={{
              backgroundColor: "#FFF",
              paddingVertical: 8,
              paddingHorizontal: 20,
              marginHorizontal: 20,
              borderRadius: 18,
              marginTop: 25,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Icon name="search" size={26} style={{ marginLeft: 0 }} />
            <TextInput
              placeholder="Buscar"
              placeholderTextColor="#ble5d3"
              style={{
                fontWeight: "bold",
                fontSize: 20,
                width: 268,
              }}
            />
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

export default ProfileUsers;
