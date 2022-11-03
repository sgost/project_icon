import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  StatusBar,
  ActivityIndicator,
  Image,
  Button,
  Pressable,
  StyleSheet,
  FlatList,
} from "react-native";
import icon from "../assets/icon.png";
import ham_burger from "../assets/ham_burger.png";
import logo_icon from "../assets/logo_icon.png";
import { useFonts } from "expo-font";
import InputField from "../components/inputField";
import user_icon from "../assets/user_icon.png";

const Signup = () => {
  const [fontsLoaded] = useFonts({
    Cormorant: require("../assets/fonts/Cormorant-Bold.ttf"),
    Inter: require("../assets/fonts/Inter-Regular.ttf"),
    InterMedium: require("../assets/fonts/Inter-Medium.ttf"),
    Nunito: require("../assets/fonts/Nunito-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <StatusBar animated={true} hidden={false} />
      <View style={styles.navDiv}>
        <Image source={logo_icon} style={styles.iconImage} />
        <Image source={ham_burger} style={styles.hamburger} />
      </View>
      <View style={styles.textDiv}>
        <Text style={styles.titleText}>Join the ICONic revolution.</Text>
        <Text style={styles.description}>
          A few steps and you could soon be monetising your music through over
          200 music platforms, and as a result seriously amplifying your
          earnings.
        </Text>
      </View>
      <View style={styles.inputDivMain}>
        <InputField
          inputStyles={styles.userInput}
          label="Your Name"
          labelWidth={96}
          iconShow={false}
          inputIcon={user_icon}
          positionAdjust={30}
        />
        <InputField
          inputStyles={styles.userInput}
          label="Email"
          labelWidth={60}
          iconShow={false}
          inputIcon={user_icon}
          positionAdjust={30}
        />
        <Pressable style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Sign me up!</Text>
        </Pressable>
      </View>
      <Text style={styles.textCopyRight}>
        © Copyright 2022 B4U Network (Europe) Limited. All rights reserved.{" "}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: `100%`,
    alignItems: `center`,
    backgroundColor: "#040404",
  },
  navDiv: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  iconImage: {
    width: 55,
    height: 55,
    resizeMode: `stretch`,
    marginLeft: `45%`,
  },
  hamburger: {
    width: 31,
    height: 22,
    marginLeft: "auto",
  },
  textDiv: {
    justifyContent: "center",
    alignItems: `center`,
    width: `100%`,
    marginTop: 50,
  },
  titleText: {
    color: "white",
    fontSize: 36,
    lineHeight: 36,
    textAlign: "center",
    fontFamily: "Cormorant",
    width: 370,
  },
  description: {
    color: "white",
    fontSize: 20,
    lineHeight: 24,
    textAlign: "center",
    fontFamily: "Nunito",
    width: 390,
    marginTop: 25,
    marginBottom: 15,
    resizeMode: `stretch`,
  },
  inputDivMain: {
    width: `100%`,
    alignItems: "center",
    marginTop: 30,
  },
  userInput: {
    width: "95%",
    height: 76,
    borderWidth: 2,
    borderRadius: 9,
    position: `relative`,
    borderColor: `#F2F2F2`,
    marginTop: 30,
  },
  buttonStyle: {
    width: `95%`,
    height: 48,
    backgroundColor: `#12E1B7`,
    borderRadius: 32,
    justifyContent: `center`,
    alignItems: `center`,
    marginTop: 20,
  },
  buttonText: {
    color: "#000000",
    fontSize: 16,
    fontFamily: "InterMedium",
  },
  textCopyRight: {
    fontFamily: "Inter",
    fontSize: 10,
    color: "#FFEFF5",
    marginTop: 40,
  },
  scrollView: {
    width: "100%",
    height: `100%`,
    backgroundColor: "#040404",
  },
});

export default Signup;
