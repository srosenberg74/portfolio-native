import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  useWindowDimensions,
} from "react-native";
import { stylesMobile, stylesWeb } from "./Styles";

function Nav({ setCurrentPage }) {
  const { width } = useWindowDimensions();
  const widthBreakpoint = 1050;

  let styles;
  if (width < widthBreakpoint) {
    styles = stylesMobile;
  } else {
    styles = stylesWeb;
  }
  return (
    <View style={styles.Header}>
      <View>
        <Pressable onPress={() => setCurrentPage("Profile")}>
          <View>
            <View>
              <Text style={styles.HeaderTitle}>Sam Rosenberg</Text>
            </View>
          </View>
        </Pressable>
      </View>
      <View>
        <View style={styles.HeaderBar}>
          <Pressable onPress={() => setCurrentPage("Profile")}>
            <Text style={styles.headerText} name="Profile">
              Profile
            </Text>
          </Pressable>

          <Pressable onPress={() => setCurrentPage("Study")}>
            <Text style={styles.headerText} name="Study">
              Study
            </Text>
          </Pressable>
          <Pressable onPress={() => setCurrentPage("Career")}>
            <Text style={styles.headerText} name="Career">
              Career
            </Text>
          </Pressable>
          {/* 
          <Text
            navigation={navigation}
            style={styles.headerText}
            name="Education"
            onPress={() => navigation.navigate("Education")}
          >
            Education
          </Text>

          <Text
            navigation={navigation}
            style={styles.headerText}
            name="Portfolio"
            onPress={() => navigation.navigate("Portfolio")}
          >
            Portfolio
          </Text>

          <Text
            style={styles.headerText}
            navigation={navigation}
            name="Contact"
            onPress={() => navigation.navigate("Contact")}
          >
            Contact
          </Text> */}
          <Pressable onPress={() => setCurrentPage("Education")}>
            <Text style={styles.headerText} name="Education">
              Education
            </Text>
          </Pressable>
          <Pressable onPress={() => setCurrentPage("Contact")}>
            <Text style={styles.headerText} name="Contact">
              Contact
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default Nav;
