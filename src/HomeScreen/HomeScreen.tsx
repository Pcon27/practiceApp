/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
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

import Options from '../Footer';
import NameBar from './NameBar';
import PostBox from './postBox';
import Top from '../Header';

import {Dimensions} from 'react-native';

import {faker} from '@faker-js/faker';

import Stories from './Stories';

import {userInfo} from 'os';
// import { faker } from '@faker-js/faker/locale/de';

export const USERS: User[] = [];

export function createRandomUser(): User {
  return {
    userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

Array.from({length: 10}).forEach(() => {
  USERS.push(createRandomUser());
});

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const height = Dimensions.get('screen').height;

function HomeScreen({navigation}): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <View style={backgroundStyle}>
      {/* <Top /> */}
      <ScrollView style={styles.spacing}>
        <Stories story={faker.image.cats()} />
        <PostBox
          username={faker.internet.userName()}
          avatar={faker.image.avatar()}
          img={faker.image.cats()}
        />
        <PostBox
          username={faker.internet.userName()}
          avatar={faker.image.avatar()}
          img={faker.image.cats()}
        />
        <PostBox
          username={faker.internet.userName()}
          avatar={faker.image.avatar()}
          img={faker.image.cats()}
        />
        <PostBox
          username={faker.internet.userName()}
          avatar={faker.image.avatar()}
          img={faker.image.cats()}
        />
      </ScrollView>
      {/* <View style={styles.footer}>
        <Options navigation={navigation} />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  spacing: {
    height: height * 0.5,
  },
});

export default HomeScreen;
