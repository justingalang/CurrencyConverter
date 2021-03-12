import React from 'react';
import { SafeAreaView, ScrollView, Linking, Alert } from 'react-native';

import { Entypo } from '@expo/vector-icons';

import colors from '../constants/colors';
import { RowItem, RowSeperator } from '../components/row_item';


const openURL = (url) => {
  return Linking.openURL(url).catch(() => {
    Alert.alert("Sorry, something went wrong.", "Please Try Again Later.")
  })
}

export default () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <RowItem
          text="Themes"
          onPress={() => alert("todo")}
          rightIcon={
            <Entypo name="chevron-right" size={20} color={colors.blue} />
          }
        />

        <RowSeperator />

        <RowItem
          text="React Native Basics"
          onPress={() => openURL(
            "https://learn.reactnativeschool.com/p/react-native-basics-build-a-currency-converter")
          }
          rightIcon={
            <Entypo name="export" size={20} color={colors.blue} />
          }
        />

        <RowSeperator />

        <RowItem
          text="React Native by Example"
          onPress={() => openURL(
            "https://reactnativebyexample.com"
          )}
          rightIcon={
            <Entypo name="export" size={20} color={colors.blue} />
          }
        />
      </ScrollView>
    </SafeAreaView >
  )
};