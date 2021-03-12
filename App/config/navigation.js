import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import Home from '../screens/home';
import Options from '../screens/options';
import CurrencyList from '../screens/currency_list';
import colors from '../constants/colors';


const MainStack = createStackNavigator();
const MainStackScreen = () => (
  <MainStack.Navigator
  //initialRouteName="CurrencyList"
  >
    <MainStack.Screen
      name="Home"
      component={Home}
      options={{ headerShown: false }} />
    <MainStack.Screen name="Options" component={Options} />
  </MainStack.Navigator>
);

const ModalStack = createStackNavigator();
const ModalStackScreen = () => (
  <ModalStack.Navigator mode="modal">
    <ModalStack.Screen
      name="Main"
      component={MainStackScreen}
      options={{ headerShown: false }}
    />
    <ModalStack.Screen
      name="CurrencyList"
      component={CurrencyList}
      options={({ navigation, route }) => ({
        title: route.params && route.params.title,
        headerLeft: null,
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.pop()} style={{ paddingHorizontal: 10 }}>
            <Entypo name="cross" size={30} color={colors.blue} />
          </TouchableOpacity>
        )
      })} />
  </ModalStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <ModalStackScreen />
  </NavigationContainer>
);