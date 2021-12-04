import React, { useState } from "react";
import {
  ScrollView,
  Text,
  ImageBackground,
  StyleSheet,
  View,
  Dimensions,
  Image,
  FlatList,
  Animated,
} from "react-native";
import Color from "./Color";
import Icon from "react-native-vector-icons/MaterialIcons";
import { StatusBar } from "expo-status-bar";
import ListProducts from "./ListProducts";
import CardOffer from "./CardOffer";

const { width } = Dimensions.get("screen");
const cardwidth = width / 1.8;

import Inform from "./Information";
const ViewsSeeMore = ({ navigation, route }) => {
  const item = route.params;
  console.log(item + "item");
  const looksmore = [];
  for (let dates in item) {
    looksmore.push(item[dates]);
  }
  const datesSeemore = [];
  looksmore.map((element, index) => {
    //console.log(element[Object.getOwnPropertyNames(looksmore[arra[u]])]);

    const here = element[Object.getOwnPropertyNames(looksmore[index])];
    datesSeemore.push(here);
    console.log(here.directionproducts, "direccions");
  });
  console.log(datesSeemore["brandproducts"], "more more");

  console.log(datesSeemore, "$$$$$$$$$$$$$$$");

  //console.log(looksmore);
  const scrollx = React.useRef(new Animated.Value(0)).current;

  return (
    <View
      style={{
        backgroundColor: "#FFF",
        flex: 1,
      }}
    >
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="rgba(0,0,0,0)"
      />
      <ImageBackground style={styles.headerImage} source={item.image}>
        <View style={styles.header}>
          <Icon
            name="arrow-back-ios"
            size={28}
            color={Color.white}
            onPress={navigation.goBack}
          />
        </View>
      </ImageBackground>

      <View>
        <Animated.FlatList
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollx } } }],
            { useNativeDriver: true }
          )}
          horizontal
          data={Inform}
          contentContainerStyle={{
            paddingVertical: 20,
            paddingLeft: 10,
            paddingRight: cardwidth / 2 - 40,
          }}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <CardOffer navigation={navigation} informs={item} index={index} />
          )}
          snapToInterval={cardwidth}
        />
      </View>

      <View style={{ padding: 3, marginTop: 12, marginLeft: 150 }}>
        <Text style={{ fontSize: 30 }}>{item.name}</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          backgroundColor: Color.white,
          paddingBottom: 215,
        }}
      >
        <View style={{ marginBottom: 0 }}>
          <FlatList
            scrollEnabled={true}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            contentContainerStyle={{
              marginTop: 20,
              paddingBottom: 50,
            }}
            data={datesSeemore}
            renderItem={({ item, index }) => (
              <ListProducts
                navigation={navigation}
                informs={item}
                index={index}
              />
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    backgroundColor: Color.primary,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  iconContainer: {
    position: "absolute",
    height: 60,
    width: 60,
    backgroundColor: Color.primary,
    top: -30,
    right: 20,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  headerImage: {
    height: 200,
    marginTop: 60,

    overflow: "hidden",
  },
  header: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    justifyContent: "space-between",
  },
  cardindexone: {
    height: 170,
    backgroundColor: Color.light,
    width: width / 2 - 30,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
    marginRight: 15,
    marginLeft: 15,
    marginTop: 10,
  },
  CardIndexOne: {
    height: 190,
    width: width / 2 - 30,
    marginHorizontal: -15,
    borderRadius: 10,
    marginBottom: 10,
    marginTop: -20,
  },
});

export default ViewsSeeMore;
