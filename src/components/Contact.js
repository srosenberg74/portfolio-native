import { useState } from "react";
import {
  View,
  Text,
  Pressable,
  TextInput,
  useWindowDimensions,
} from "react-native";
import { stylesMobile, stylesWeb } from "./Styles";

export default function Contact() {
  const [text, onChangeText] = useState("");

  const { width } = useWindowDimensions();
  const widthBreakpoint = 1050;

  let styles;
  if (width < widthBreakpoint) {
    styles = stylesMobile;
  } else {
    styles = stylesWeb;
  }

  const sendContactForm = (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    let mailto = `mailto:samrose4@gmail.com`;
    mailto += `?subject=${subject}`;
    mailto += `&body=${message}`;

    window.open(mailto);
  };

  return (
    <View style={styles.layout}>
      <View style={styles.contactContent}>
        <Text style={styles.heading}>Contact Me</Text>
        <View className="contact-body">
          <View>
            <View className="mb-3">
              <Text style={{ color: "#082c45" }}>Your Name*</Text>
              <TextInput
              style={styles.input}
                value={text}
                onChangeText={onChangeText}
                id="name"
                required
              />
            </View>
            <View className="mb-3">
              <Text style={{ color: "#082c45" }}>Subject*</Text>
              <TextInput
                value={text}
                onChangeText={onChangeText}
                id="subject"
                required
              />
            </View>
            <View className="mb-3">
              <Text style={{ color: "#082c45" }}>Your Message*</Text>
              <TextInput
                value={text}
                onChangeText={onChangeText}
                rows="3"
                required
              ></TextInput>
            </View>
            <Pressable
              type="submit"
              style={{ backgroundColor: "#082c45", color: "white" }}
              onPress={(event) => sendContactForm(event)}
            >
              <Text>Submit</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}
