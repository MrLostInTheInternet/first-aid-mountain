import { StyleSheet, Platform, StatusBar } from "react-native";

const statusBar:any = StatusBar.currentHeight

export default StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? statusBar : 0
  }
});