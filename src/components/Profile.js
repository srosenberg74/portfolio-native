import React from "react";
import Sam from "../images/Sam.jpg";
import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  ScrollView,
  Platform
} from "react-native";
import Nav from "../components/Nav";
import { stylesMobile, stylesWeb } from "./Styles";

function Profile() {
  const { width } = useWindowDimensions();
  const widthBreakpoint = 1050;

  let styles;
  if (width < widthBreakpoint) {
    styles = stylesMobile;
  } else {
    styles = stylesWeb;
  }

  return (
    <View style={styles.ProfileLayout}>
      {Platform.OS !== "web" ? (
        <ScrollView contentContainerStyle={{ height: 700 }}>
          <View style={styles.column}>
            <Image
              source={require("../images/Sam.jpg")}
              alt=""
              style={styles.profilePic}
            />
          </View>
          <View style={styles.column}>
            <Text style={styles.heading}>Profile</Text>
            <Text style={styles.body}>
              I am a React Apprentice at Alphaworks (a subsidiary of Bitwise
              Industries). I am incredibly curious and have a huge thirst for
              knowledge. I am on a mission to gather as many tech skills as I
              can to create the things I dream up, and to become a valuable
              member of any team.
            </Text>
          </View>
        </ScrollView>
      ) : (
        <>
          <View style={styles.column}>
            <Image
              source={require("../images/Sam.jpg")}
              alt=""
              style={styles.profilePic}
            />
          </View>
          <View style={styles.column}>
            <Text style={styles.heading}>Profile</Text>
            <Text style={styles.body}>
              I am a React Apprentice at Alphaworks (a subsidiary of Bitwise
              Industries). I am incredibly curious and have a huge thirst for
              knowledge. I am on a mission to gather as many tech skills as I
              can to create the things I dream up, and to become a valuable
              member of any team.
            </Text>
          </View>
        </>
      )}
    </View>
  );
}

export default Profile;
