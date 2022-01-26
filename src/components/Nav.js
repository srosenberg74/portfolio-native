import React from "react";
import { View, StyleSheet, Text, TouchableHighlight } from "react-native";

function Nav({ navigation }) {
  return (
    <View style={styles.Header} navigation={navigation}>
      <TouchableHighlight
        navigation={navigation}
        onPress={navigation.navigate("Profile")}
      >
        <View navigation={navigation}>
          <View>
            <Text style={styles.HeaderTitle}>Sam Rosenberg</Text>
          </View>
        </View>
      </TouchableHighlight>
      <TouchableHighlight>
        <View style={styles.HeaderBar} navigation={navigation}>
          <Text
            navigation={navigation}
            style={styles.headerText}
            name="Profile"
            onPress={() => navigation.navigate("Profile")}
          >
            Profile
          </Text>

          <Text
            navigation={navigation}
            style={styles.headerText}
            name="Study"
            onPress={() => navigation.navigate("Study")}
          >
            Study
          </Text>

          <Text
            navigation={navigation}
            style={styles.headerText}
            name="Career"
            onPress={() => navigation.navigate("Career")}
          >
            Career
          </Text>

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
          </Text>
        </View>
      </TouchableHighlight>
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
    position: "absolute",
    top: 0,
    left: 0,
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
