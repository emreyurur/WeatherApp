import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  useWindowDimensions,
  StatusBar,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Location from './model/location.js';

// import SunIcon from './assets/sun.svg';
// import CloudIcon from './assets/cloudy.svg';
// import MoonIcon from './assets/moon.svg';
// import RainIcon from './assets/rain.svg';
// import MenuIcon from './assets/menu.svg';
// import SearchIcon from './assets/search.svg';

// import { getStatusBarHeight } from 'react-native-status-bar-height';

// const WeatherIcon = weatherType => {
//   if (weatherType == 'Sunny') {
//     return <SunIcon width={34} height={34} fill="#fff" />;
//   }
//   if (weatherType == 'Rainy') {
//     return <RainIcon width={34} height={34} fill="#fff" />;
//   }
//   if (weatherType == 'Cloudy') {
//     return <CloudIcon width={34} height={34} fill="#fff" />;
//   }
//   if (weatherType == 'Night') {
//     return <MoonIcon width={34} height={34} fill="#fff" />;
//   }
// };


const App = () => {
  const {width: windowWidth, height: windowHeight} = useWindowDimensions();

  return (
    <ScrollView
      horizontal={true}
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}>
      {Location.map((location, index) => {
        if (location.weatherType == 'Night') {
          bgImg = require('./icons/assets/night2.jpg');
        } else if (location.weatherType == 'Cloudy') {
          bgImg = require('./icons/assets/bulutlu.webp');
        } else if (location.weatherType == 'Sunny') {
          bgImg = require('./icons/assets/sunny.jpg');
        } else if (location.weatherType == 'Rainy') {
          bgImg = require('./icons/assets/rainy.jpg');
        }

        return (
          <View style={{width: windowWidth, height: windowHeight}} key={index}>
            <ImageBackground
              source={bgImg}
              style={{
                flex: 1,
              }}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'rgba(0,0,0,0.3)',
                  padding: 20,
                }}>
                <View style={styles.topInfoWrapper}>
                  <View>
                    <Text style={styles.city}>{location.city}</Text>
                    <Text style={styles.dateTime}>{location.dateTime}</Text>
                  </View>
                  <View>
                    <Text style={styles.temparature}>{location.temparature}</Text>
                  </View>
                  <View>
                    {/* {WeatherIcon(location.weatherType)} */}
                    <Text style={styles.weatherType}>{location.weatherType}</Text>
                  </View>
                </View>
                <View style={styles.bottomInfoWrapper}>
                    <View style={{alignItems: 'center'}}>
                      <Text style={styles.infoText}>Wind</Text>
                      <Text style={[styles.infoText, {fontSize: 24}]}>
                        {location.wind}
                      </Text>
                      <Text style={styles.infoText}>km/h</Text>
                      <View style={styles.infoBar}>
                        <View
                          style={{
                            width: location.wind / 2,
                            height: 5,
                            backgroundColor: '#69F0AE',
                          }}
                        />
                      </View>
                    </View>
                    <View style={{alignItems: 'center'}}>
                      <Text style={styles.infoText}>Rain</Text>
                      <Text style={[styles.infoText, {fontSize: 24}]}>
                        {location.rain}
                      </Text>
                      <Text style={styles.infoText}>%</Text>
                      <View style={styles.infoBar}>
                        <View
                          style={{
                            width: location.rain / 2,
                            height: 5,
                            backgroundColor: '#F44336',
                          }}
                        />
                      </View>
                    </View>
                    <View style={{alignItems: 'center'}}>
                      <Text style={styles.infoText}>Humidity</Text>
                      <Text style={[styles.infoText, {fontSize: 24}]}>
                        {location.humidity}
                      </Text>
                      <Text style={styles.infoText}>%</Text>
                      <View style={styles.infoBar}>
                        <View
                          style={{
                            width: location.humidity / 2,
                            height: 5,
                            backgroundColor: '#F44336',
                          }}
                        />
                      </View>
                    </View>
                  </View>
                <View
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.7)',
                    margin: 20,
                    borderBottomWidth: 1,
                  }}></View>
              </View>
              
            </ImageBackground>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  topInfoWrapper: {
    flex: 1,
    marginTop: 160,
    justifyContent:"space-between"
  },
  city: {
    color: '#fff',
    fontSize: 25,
    fontFamily: 'Lato-Regular',
    fontWeight: 'bold',
  },
  dateTime: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Lato-Thin',
    fontWeight: 'bold',
  },
  temparature:{
    color:'#fff',
    fontSize:85,
    marginBottom:-150,
  },
  weatherType:{
    color:'#fff',
    fontSize:25,
    lineHeight:24,
    fontWeight:"bold",
    marginBottom:5,
    marginLeft:10
  },
  infoText:{
    color:"#fff",
    fontSize:14,
    fontWeight:"bold"
  },
  bottomInfoWrapper:{
    flexDirection:"row",
    marginTop:20,
    justifyContent:'space-between'
  }
});
