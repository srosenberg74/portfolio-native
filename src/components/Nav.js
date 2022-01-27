import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";

function Nav({ setCurrentPage }) {
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

const styles = StyleSheet.create({
  Header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#082c45",
    width: "100vw",
    color: "white",
    padding: 10,
  },
  HeaderTitle: {
    fontSize: 25,
    color: "white",
  },
  HeaderBar: {
    flexDirection: "row",
    backgroundColor: "#082c45",
    width: "100%",
    padding: 5,
    justifyContent: "space-around",
    marginBottom: 0,
  },
  headerText: {
    color: "white",
    fontWeight: "bold",
    alignItems: "center",
    fontSize: 18,
    padding: 8,
  },
});

export default Nav;
