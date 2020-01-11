/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Text, StatusBar} from 'react-native';
import Header from './Header';
import Footer from './Footer';

export default class App extends Component {
  render() {
    return (
      <>
        <View>
          <StatusBar backgroundColor="blue" />
          <Header person="ini adalah props person" />
          <Text>First App!</Text>
          <Footer tahun="2020" />
        </View>
      </>
    );
  }
}
