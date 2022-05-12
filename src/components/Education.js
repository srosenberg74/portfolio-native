import React from "react";
import { stylesMobile, stylesWeb } from "./Styles";
import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  Platform,
  ScrollView,
} from "react-native";

function Education() {
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
      {Platform.OS === "web" ? (
        <View style={styles.content}>
          <Text style={styles.heading}>Education</Text>

          <Text style={styles.subheadingCareer}>
            Pursuing Associate's Degree in Web Design | Clovis Community College
            | August 2020-current{" "}
          </Text>
          <Text style={styles.body}>
            I am 3 units away from completing my A.S. Degree in Web Design.
            Going back to school to study the things I am passionate about has
            been an amazingly rewarding experience. I am eager to use all of the
            incredible skills I have been gathering.
          </Text>
          <Text style={styles.subheadingCareer}>
            Bachelor's Degree in English | UC Santa Barbara | 1993-1998{" "}
          </Text>
          <Text style={styles.body}>
            I have a Bachelor of Arts Degree in English from the University of
            California, Santa Barbara
          </Text>
        </View>
      ) : (
        <ScrollView contentContainerStyle={{ height: 800 }}>
          <View style={styles.content}>
            <Text style={styles.heading}>Education</Text>

            <Text style={styles.subheadingCareer}>
              Pursuing Associate's Degree in Web Design | Clovis Community
              College | August 2020-current{" "}
            </Text>
            <Text style={styles.body}>
              I am 3 units away from completing my A.S. Degree in Web Design.
              Going back to school to study the things I am passionate about has
              been an amazingly rewarding experience. I am eager to use all of
              the incredible skills I have been gathering.
            </Text>
            <Text style={styles.subheadingCareer}>
              Bachelor's Degree in English | UC Santa Barbara | 1993-1998{" "}
            </Text>
            <Text style={styles.body}>
              I have a Bachelor of Arts Degree in English from the University of
              California, Santa Barbara
            </Text>
          </View>
        </ScrollView>
      )}
    </View>
  );
}

export default Education;
