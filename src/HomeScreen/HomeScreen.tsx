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

import {List, ListItem} from 'react-native-elements';

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
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
    img: faker.image.cats(),
  };
}

Array.from({length: 20}).forEach(() => {
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
      <FlatList
        data={USERS}
        // eslint-disable-next-line react/no-unstable-nested-components
        ListHeaderComponent={() => {
          return <Stories story={faker.image.cats()} />;
        }}
        renderItem={() => {
          return (
            <View>
              <PostBox
                username={faker.internet.userName()}
                avatar={faker.image.cats()}
                img={faker.image.cats()}
              />
            </View>
          );
        }}
      />

      {/* <Top /> */}
      {/* <FlatList style={styles.spacing}>
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
      </FlatList> */}
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
