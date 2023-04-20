import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import Background from '../components/Background';
import CustomBackButton from '../components/CustomBackButton';
import Header from '../components/Header';
import Footer from '../components/Footer'
import Button from '../components/Button';
import { theme } from '../core/theme';
import ActionButton from "../components/ActionButton";
import { useNavigation } from '@react-navigation/native';


export default function GroupSelectionScreen() {
  const [selectedValue, setSelectedValue] = useState('');
  const navigation = useNavigation();

  const groups = [
    'סניף תל אביב - יפו',
    'סניף חולון',
    'סניף הרצליה',
    'סניף רמת גן',
  ];

  const onSubmitPressed = () => {
    if (selectedValue) {
      navigation.navigate('LoginScreen');
    }
  }; 

  return (
    <Background>
      <CustomBackButton goBack={navigation.goBack} />
      <Header>בחירת קבוצה</Header>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>קבוצות במחוז מרכז:</Text>
        {groups.map((group) => (
          <TouchableOpacity
            key={group}
            style={styles.radioContainer}
            onPress={() => setSelectedValue(group)}
          >
            <View style={[styles.radioButton, selectedValue === group && styles.radioButtonSelected]}>
              {selectedValue === group && <View style={styles.radioButtonInner} />}
            </View>
            <Text style={styles.radioLabel}>{group}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Button
        mode="contained"
        onPress={onSubmitPressed}
        style={{ marginTop: 24 }}
        disabled={!selectedValue}
      >
        סיום הרשמה
      </Button>
      <Footer style={styles.footer} />
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 16,
    left: 16,
  },
  contentContainer: {
    backgroundColor: '#F2E6FF',
    padding: 20,
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },
  radioLabel: {
    fontSize: 18,
    marginLeft: 16,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  radioButton: {
    borderWidth: 2,
    borderRadius: 50,
    borderColor:  theme.colors.primary,
    height: 24,
    width: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButtonSelected: {
    borderColor: theme.colors.primary,
  },
  radioButtonInner: {
    height: 12,
    width: 12,
    borderRadius: 50,
    backgroundColor: theme.colors.primary,
  },
});
