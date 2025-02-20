import { View, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import MyButton from "../components/MyButton";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Footer from "../components/Footer";
import { COLORS } from "../utils/StyleGuide";
import ActionButton from "../components/ActionButton";

const IMAGE_HEIGHT = 288;

export default function HomePupil({ navigation }) {
  const onLogout = () => {
    navigation.navigate("StartScreen");
  };

  return (
    <>
      <ImageBackground
        source={require("../assets/images/home.png")}
        style={{ height: IMAGE_HEIGHT, width: "100%", flex: 1 }}
        resizeMode="cover"
      >
        <View style={{ marginTop: 5 }}>
          <ActionButton title="התנתקות" onPress={onLogout} />
        </View>
        <View style={styles.container}>
          <View style={styles.menu}>
            <MyButton
              title="פעילויות"
              color={COLORS.white}
              onPress={() => navigation.navigate("Activitiy")}
              icon={<FontAwesome name="calendar" size={24} />}
            />
            <MyButton
              title="צור קשר"
              color={COLORS.white}
              icon={<AntDesign name="message1" size={24} />}
              onPress={() => navigation.navigate("ContactUs")}
            />
            <MyButton
              title="הודעות"
              color={COLORS.white}
              icon={<FontAwesome name="envelope-o" size={24} />}
            />
          </View>
        </View>
      </ImageBackground>
      <Footer />
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    top: IMAGE_HEIGHT - 50,
    backgroundColor: COLORS.white,
    alignItems: "center",
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },
  menu: {
    top: 64,
  },
});
