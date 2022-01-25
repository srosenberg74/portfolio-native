import React from "react";
import Sam from "../images/Sam.jpg";
import { View, Text, StyleSheet, Image } from 'react-native';

function Profile() {
  return (
    <View style={styles.profile}>
      <View>
        <Image
          source={require({Sam})}
          alt=""
        />
      </View>
      <View className="mb-2">
        <Text h1
        //   className="my-3 fs-1 h1"
        //   style={{color: "#082c45a8", fontFamily: "PT Serif", scrollPadding: "70px"}}
        >
          Profile
        </Text>
        <Text p
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

export default Profile;