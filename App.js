/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Text, StatusBar} from 'react-native';

class Header extends Component {
  render(){
    return <Text>Ini adalah Header </Text>;
  }
}

export default class App extends Component<props> {
  render() {
    return (
      <>
        <View>
          <StatusBar backgroundColor="grey" />
          <Header />
          <Text>First App!</Text>
        </View>
      </>
    );
  }
}
