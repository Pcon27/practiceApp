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

type UserProps = {
  username: string;
  avatar: string;
};

const NameBar = (props: UserProps) => {
  return (
    <View style={styles.Bar}>
      <Image style={styles.Image} source={props.avatar} />
      <Text style={styles.Text}>{props.username}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Text: {
    color: 'black',
    marginLeft: '3%',
    fontWeight: 'bold',
  },
  Bar: {
    borderTopColor: '#F0F0F0',
    borderTopWidth: 2,
    backgroundColor: '#FFFFFF',
    // marginVertical: 55,
    height: 54,
    alignItems: 'center',
    flexDirection: 'row',
  },
  Image: {
    marginLeft: '3%',
    height: 30,
    width: 30,
    borderRadius: 15,
  },
});

export default NameBar;
