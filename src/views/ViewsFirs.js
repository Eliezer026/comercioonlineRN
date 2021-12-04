import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  TextInput,
  Animated,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  ImageBackground,
  Linking,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Bussiness from "./Bussiness";
import { LinearGradient } from "expo-linear-gradient";
import * as firebase from "firebase";
import Datas from "./Data";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const ITEM_MARGIN_BOTTOM = 20;
const ITEM_PADDING = 10;
const HEIGHT_IMG = 100;
const ITEM_SIZE = HEIGHT_IMG + ITEM_PADDING * 2 + ITEM_MARGIN_BOTTOM;

const ViewsFirs = ({ navigation }) => {
  const [datee, setDatee] = useState();
  const getUrl = async () => {
    const url = await Linking.getInitialURL();

    if (url != null) {
      console.log(url + "here");
    }

    return alert(JSON.stringify(url));
  };

  useEffect(() => {
    getUrl();

    fetch("http://localhost:4000/Bussinness", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((responseJson) => {
        const prueb = responseJson;
        // const prueb = responseJson["colmado exito"];

        const ArrayDates = [];
        for (let clave in prueb) {
          ArrayDates.push(prueb[clave]);
        }
        console.log("----------------------");

        setDatee(ArrayDates);

        //console.log(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  //console.log(Bussiness);
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const SeeMore = ({ informs, index }) => {
    console.log("see----------");
    const jsourl = informs.pictureUrl;
    const urri = `${jsourl}`;

    console.log(urri + "views firts");
    const scale = scrollY.interpolate({
      inputRange: [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 2)],
      outputRange: [1, 1, 1, 0],
    });

    const opacity = scrollY.interpolate({
      inputRange: [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 0.6)],
      outputRange: [1, 1, 1, 0],
    });

    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => navigation.push("Profile", informs)}
      >
        <Animated.View
          style={[
            styless.item,
            {
              transform: [{ scale }],
              opacity,
            },
          ]}
        >
          <Image
            style={styless.image}
            source={{ uri: urri }}
            resizeMode="contain"
          />
          <View style={styless.wrapText}>
            <Text style={styless.fontSize}>{informs.namecompany}</Text>
          </View>
        </Animated.View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styless.container}>
      <ImageBackground
        style={{
          height: 250,
          width: "105%",
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          paddingHorizontal: 0,
        }}
        source={require("../images/multitienda.png")}
      >
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 10,
              width: "100%",
            }}
          >
            <View style={{ width: "50%" }}>
              <Text
                style={{
                  fontSize: 27,
                  color: "#FFF",
                  fontWeight: "bold",
                }}
              >
                {" "}
                Tiendas Online
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>

      <LinearGradient
        colors={["transparent", "transparent"]}
        style={{
          left: 0,
          right: 0,
          height: 90,
          marginTop: 0,
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

      <Animated.FlatList
        contentContainerStyle={{
          padding: 20,
        }}
        data={datee}
        renderItem={({ item, index }) => (
          <SeeMore informs={item} index={index} />
        )}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
      />
    </View>
  );
};

const styless = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  item: {
    flexDirection: "row",
    marginBottom: ITEM_MARGIN_BOTTOM,
    borderRadius: 16,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    padding: ITEM_PADDING,
  },
  image: {
    width: 100,
    height: HEIGHT_IMG,
  },
  wrapText: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  fontSize: {
    fontSize: 18,
  },
});

export default ViewsFirs;
