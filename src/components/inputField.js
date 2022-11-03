import React, { useState, useEffect } from "react";
import { Text, View, TextInput, Image, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

const InputField = (props) => {
  const {
    inputStyles,
    label,
    labelWidth,
    inputIcon,
    positionAdjust,
    iconShow,
  } = props;
  const [fontsLoaded] = useFonts({
    Inter: require("../assets/fonts/Inter-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={inputStyles}>
      <Text
        style={{
          width: labelWidth,
          color: "#898A8D",
          fontSize: 14,
          backgroundColor: "#151313",
          paddingTop: 3,
          paddingBottom: 3,
          paddingLeft: 10,
          paddingRight: 10,
          position: "absolute",
          top: -13,
          left: 15,
          borderRadius: 6,
        }}
      >
        {label}
      </Text>
      {iconShow && <Image source={inputIcon} style={styles.textFieldIcon} />}
      <TextInput
        //   onChangeText={setEmail}
        //   value={userName}
        style={{
          fontSize: 18,
          color: "#F2F2F2",
          paddingLeft: positionAdjust,
          height: "100%",
        }}
        selectionColor={"#FF453A"}
        placeholder="Name"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputTextColor: {
    color: "#898A8D",
    fontSize: 14,
    backgroundColor: "#151313",
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 10,
    paddingRight: 10,
    width: 96,
    position: "absolute",
    top: -13,
    left: 15,
    borderRadius: 6,
  },
  textFieldIcon: {
    width: 27,
    height: 27,
    top: 25,
    left: 20,
  },
});

export default InputField;
