import React from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  useWindowDimensions,
  Button,
} from "react-native";
import * as Linking from "expo-linking";
import { AntDesign } from "@expo/vector-icons";
import { stylesMobile, stylesWeb } from "./Styles";
import { Video, AVPlaybackStatus } from "expo-av";

function Entry(props) {
  const { width } = useWindowDimensions();
  const widthBreakpoint = 1050;
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  let styles;
  if (width < widthBreakpoint) {
    styles = stylesMobile;
  } else {
    styles = stylesWeb;
  }

  return (
    <View style={styles.entry}>
      <Video
        ref={video}
        style={styles.video}
        source={props.videoFile}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        onLoad={() => (status.isPlaying = video.current.playAsync())}
      />
      {/* <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? "Pause" : "Play"}
          onPress={() =>
            status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync()
          }
        />
      </View> */}
      <Text style={styles.entrySubheading}>{props.name}</Text>
      <Text style={styles.entryBody}>{props.description}</Text>
      <View style={styles.linkContainer}>
        <Pressable
          style={styles.entryLink}
          onPress={() => Linking.openURL(props.linkToSite)}
        >
          <Text style={styles.entryText}>Site</Text>
        </Pressable>
        {props.linkToGithub !== null && (
          <Pressable style={styles.entryGHLink} onPress={() => Linking.openURL(props.linkToGithub)}>
            <AntDesign name="github" size={35} color="white" />
          </Pressable>
        )}
      </View>
    </View>
  );
}

export default Entry;
