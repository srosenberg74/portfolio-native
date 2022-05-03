import React, { useRef, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { stylesMobile, stylesWeb } from "./Styles";
import Entry from "./Entry";
import { portfolioItems } from "./Data";
import * as Linking from "expo-linking";
import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  Button,
  Pressable,
} from "react-native";

function Portfolio() {
  const { width } = useWindowDimensions();
  const widthBreakpoint = 1050;

  let styles;
  if (width < widthBreakpoint) {
    styles = stylesMobile;
  } else {
    styles = stylesWeb;
  }

  const generateEntries = portfolioItems.map((item, index) => (
    <Entry
      key={index}
      name={item.name}
      uri={item.uri}
      description={item.description}
      linkToSite={item.linkToSite}
      linkToGithub={item.linkToGithub}
      videoFile={item.videoFile}
    />
  ));

  return (
    <View style={styles.layout}>
      <Text style={styles.headingPortfolio}>Portfolio</Text>
      <View style={styles.column}>
        <View style={styles.portfolioColumn}>{generateEntries}</View>
      </View>
    </View>
  );
}

export default Portfolio;
