import React, {Component, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  NativeModules,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Button,
  TouchableOpacity,
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

import MyStack from '../MyStack';

import HomeScreen from './HomeScreen/HomeScreen';
import MusicScreen from './WeatherScreen/WeatherScreen';

import {Dimensions} from 'react-native';
const height = Dimensions.get('screen').height;

const Options = ({navigation}) => {
  const [screen, setScreen] = useState('home');

  return (
    <View style={styles.area}>
      <TouchableOpacity
        onPress={() => {
          setScreen('home');
          navigation.navigate('HomeScreen');
        }}>
        <Image
          style={styles.img}
          source={
            screen === 'home'
              ? require('../Images/houseBlack.png')
              : require('../Images/houseWhite.png')
          }
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setScreen('music');
          navigation.navigate('MusicScreen');
        }}>
        <Image
          style={styles.img}
          source={
            screen === 'music'
              ? require('../Images/musicBlack.png')
              : require('../Images/musicWhite.png')
          }
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setScreen('profile');
        }}>
        <Image
          style={styles.img}
          source={
            screen === 'profile'
              ? require('../Images/profileBlack.png')
              : require('../Images/profileWhite.png')
          }
        />
      </TouchableOpacity>
    </View>
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

export default Options;
