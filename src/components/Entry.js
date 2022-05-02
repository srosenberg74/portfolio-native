import React from "react";
import { View, Text, Pressable, Image, useWindowDimensions } from "react-native";
import * as Linking from "expo-linking";
import { AntDesign } from "@expo/vector-icons";
import { stylesMobile, stylesWeb } from "./Styles";

function Entry(props) {
  const { width } = useWindowDimensions();
  const widthBreakpoint = 1050;

  let styles;
  if (width < widthBreakpoint) {
    styles = stylesMobile;
  } else {
    styles = stylesWeb;
  }

  return (
    <View style={styles.entry}>
      <Image style={styles.video} source={props.uri} alt="" />
      <Text style={styles.subheading}>{props.name}</Text>
      <Text style={styles.body}>{props.description}</Text>
      <View style={styles.linkContainer}>
        <Pressable
          style={styles.entryLink}
          onPress={() => Linking.openURL(props.linkToSite)}
        >
          <Text style={styles.entryText}>Site</Text>
        </Pressable>
        <Pressable onPress={() => Linking.openURL(props.linkToGithub)}>
          <AntDesign name="github" size={35} color="white" />
        </Pressable>
      </View>
    </View>
  );
}

export default Entry;
