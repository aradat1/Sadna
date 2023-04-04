import { useNavigation } from "@react-navigation/native";
import {
  addDoc,
  collection,
  getCountFromServer,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import MyButton from "../compoonents/MyButton";
import db from "../config";
import Footer from "../compoonents/Footer";
import MyTittle from "../compoonents/MyTittle";

export default function Register4() {
  const navigation = useNavigation();
  const [subject, setSubject] = useState("");
  const [place, setPlace] = useState("");
  const [hour, setHour] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState(false);

  const addRecordTodb = async (obj) => {
    try {
      const coll = collection(db, "tasks");
      let docRef;
      // MAKE SUBJECT FIELD UNIQUE
      const q = query(coll, where("subject", "==", obj?.subject));

      const snapshot = await getCountFromServer(q);

      if (
        snapshot.data().count === 0 &&
        subject !== "" &&
        place !== "" &&
        hour !== "" &&
        date !== ""
      ) {
        setError(false);
        docRef = await addDoc(collection(db, "tasks"), obj);
        console.log("Document written with ID: ", docRef?.id);
      } else {
        setError(true);

        console.log("not added");
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  useEffect(() => {}, []);

  return (
    <>
      <View style={styles.container}>
        <MyTittle text="יצירת פעולה" />
        <TextInput
          style={styles.text}
          onChangeText={(e) => setSubject(e)}
          value={subject}
        />
        <TextInput
          style={styles.text}
          onChangeText={(e) => setPlace(e)}
          value={place}
        />
        <TextInput
          style={styles.text}
          onChangeText={(e) => setHour(e)}
          value={hour}
        />
        <TextInput
          style={styles.text}
          onChangeText={(e) => setDate(e)}
          value={date}
        />
        {error && (
          <View>
            <Text style={styles.errorMsg}>Fill The Form Again</Text>
          </View>
        )}
        <MyButton
          style={{ width: "50%", height: 40, fontSize: 15 }}
          color="yellow"
          title="פרסם"
          onPress={() =>
            addRecordTodb({
              subject,
              place,
              hour,
              date,
            })
          }
        />
        <MyButton
          style={{ width: "50%", height: 40 }}
          title="הביתה"
          color="white"
          onPress={() => navigation.navigate("Home3")}
        />
      </View>
      <Footer />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 50,
  },
  text: {
    borderWidth: 1,
    width: 300,
    fontSize: 24,
    borderRadius: 20,
    height: 50,
    marginVertical: 8,
    padding: 10,
  },
  errorMsg: {
    color: "red",
    fontSize: 15,
  },
});