import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "./src/components/Profile";
import Nav from "./src/components/Nav";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Profile"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ title: "Profile" }}
          />
          {/* <Stack.Screen name="Study" component={Study} /> 
					<Stack.Screen name="Career" component={Career} />
					<Stack.Screen name="Education" component={Education} />
          <Stack.Screen name="Portfolio" component={Portfolio} />
          <Stack.Screen name="Contact" component={Contact} /> */}
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
