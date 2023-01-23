import React from 'react';
import type {PropsWithChildren} from 'react';
import {
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

import Options from './src/Footer';
import NameBar from './src/HomeScreen/NameBar';
import PostBox from './src/HomeScreen/postBox';

import {Dimensions} from 'react-native';

// import { faker } from '@faker-js/faker/locale/de';

type SectionProps = PropsWithChildren<{
title: string;
}>;

const height = Dimensions.get('screen').height;

const Top = () => {
  return (
<View style={styles.Area}>
   <Text style={styles.Text}>CATMUSE</Text>
</View>
)}

const styles = StyleSheet.create({
  Area: {
    height: height * 0.1,
    backgroundColor: '#5D0A8C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    marginTop: 30,
    fontSize: 40,
    // fontFamily: 'Lobster',
    color: '#FFFFFF',
  },
});

export default Top;
