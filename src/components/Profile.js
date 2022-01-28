import React from "react";
import Sam from "../images/Sam.jpg";
import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
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
      <View style={styles.column}>
        <Image
          source={require("../images/Sam.jpg")}
          alt=""
          style={styles.profilePic}
        />
      </View>
      <View style={styles.column}>
        <Text
          style={styles.heading}
          //   className="my-3 fs-1 h1"
          //   style={{color: "#082c45a8", fontFamily: "PT Serif", scrollPadding: "70px"}}
        >
          Profile
        </Text>
        <Text
          style={styles.body}
          //   className="fs-5 fw-bold p"
          //   style={{lineHeight: 1.4, color: "#082c45d7", fontFamily: "raleway"}}
        >
          I am a React Apprentice at Alphaworks (a subsidiary of Bitwise
          Industries). I am incredibly curious and have a huge thirst for
          knowledge. I am on a mission to gather as many tech skills as I can to
          create the things I dream up, and to become a valuable member of any
          team.
        </Text>
      </View>
    </View>
  );
}

// const stylesWeb = StyleSheet.create({
//   layout: {
//     height: "100vh",
//     backgroundColor: "silver",
//     padding: "80px",
//     columnCount: "2",
//     columnWidth: "50%",
//     display: "flex",
//     flexDirection: "row",
//     paddingTop: 120,
//   },
//   profilePic: {
//     height: 450,
//     width: 450,
//     alignSelf: "center",
//   },
//   heading: {
//     fontSize: 50,
//     fontWeight: "bold",
//     color: "#082c45",
//   },
//   body: {
//     fontSize: 22,
//     color: "#082c45d7",
//   },
//   column: {
//
//   },
// });

// const stylesMobile = StyleSheet.create({
//   layout: {
//     minHeight: "100vh",
//     backgroundColor: "silver",
//     padding: "40px",
//     paddingTop: 120,
//   },
//   profilePic: {
//     height: 300,
//     width: 300,
//     alignSelf: "center",
//   },
//   heading: {
//     fontSize: 50,
//     fontWeight: "bold",
//     color: "#082c45",
//   },
//   body: {
//     fontSize: 22,
//     color: "#082c45d7",
//   },
// });

export default Profile;
