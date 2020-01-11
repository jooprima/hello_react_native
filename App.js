/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Text, StatusBar, Button, Alert} from 'react-native';
import Header from './Header';
import Footer from './Footer';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      jumlah: 0,
    };
  }

  handleTambah = () => {
    this.setState({
      jumlah: this.state.jumlah + 1,
    });
  };

  render() {
    return (
      <>
        <View>
          <StatusBar backgroundColor="blue" />
          <Header usia="Usia : 28" />
          <Text>First App!</Text>
          <Footer tahun="2020" />
          <Button title="Button Tambah" onPress={this.handleTambah} />
          <Text>Jumlah : {this.state.jumlah}</Text>
        </View>
      </>
    );
  }
}
