import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestorantItem, { localRestorants } from "../components/RestorantItem";

const YELP_API_KEY = "";

export default function Home() {
  const [restorantData, setRestorantData] = React.useState(localRestorants);

  return (
    <>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestorantItem restorantData={restorantData} />
      </ScrollView>
    </>
  );
}
