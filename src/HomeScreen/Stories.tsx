import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  FlatList,
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

import {faker} from '@faker-js/faker';

const height = Dimensions.get('screen').height;

// const height = Dimensions.get('screen').height;

type StoryProps = {
  story: string;
};

export const USERS: User[] = [];

export function createRandomUser(): User {
  return {
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
    img: faker.image.cats(),
  };
}

Array.from({length: 17}).forEach(() => {
  USERS.push(createRandomUser());
});

const Stories = (props: StoryProps) => {
  return (
    <FlatList
    style={styles.FlatList}
      data={USERS}
      renderItem={() => {
        return (
          <View style={styles.Area}>
            <Image source={{uri: props.story}} style={[styles.Image]} />
          </View>
        );
      }}
      horizontal={true}
    />
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
  FlatList: {
    backgroundColor: 'white',
  },
});

export default Stories;
