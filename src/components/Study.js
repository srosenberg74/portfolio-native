import React from "react";
import { stylesMobile, stylesWeb } from "./Styles";
import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
} from "react-native";

function Study() {
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
      <Text style={styles.heading}>Areas of Study</Text>
      <Text style={styles.body}>
        <Text style={styles.subheading}>Web Development -</Text>
        React, React-Native, JavaScript, HTML, CSS, Bootstrap
      </Text>
      <Text style={styles.body}>
        <Text style={styles.subheading}>Design -</Text>
        Photoshop, Figma, Blender, Lunacy, Clip Studio Paint
      </Text>
      <Text style={styles.body}>
        <Text style={styles.subheading}>Additional Software Experience -</Text>
        Unreal Engine, Unity, Ableton Live, Adobe Audition
      </Text>
      <Text style={styles.body}>
        <Text style={styles.subheading}>
          Additional Programming Languages Studied -
        </Text>
        C++, Python, C#
      </Text>
      </View>
    </View>
  );
}

export default Study;
