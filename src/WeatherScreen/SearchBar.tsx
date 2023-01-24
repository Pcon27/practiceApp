import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import GetWeather from './GetWeather';

import {useSelector, useDispatch} from 'react-redux';
import {setCity} from '../app/weatherSlice';

const SearchBar = () => {
  const city = useSelector(state => state.city.value);
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  // const [city, setCity] = useState('');

  return (
    <View style={styles.Area}>
      <TextInput
        style={styles.TextInput}
        placeholder="Search a city!"
        onChangeText={text => setInput(text)}
      />
      <TouchableOpacity
        style={styles.Button}
        title={'Submit'}
        onPress={() => {
          dispatch(setCity(input));
        }}
        color={'#CFD2CD'}>
        <Text style={styles.text}>Submit</Text>
      </TouchableOpacity>
      <GetWeather city={city} />
    </View>
  );
};

const styles = StyleSheet.create({
  TextInput: {
    backgroundColor: '#FFFFFF',
    height: 50,
    marginTop: 15,
    paddingLeft: 10,
    borderColor: '#CFD2CD',
    borderWidth: 3,
    fontFamily: 'Helvetica-Bold',
    fontSize: 17,
    borderRadius: 10,
    width: 350,
  },
  Area: {
    flex: 1,
    alignItems: 'center',
  },
  Button: {
    height: 50,
    width: 125,
    color: '#CFD2CD',
    marginTop: 10,
    backgroundColor: '#CFD2CD',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    letterSpacing: 1,
    fontFamily: 'Helvetica-Bold',
  },
});

export default SearchBar;
