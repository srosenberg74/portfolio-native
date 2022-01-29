// import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useState, useRef } from "react";
import { StyleSheet, Text, View, ScrollView, FlatList, useWindowDimensions } from "react-native";
import Profile from "./src/components/Profile";
import Study from "./src/components/Study";
import Career from "./src/components/Career";
import Contact from "./src/components/Contact";
import Education from "./src/components/Education";
import Portfolio from "./src/components/Portfolio";
import Nav from "./src/components/Nav";
import { stylesMobile, stylesWeb } from "./src/components/Styles";

export default function App() {
  const [currentPage, setCurrentPage] = useState("Profile");
  const scroll = useRef(null);
  const { width } = useWindowDimensions();
  const widthBreakpoint = 1050;

  let styles;
  if (width < widthBreakpoint) {
    styles = stylesMobile;
  } else {
    styles = stylesWeb;
  }

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
          {currentPage === "Portfolio" && <Portfolio />}
          {currentPage === "Contact" && <Contact />}
        </ScrollView>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}
