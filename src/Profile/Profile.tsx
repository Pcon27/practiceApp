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

import {faker} from '@faker-js/faker';
import {useSelector, useDispatch} from 'react-redux';

type ProfileProps = {
  username: string;
  avatar: string;
};

const Profile = () => {
  const city = useSelector(state => state.city.value);
  return (
    <View style={styles.area}>
      <Image
        source={{uri: faker.image.avatar()}}
        style={[styles.image, {width: 200, height: 200}]}
      />
      <Text style={styles.username}>USERNAME</Text>
      <Text style={styles.text}>{faker.internet.userName()}</Text>
      <Text style={styles.username}>City of Interest</Text>
      <Text style={styles.text}>{city}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  area: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  image: {
    borderRadius: 100,
    marginTop: 140,
  },
  text: {
    marginTop: 4,
    fontFamily: 'Helvetica-bold',
    fontSize: 30,
  },
  username: {
    marginTop: 30,
  },
});

export default Profile;
