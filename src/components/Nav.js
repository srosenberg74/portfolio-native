import React from "react";
import { View, StyleSheet, Text, TouchableHighlight } from "react-native";

function Nav({ navigation }) {
  return (
    <View style={styles.Header} navigation={navigation}>
      <TouchableHighlight
        navigation={navigation}
        onPress={navigation.navigate("Profile")}
      >
        <View style={styles.HeaderWrap} navigation={navigation}>
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
    backgroundColor: "#082c45",
    // height: 100,
    // width: "100%",
    paddingBottom: 20,
    zIndex: -2,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100vw",
    color: "white",
  },
  HeaderTitle: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    // padding: 30,
  
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
  // HeaderSearch: {
  // 	marginVertical: 30,

  HeaderWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "flex-end",
    width: "100%",
    paddingTop: 10,
    paddingBottom: 20,
  },
  bodyText: {
    color: "#efd595",
  },
  profileImage: {
    height: "10%",
    width: "10%",
    borderRadius: 5,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});

export default Nav;
