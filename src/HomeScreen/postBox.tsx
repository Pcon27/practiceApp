import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
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

import NameBar from './NameBar';

import {Dimensions} from 'react-native';
import {memoryUsage} from 'process';

import {useSelector, useDispatch} from 'react-redux';
import {like, unlike} from '../app/likedSlice';

const width = Dimensions.get('screen').width;

type PostProps = {
  username: string;
  img: string;
  avatar: string;
};

const PostBox = (props: PostProps) => {
  const liked = useSelector(state => state.liked.value);
  const dispatch = useDispatch();
  return (
    <View>
      <NameBar username={props.username} avatar={{uri: props.avatar}} />
      <Image source={{uri: props.img}} style={styles.Image} />
      <View style={styles.CommentBox}>
        <TouchableOpacity
          onPress={() => {
            liked ? dispatch(unlike()) : dispatch(like());
          }}>
          <Image
            source={
              liked
                ? require('../../Images/heartRed.png')
                : require('../../Images/heartWhite.png')
            }
            style={styles.LikeBtn}
          />
        </TouchableOpacity>
        <Text style={styles.Text}>
          <Text style={{fontWeight: 'bold'}}>{props.username} </Text>
          <Text>Look at this cat!</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  LikeBtn: {
    height: 26,
    width: 29,
    marginLeft: '2%',
    marginTop: '1.5%',
  },
  CommentBox: {
    backgroundColor: 'white',
  },
  Image: {
    height: width,
    width: width,
  },
  Text: {
    marginHorizontal: '2%',
    marginTop: '2%',
    paddingBottom: '2%',
  },
});

export default PostBox;
