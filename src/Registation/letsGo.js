// import React, { useState, useEffect } from "react";
// import {
//   Text,
//   View,
//   TextInput,
//   StatusBar,
//   ActivityIndicator,
//   Image,
//   Button,
//   Pressable,
//   StyleSheet,
// } from "react-native";
// import icon from "../assets/icon.png";
// import ham_burger from "../assets/ham_burger.png";
// import logo_icon from "../assets/logo_icon.png";
// import { useFonts } from "expo-font";
// import InputField from "../components/inputField";
// import user_icon from "../assets/user_icon.png";

// const Letsgo = () => {
//   const [fontsLoaded] = useFonts({
//     DMSans: require("../assets/fonts/DMSans-Regular.ttf"),
//   });

//   if (!fontsLoaded) {
//     return null;
//   }
//   return (
//     <View style={styles.container}>
//       <StatusBar animated={true} hidden={false} />
//       <View style={styles.textDiv}>
//         <Text style={styles.titleText}>Let’s go with</Text>
//         <Text style={styles.titleDescription}>
//           How would youlike to be greeted?
//         </Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     width: "100%",
//     height: `100%`,
//     alignItems: `center`,
//     backgroundColor: "#040404",
//   },
//   textDiv: {
//     width: `100%`,
//     flex: 1,
//   },
//   titleText: {
//     color: "white",
//     fontSize: 36,
//     lineHeight: 36,
//     fontFamily: "DMSans",
//     width: 370,
//   },
//   titleDescription: {
//     fontSize: 18,
//     color: "#CEDBE3",
//     fontFamily: "DMSans",
//   },
// });

// export default Letsgo;
