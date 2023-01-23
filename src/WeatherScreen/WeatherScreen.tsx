import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import SearchBar from './SearchBar';

import LinearGradient from 'react-native-linear-gradient';

import GetWeather from './GetWeather';

const WeatherScreen = () => {
  return (
    <View style={styles.footer}>
      <LinearGradient
        colors={['#A6A2A2', '#847577', '#847577', '#A6A2A2', '#CFD2CD']}
        style={styles.linearGradient}>
        <SearchBar />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    justifyContent: 'flex-start',
    // backgroundColor: '#F3E9D2',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    // borderRadius: 5,
  },
});

export default WeatherScreen;
