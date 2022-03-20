import { View, Text, PermissionsAndroid } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Geolocation from '@react-native-community/geolocation';

Geolocation.getCurrentPosition(info => console.log(info));

export default function SearchBar() {
  
  return (
    <View
      style={{
        marginTop: 15,
        flexDirection: "row",
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 10,
        borderWidth: 2,
        borderColor: "#eee",
      }}
    >
      <GooglePlacesAutocomplete
        placeholder="Search"
        query={{ key: "AIzaSyC_DEyrGqMXgz8MT2hTIpWFNY6TrGmUMEk" }}
        fetchDetails={true}
        onPress={(data, details = null()) => {
          console.log(data, details);
        }}
        currentLocation={true}
        currentLocationLabel="Current location"
        style={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 5, marginRight: 5 }}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              marginRight: 8,
              flexDirection: "row",
              backgroundColor: "#eee",
              padding: 9,
              borderRadius: 30,
              alignItems: "center",
            }}
          >
            <AntDesign
              name="clockcircle"
              size={11}
              style={{ marginRight: 8 }}
            />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
}
