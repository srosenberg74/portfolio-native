// import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "./src/components/Profile";
import Study from "./src/components/Study";
import Career from "./src/components/Career";
import Nav from "./src/components/Nav";
import MyStack from "./src/components/MyStack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      {/* <NavigationContainer>
        <MyStack />
      </NavigationContainer> */}
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Study"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Profile">
            {(props) => <Profile {...props} />}
          </Stack.Screen>

          <Stack.Screen name="Study">
            {(props) => <Study {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Career">
            {(props) => <Career {...props} />}
          </Stack.Screen>
          {/* <Stack.Screen name="Career" component={Career} />
					<Stack.Screen name="Education" component={Education} />
          <Stack.Screen name="Portfolio" component={Portfolio} />
          <Stack.Screen name="Contact" component={Contact} />  */}
      </Stack.Navigator>
      </NavigationContainer> 
       <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
