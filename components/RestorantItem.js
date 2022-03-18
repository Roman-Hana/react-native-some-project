import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestorants = [
  {
    name: "Grilitsa",
    image_url:
      "https://image.shutterstock.com/image-photo/group-happy-friends-having-breakfast-260nw-1201677928.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviewers: 780,
    rating: 4.5,
  },
  {
    name: "Wake Cup bAr",
    image_url:
      "https://www.linguahouse.com/linguafiles/md5/d01dfa8621f83289155a3be0970fb0cb",
    categories: ["Cafe", "Bar"],
    price: "$$$",
    reviewers: 123123,
    rating: 5.5,
  },
  {
    name: "Italy food",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg",
    categories: ["Cafe", "Bar"],
    price: "$",
    reviewers: 321312,
    rating: 3.5,
  },
];

export default function RestorantItem(props) {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
      {props.restorantData.map((el, i) => (
        <View key={i} style={styles.container}>
          <RestorantImages image={el.image_url} />
          <RestorantInfo name={el.name} rating={el.rating} />
        </View>
      ))}
    </TouchableOpacity>
  );
}

const RestorantImages = (props) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={styles.image}
    />
    <TouchableOpacity style={styles.TouchableOpacityStyles}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestorantInfo = (props) => (
  <View style={styles.restorantInfo}>
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>
        {props.name}
      </Text>
      <Text style={{ fontSize: 13, color: "gray" }}>30-45 minutes</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
      }}
    >
      <Text>{props.rating}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 15,
    backgroundColor: "#FFFF",
  },
  image: {
    width: "100%",
    height: 180,
  },
  TouchableOpacityStyles: {
    position: "absolute",
    right: 20,
    top: 20,
  },
  restorantInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
});
