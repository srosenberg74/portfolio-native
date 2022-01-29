import React, { useRef, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { stylesMobile, stylesWeb } from "./Styles";
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

  return (
    <View style={styles.layout}>
      <View style={styles.column}>
        <Text style={styles.heading}>Portfolio</Text>
        <View style={styles.entry}>
          <Image
            style={styles.video}
            source={require("../images/ecard.png")}
            alt=""
          />

          <Text style={styles.subheading}>Holiday Greeting eCard</Text>
          <Text style={styles.body}>A Reshareable Greeting eCard</Text>
          <View style={styles.linkContainer}>
            <Pressable
              style={styles.entryLink}
              onPress={() =>
                Linking.openURL("https://srosenberg74.github.io/ecard/")
              }
            >
              <Text style={styles.entryText}>Site</Text>
            </Pressable>
            <Pressable
              onPress={() =>
                Linking.openURL("https://github.com/srosenberg74/ecard")
              }
            >
              <AntDesign name="github" size={50} color="#082c45" />
            </Pressable>
          </View>
        </View>
        <View style={styles.entry}>
          <Image
            style={styles.video}
            source={require("../images/Decidr.png")}
            alt=""
          />

          <Text style={styles.subheading}>Decidr</Text>
          <Text style={styles.body}>An app that helps you make decisions!</Text>
          <View style={styles.linkContainer}>
            <Pressable
              style={styles.entryLink}
              onPress={() =>
                Linking.openURL("https://srosenberg74.github.io/decidr/")
              }
            >
              <Text style={styles.entryText}>Site</Text>
            </Pressable>
            <Pressable
              onPress={() =>
                Linking.openURL("https://github.com/srosenberg74/decidr")
              }
            >
              <AntDesign name="github" size={50} color="#082c45" />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Portfolio;
