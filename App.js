/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import moment from 'moment-timezone';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  console.log('Listing semester modules and recommended eats');
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Welcome />
              <MyFirstApp />
              <SemModule day={'Monday'} module={'C348'} />
              <SemModule day={'Tuesday'} module={'C273'} />
              <SemModule day={'Friday'} module={'C308'} />

              <Eats
                name={'Sweet Tooth Waffles'}
                location={'W6 level 1, E-canteen'}
              />
              <Eats name={'Crowded Bowl'} location={'W4/W6 Lawn Canteen'} />
              <Eats
                name={'Western Cuisine @ Koufu'}
                location={'E1 Level 1, Koufu'}
              />
              <Eats name={'Ayam Penyet'} location={'W4/W6 Lawn canteen'} />

              <Clock city={'Asia/Singapore'} time={'2014-06-01T12:00:00Z'} />

              <WorldClock location={'Asia/Singapore'} timing={'2014-06-01T12:00:00Z'} />
              <WorldClock location={'Europe/London'} timing={'2014-06-01T12:00:00Z'} />
              <WorldClock location={'America/New_York'} timing={'2014-06-01T12:00:00Z'} />
              <WorldClock location={'Europe/Oslo'} timing={'2014-06-01T12:00:00Z'} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};


//Exercise1&2
const Welcome = () => {
  return <Text>Welcome to C208 Web Frameworks!</Text>;
};

class MyFirstApp extends React.Component {
  render() {
    return (
      <Text>
        My first React Native app {'\n'}
        {'\n'}
        My modules this semester:
      </Text>
    );
  }
}

//Exercise3
const SemModule = (props) => {
  return (
    <Text>
      {/*Welcome to C208 Web Frameworks!*/}
      {props.day} - {props.module}
    </Text>
  );
};

//Exercise4

class Eats extends React.Component {
  render() {
    return (
      <Text>
        {'\n'}
        {this.props.name} {'\n'}
        {this.props.location}
      </Text>
    );
  }
}

//Mini Project
class Clock extends React.Component {
  render() {
    let city = this.props.location;
    let time = moment(this.props.name).time.tz(city).format('HH mm Z');
    return (
      <Text>
        {city} - {time}
      </Text>
    );
  }
}

const WorldClock = (props) => {
  return (
    <text>
      {props.location} - {props.timing}
    </text>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
