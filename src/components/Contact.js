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
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

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

    let mailto = `mailto:samrose4@gmail.com`;
    mailto += `?subject=${subject}`;
    mailto += `&body=${message}`;

    window.open(mailto);
  };

  return (
    <View style={styles.layout}>
      <View style={styles.contactContent}>
        <View>
          <View style={styles.center}>
            <Text style={styles.heading}>Contact Me</Text>
            <View>
              <Text style={{ color: "#082c45" }}>Your Name*</Text>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                id="name"
                required
              />
            </View>
            <View>
              <Text style={{ color: "#082c45" }}>Subject*</Text>
              <TextInput
                style={styles.input}
                value={subject}
                onChangeText={setSubject}
                id="subject"
                required
              />
            </View>
            <View>
              <Text style={{ color: "#082c45" }}>Your Message*</Text>
              <TextInput
                style={styles.input}
                value={message}
                onChangeText={setMessage}
                rows="3"
                required
              ></TextInput>
            </View>
            <Pressable
              type="submit"
              style={styles.submit}
              onPress={(event) => sendContactForm(event)}
            >
              <Text style={styles.submitText}>Submit</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}
