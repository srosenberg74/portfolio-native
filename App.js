// import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useState, useRef } from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import Profile from "./src/components/Profile";
import Study from "./src/components/Study";
import Career from "./src/components/Career";
import Contact from "./src/components/Contact";
import Education from "./src/components/Education";
import Nav from "./src/components/Nav";

export default function App() {
  const [currentPage, setCurrentPage] = useState("Profile");
  const scroll = useRef(null);
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.navbar}>
          <Nav setCurrentPage={setCurrentPage} />
        </View>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContentContainer}
          ref={scroll}
        >
          {currentPage === "Profile" && <Profile />}
          {currentPage === "Study" && <Study />}
          {currentPage === "Career" && <Career />}
          {/* <Education />
        <Portfolio />
        <Contact /> */}
        {currentPage === "Education" && <Education />}
           {currentPage === "Contact" && <Contact />}
        </ScrollView>

        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  scrollView: {
    borderTopWidth: 2,
    borderColor: "#082c45",
    height: "20vh",
  },
  navbar: {
    height: "10%",
    top: 0,
  },
  scrollContentContainer: {
    justifyContent: "space-between",
  },
  main: {
    flex: 1,
  },
});
