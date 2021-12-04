import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Image,
  Animated,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/MaterialIcons";
import Inform from "./Information";

const { width } = Dimensions.get("screen");
const cardwidth = width / 1.8;

const CardOffer = ({ navigation, informs, index }) => {
  console.log(index + "cardOffert");
  const scrollx = React.useRef(new Animated.Value(0)).current;
  const inputRange = [
    (index - 1) * cardwidth,
    index * cardwidth,
    (index + 1) * cardwidth,
  ];
  const opacity = scrollx.interpolate({
    inputRange,
    outputRange: [0.7, 0, 0.7],
  });

  const scale = scrollx.interpolate({
    inputRange,
    outputRange: [0.8, 1, 0.8],
  });

  console.log(informs);
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => navigation.push("Details", informs)}
    >
      <Animated.View style={{ ...styles.card }}>
        <Animated.View style={{ opacity }} />
        <View style={styles.priceTag}>
          <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>
            Oferta
          </Text>
        </View>
        <Image source={informs.image} style={styles.cardImage} />
        <View style={styles.cardDetails}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 17,
                  marginEnd: 12,
                  marginLeft: 12,
                }}
              >
                {informs.name}
              </Text>
              <Text
                style={{
                  color: "#908e8c",
                  fontSize: 12,
                  marginTop: 7,
                  left: 12,
                }}
              >
                <Text>{informs.location}</Text>
              </Text>
              <Icon
                name="place"
                size={26}
                color="red"
                style={{ right: 15, marginVertical: -20 }}
              />
            </View>
          </View>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  categoryListContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 10,
  },
  categoryListText: {
    fontSize: 17,
    fontWeight: "bold",
  },
  card: {
    height: 150,
    width: cardwidth,
    elevation: 15,
    marginRight: 20,
    borderRadius: 15,
    backgroundColor: "#f5a623",
  },
  cardTwo: {
    height: 180,
    width: 200,
    elevation: 15,
    marginRight: 12,
    marginLeft: 6,
    borderRadius: 15,
    backgroundColor: "#fff",
  },
  cardImage: {
    height: 100,
    width: "100%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  cardImageTwo: {
    height: 140,
    width: "100%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  priceTag: {
    height: 40,
    width: 80,
    backgroundColor: "#00a46c",
    position: "absolute",
    zIndex: 1,
    right: 0,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  cardDetails: {
    height: 60,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    padding: 20,
    width: "100%",
  },
  cardDetailsTwo: {
    height: 50,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    padding: 20,
    width: "100%",
  },

  cardOverlay: {
    height: 280,
    backgroundColor: "#fff",
    position: "absolute",
    zIndex: 100,
    width: cardwidth,
    borderRadius: 15,
  },
});

export default CardOffer;
