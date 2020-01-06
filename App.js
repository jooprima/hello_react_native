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
          <StatusBar backgroundColor="grey" />
          <Header />
          <Text>First App!</Text>
          <Footer />
        </View>
      </>
    );
  }
}
