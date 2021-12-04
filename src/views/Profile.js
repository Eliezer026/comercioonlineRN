import React, { useState, useEffect } from "react";
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
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/MaterialIcons";
import Inform from "./Information";
import ListProducts from "./ListProducts";
import Lavadora from "./Lavadora";
import LavadoraOferta from "./LavadoraOferta";
import Comedor from "./Comedor";
import ComedorOferta from "./ComedorOferta";
import Tv from "./Tv";
import TvOferta from "./TvOferta";
import AllProduct from "./AllProduct";
import AllProductOffer from "./AllProductOffer";
import Alls from "./All";

const { width } = Dimensions.get("screen");
const cardwidth = width / 1.8;

const ITEM_MARGIN_BOTTOM = 20;
const ITEM_PADDING = 10;
const HEIGHT_IMG = 100;
const ITEM_SIZE = HEIGHT_IMG + ITEM_PADDING * 2 + ITEM_MARGIN_BOTTOM;

const Profile = ({ navigation, route }) => {
  const item = route.params;
  const looksmore = [];
  console.log("----------------Ver Mas----------------");
  const nameproductslooksmore = Object.getOwnPropertyNames(item.Products);
  console.log(nameproductslooksmore);
  const looksmores = nameproductslooksmore.map((cate) => item.Products[cate]);
  const voicee = item.Products[nameproductslooksmore["DVD"]];
  //console.log(item.Products);

  for (let dates in item.Products) {
    looksmore.push(item.Products[dates]);
  }
  console.log(looksmore);

  console.log("--------------DVD-------------");

  //console.log("Test", item.Products["DVD"]);
  //console.log("prue", Object.getOwnPropertyNames(item.Products));
  const nameproducts = Object.getOwnPropertyNames(item.Products);

  //console.log(nameproducts);
  console.log(nameproducts);

  const categories = nameproducts;
  categories.push("Todos");
  categories.reverse();
  categories.push("Ver Mas");

  const Testapp = [];
  const categorieslist = categories.filter((cate) => cate.slice(3));
  console.log(categorieslist);

  const voice = item.Products[categorieslist[1]];
  const p = Object.getOwnPropertyNames(voice);
  const a = voice[p];
  //const q = Object.getOwnPropertyNames(a);
  //Testapp.push(a[q]);
  //p.forEach((e) => Testapp.push(e));

  for (let i = 0; i < p.length; i++) {
    const rr = Object.getOwnPropertyNames(voice[p[i]]);
    const f = voice[p[i]];
    //console.log(f + "for");

    Testapp.push(f[rr]);
    //console.log(f[rr], ",solution");
  }

  // console.log(voice["Vocina inalambrica"], "eeAAe");
  console.log(Testapp, "eeTTe");

  /*{
    console.log(categorieslist);
    console.log(categories);

    if (categorieslist[1] === categorieslist[1]) {
      console.log(item.Products[categorieslist[1]]);
      console.log("trueee");
    } else {
      console.log("false");
    }
  }*/

  //const categories = ["Todos", "Lavadora", "Comedor", "TV", "Mas"];
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const scrollx = React.useRef(new Animated.Value(0)).current;
  const scrollY = React.useRef(new Animated.Value(0)).current;

  const SeeMore = ({ informs, index }) => {
    console.log("-----------------see more-------------");
    // console.log(informs);
    //console.log(informs.Nameproducts);

    const seemore = [];
    for (let dates in informs) {
      seemore.push(informs[dates]);
    }
    //const datessend = [];

    //if(Object.getOwnPropertyNames(datessend))

    const arra = Object.getOwnPropertyNames(informs);
    const dateseemore = [];
    for (let u = 0; u < arra.length; u++) {
      if (arra[u] !== "Nameproducts") {
        //console.log(informs[arra[u]]);
        dateseemore.push(informs[arra[u]]);
      }
    }
    console.log("-------new object");
    console.log(dateseemore);

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
        onPress={() => navigation.push("ViewsSeeMore", dateseemore)}
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
          <Image style={styless.image} resizeMode="contain" />
          <View style={styless.wrapText}>
            <Text style={styless.fontSize}>{informs.Nameproducts}</Text>
          </View>
        </Animated.View>
      </TouchableOpacity>
    );
  };

  const CategoryList = () => {
    return (
      <View style={styles.categoryListContainer}>
        {categorieslist.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}
          >
            <View>
              <Text
                style={{
                  ...styles.categoryListText,
                  color: selectedCategoryIndex == index ? "#00bfff" : "",
                }}
              >
                {item}
              </Text>
              {selectedCategoryIndex == index && (
                <View
                  style={{
                    height: 3,
                    width: 30,
                    backgroundColor: "#00bfff",
                    marginTop: 2,
                  }}
                />
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  };
  const Cardtwo = ({ informs, index }) => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => navigation.push("Details", informs)}
      >
        <View style={{ marginTop: 50 }}>
          <View style={styles.cardTwo}>
            <View style={styles.priceTag}>
              <Text
                style={{
                  color: "#fff",
                  marginRight: 30,
                  marginTop: 21,
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Ver
              </Text>
              <Icon
                style={{
                  color: "#fff",
                  fontSize: 30,
                  left: 18,
                  bottom: 20,
                }}
                name="visibility"
              />
            </View>
            <Image source={informs.image} style={styles.cardImageTwo} />
            <View style={styles.cardDetailsTwo}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 15,
                      marginEnd: 15,
                      marginLeft: -12,
                      marginVertical: -15,
                    }}
                  >
                    {informs.name}
                  </Text>
                </View>
              </View>

              <Text style={{ marginTop: 0 }}>{informs.location}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const Card = ({ informs, index }) => {
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

    //console.log(informs);
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => navigation.push("Details", informs)}
      >
        <Animated.View style={{ ...styles.card, transform: [{ scale }] }}>
          <Animated.View style={{ ...styles.cardOverlay, opacity }} />
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

  return (
    <View
      style={{
        backgroundColor: "#FFF",
        flex: 1,
      }}
    >
      <ImageBackground
        style={{
          height: 250,
          width: "105%",

          paddingHorizontal: 0,
        }}
        source={require("../images/frankmuebles.jpeg")}
      >
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 70,
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
                Comercial Existo
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>

      <LinearGradient
        colors={["rgba(0,164,169,0.2)", "transparent"]}
        style={{
          left: 0,
          right: 0,
          height: 90,
          marginTop: -15,
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
            <Icon name="search" size={30} style={{ marginLeft: 20 }} />
            <TextInput
              placeholder="Buscar"
              placeholderTextColor="#ble5d3"
              style={{
                fontWeight: "bold",
                fontSize: 24,
                width: 268,
              }}
            />
          </View>
        </ScrollView>
      </LinearGradient>

      <CategoryList />
      {selectedCategoryIndex == 0 ? (
        <View>
          <View>
            <Animated.FlatList
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollx } } }],
                { useNativeDriver: true }
              )}
              horizontal
              data={AllProductOffer}
              contentContainerStyle={{
                paddingVertical: 20,
                paddingLeft: 10,
                paddingRight: cardwidth / 2 - 40,
              }}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => (
                <Card informs={item} index={index} />
              )}
              snapToInterval={cardwidth}
            />
          </View>
        </View>
      ) : (
        <View></View>
      )}

      {selectedCategoryIndex == 0 ? (
        <View style={{ marginBottom: 0, flex: 9 }}>
          <FlatList
            scrollEnabled={true}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            contentContainerStyle={{
              marginTop: 20,
              paddingBottom: 50,
            }}
            data={AllProduct}
            renderItem={({ item, index }) => (
              <Cardtwo informs={item} index={index} />
            )}
          />
        </View>
      ) : (
        <View></View>
      )}

      {selectedCategoryIndex == 1 ? (
        <View>
          <View>
            <Animated.FlatList
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollx } } }],
                { useNativeDriver: true }
              )}
              horizontal
              data={LavadoraOferta}
              contentContainerStyle={{
                paddingVertical: 20,
                paddingLeft: 10,
                paddingRight: cardwidth / 2 - 40,
              }}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => (
                <Card informs={item} index={index} />
              )}
              snapToInterval={cardwidth}
            />
          </View>
        </View>
      ) : (
        <View></View>
      )}

      {selectedCategoryIndex == 1 ? (
        <View style={{ marginBottom: 0, flex: 9 }}>
          <FlatList
            scrollEnabled={true}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            contentContainerStyle={{
              marginTop: 20,
              paddingBottom: 50,
            }}
            data={Testapp}
            renderItem={({ item, index }) => (
              <ListProducts
                navigation={navigation}
                informs={item}
                index={index}
              />
            )}
          />
        </View>
      ) : (
        <View></View>
      )}

      {selectedCategoryIndex == 2 ? (
        <View>
          <View>
            <Animated.FlatList
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollx } } }],
                { useNativeDriver: true }
              )}
              horizontal
              data={ComedorOferta}
              contentContainerStyle={{
                paddingVertical: 20,
                paddingLeft: 10,
                paddingRight: cardwidth / 2 - 40,
              }}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => (
                <Card informs={item} index={index} />
              )}
              snapToInterval={cardwidth}
            />
          </View>
        </View>
      ) : (
        <View></View>
      )}

      {selectedCategoryIndex == 2 ? (
        <View style={{ marginBottom: 0, flex: 9 }}>
          <FlatList
            scrollEnabled={true}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            contentContainerStyle={{
              marginTop: 20,
              paddingBottom: 50,
            }}
            data={Comedor}
            renderItem={({ item, index }) => (
              <ListProducts
                navigation={navigation}
                informs={item}
                index={index}
              />
            )}
          />
        </View>
      ) : (
        <View></View>
      )}

      {selectedCategoryIndex == 3 ? (
        <View>
          <View>
            <Animated.FlatList
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollx } } }],
                { useNativeDriver: true }
              )}
              horizontal
              data={TvOferta}
              contentContainerStyle={{
                paddingVertical: 20,
                paddingLeft: 10,
                paddingRight: cardwidth / 2 - 40,
              }}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => (
                <Card informs={item} index={index} />
              )}
              snapToInterval={cardwidth}
            />
          </View>
        </View>
      ) : (
        <View></View>
      )}

      {selectedCategoryIndex == 3 ? (
        <View style={{ marginBottom: 0, flex: 9 }}>
          <FlatList
            scrollEnabled={true}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            contentContainerStyle={{
              marginTop: 20,
              paddingBottom: 50,
            }}
            data={Tv}
            renderItem={({ item, index }) => (
              <ListProducts
                navigation={navigation}
                informs={item}
                index={index}
              />
            )}
          />
        </View>
      ) : (
        <View></View>
      )}

      {selectedCategoryIndex == 4 ? (
        <View style={styless.container}>
          <Animated.FlatList
            contentContainerStyle={{
              padding: 20,
            }}
            data={looksmore}
            renderItem={({ item, index }) => (
              <SeeMore informs={item} index={index} />
            )}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: scrollY } } }],
              { useNativeDriver: true }
            )}
          />
        </View>
      ) : (
        <View></View>
      )}
    </View>
  );
};

const styless = StyleSheet.create({
  container: {
    flex: 1,
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
    backgroundColor: "#fff",
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
    backgroundColor: "#00bfff",
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
    height: 60,
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

export default Profile;
