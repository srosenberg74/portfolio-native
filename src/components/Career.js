import React from "react";
import { stylesMobile, stylesWeb } from "./Styles";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import Nav from "../components/Nav";

function Career() {
  const { width } = useWindowDimensions();
  const widthBreakpoint = 1050;

  let styles;
  if (width < widthBreakpoint) {
    styles = stylesMobile;
  } else {
    styles = stylesWeb;
  }
  return (
    <View style={styles.layout}>
      <View style={styles.content}>
        <Text style={styles.heading}>Career Development</Text>

        <Text style={styles.subheadingCareer}>
          React Apprentice | Alphaworks | Sept 2021-current{" "}
        </Text>
        <Text style={styles.body}>
          I am truly blessed to be an Alphaworks Apprentice. For one year I am
          being paid to do what I love, learn! Lead by Juan Lucero, an amazing
          and experienced Web Designer, and with an incredible group of
          apprentices, I am learning and honing more and more of the skills I
          will need to succeed in the tech world everyday.
        </Text>
      </View>
    </View>
  );
}

export default Career;
