import React, { Fragment, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import IntitialScreen from "./src/initialScreen";
import Signup from "./src/Registation/signup";
// import Letsgo from "./src/Registation/letsGo";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    // <View style={styles.container}>
    //   <IntitialScreen />
    //   <Signup />
    // </View>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="IntitialScreen">
        <Stack.Screen
          name="IntitialScreen"
          component={IntitialScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#040404",
    alignItems: "center",
    justifyContent: "center",
  },
});
