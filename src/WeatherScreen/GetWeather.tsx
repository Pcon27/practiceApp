import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
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

import axios, {isCancel, AxiosError} from 'axios';

import LinearGradient from 'react-native-linear-gradient';

const WEATHER_API = '2fe2a660ccee4f29bd7d0d10e5775d14';

type WeatherProps = {
  city: string;
};

const GetWeather = (props: WeatherProps) => {
  const [gust, setGust] = useState('');
  const [pic, setPic] = useState('');
  const getData = (city: string) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${WEATHER_API}`,
      )
      // Handle a successful response from the server
      .then(response => {
        // Getting a data object from response that contains the necessary data from the server
        // console.log('data', data);
        // Save the unique id that the server gives to our object
        // setWind(wind);
        console.log(response.data);
        setGust(
          `${response.data.main.temp}°

${response.data.weather[0].description}`,
        );

        setPic(response.data.weather[0].icon);

        console.log(pic);
      })
      // Catch and print errors if any
      .catch(error => console.error('On create student error', error));
  };

  getData(props.city);

  return (
    <View style={styles.area}>
      <Text style={[styles.text, {paddingTop: 30}, {fontSize: 50}]}>
        {props.city}
      </Text>
      <View>
        <Text style={styles.text}>{gust}</Text>
      </View>
      <Image
        source={{uri: `https://openweathermap.org/img/wn/${pic}@2x.png`}}
        style={[{width: 90, height: 90}, styles.image]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  area: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: '#FDDADA',
    paddingTop: 60,
  },
  text: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 40,
    color: '#FBFBF2',
    textAlign: 'center',
    lineHeight: 25,
    paddingTop: 40,
  },
  image: {
    marginBottom: 235,
  },
});

export default GetWeather;
