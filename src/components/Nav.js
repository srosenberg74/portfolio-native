import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  useWindowDimensions,
} from "react-native";
import { stylesMobile, stylesWeb } from "./Styles";

function Nav({ setCurrentPage, currentPage }) {
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
      <View style={{flexGrow: 1,borderBottomWidth: 1, borderBottomColor: "black", paddingBottom: 10, paddingTop: 10}}>
        <Pressable  onPress={() => setCurrentPage("Profile")}>
          <View>
            <View>
              <Text style={styles.HeaderTitle}>Sam Rosenberg</Text>
            </View>
          </View>
        </Pressable>
      </View>
      <View>
        <View style={styles.HeaderBar}>
          <Pressable
            style={[
              styles.tabs,
              { borderBottomWidth: currentPage === "Profile" ? 0 : 1 },
            ]}
            onPress={() => setCurrentPage("Profile")}
          >
            <Text style={styles.headerText} name="Profile">
              Profile
            </Text>
          </Pressable>

          <Pressable
            style={[
              styles.tabs,
              { borderBottomWidth: currentPage === "Study" ? 0 : 1 },
            ]}
            onPress={() => setCurrentPage("Study")}
          >
            <Text style={styles.headerText} name="Study">
              Study
            </Text>
          </Pressable>
          <Pressable
            style={[
              styles.tabs,
              { borderBottomWidth: currentPage === "Career" ? 0 : 1 },
            ]}
            onPress={() => setCurrentPage("Career")}
          >
            <Text style={styles.headerText} name="Career">
              Career
            </Text>
          </Pressable>
          <Pressable
            style={[
              styles.tabs,
              { borderBottomWidth: currentPage === "Education" ? 0 : 1 },
            ]}
            onPress={() => setCurrentPage("Education")}
          >
            <Text style={styles.headerText} name="Education">
              Education
            </Text>
          </Pressable>
          <Pressable
            style={[
              styles.tabs,
              { borderBottomWidth: currentPage === "Portfolio" ? 0 : 1 },
            ]}
            onPress={() => setCurrentPage("Portfolio")}
          >
            <Text style={styles.headerText} name="Portfolio">
              Portfolio
            </Text>
          </Pressable>
          <Pressable
            style={[
              styles.tabs,
              { borderBottomWidth: currentPage === "Contact" ? 0 : 1 },
            ]}
            onPress={() => setCurrentPage("Contact")}
          >
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
