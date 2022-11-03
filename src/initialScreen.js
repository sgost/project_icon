import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  StatusBar,
  ActivityIndicator,
  Image,
  Button,
  StyleSheet,
} from "react-native";
import icon from "./assets/icon.png";
import user_icon from "./assets/user_icon.png";

const IntitialScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Signup");
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar animated={true} hidden={false} />
      <Image source={icon} style={styles.iconImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: `100%`,
    alignItems: `center`,
    justifyContent: `center`,
    backgroundColor: "#040404",
  },
  iconImage: {
    width: 240,
    height: 90,
    resizeMode: `stretch`,
  },
});

export default IntitialScreen;
