import React from 'react';
import type {PropsWithChildren} from 'react';
import {
    Image,
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

const height = Dimensions.get('screen').height;

// const height = Dimensions.get('screen').height;

type StoryProps = {
  story: string;
};

const Stories = (props: StoryProps) => {
  return (
    <ScrollView
      horizontal={true}
      contentContainerStyle={styles.Area}
      alwaysBounceHorizontal={false}
      bounces={false}>
      <Image source={{uri: props.story}} style={[styles.Image]} />
      <Image source={{uri: props.story}} style={styles.Image} />
      <Image source={{uri: props.story}} style={styles.Image} />
      <Image source={{uri: props.story}} style={styles.Image} />
      <Image source={{uri: props.story}} style={styles.Image} />
      <Image source={{uri: props.story}} style={styles.Image} />
      <Image source={{uri: props.story}} style={styles.Image} />
      <Image source={{uri: props.story}} style={styles.Image} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Area: {
    height: height * 0.1,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  Image: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginHorizontal: 6,
  },
});

export default Stories;
