import React, {Component, useState} from 'react';
// import {PropsWithChildren, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './src/HomeScreen/HomeScreen';
import WeatherScreen from './src/WeatherScreen/WeatherScreen';
import Options from './src/Footer';

const Tab = createBottomTabNavigator();

import {Dimensions} from 'react-native';

import {fileURLToPath} from 'url';
import Profile from './src/Profile/Profile';

import store from './src/app/store';
import {Provider} from 'react-redux';

const height = Dimensions.get('screen').height;

const App = () => {
  const [screen, setScreen] = useState('home');
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Weather">
          <Tab.Screen name="Weather" component={WeatherScreen} />
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  area: {
    height: height * 0.1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#5D0A8C',
  },
  img: {
    height: 40,
    width: 40,
  },
});

export default App;
