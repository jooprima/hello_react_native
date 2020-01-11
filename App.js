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
          <Header person="Nama : jooprima" />
          <Header usia="Usia : 28" />
          <Text>First App!</Text>
          <Footer tahun="2020" />
        </View>
      </>
    );
  }
}
