/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Text, StatusBar, Button, StyleSheet} from 'react-native';
// import Header from './Header';
// import Footer from './Footer';

export default class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     jumlah: 0,
  //   };
  // }

  // handleTambah = () => {
  //   this.setState({
  //     jumlah: this.state.jumlah + 1,
  //   });
  // };

  render() {
    return (
      <>
        {/* <View>
          <StatusBar backgroundColor="blue" />
          <Text style={styles.header}>First App!</Text>
          <Header usia="Usia : 28" />
          <Footer tahun="2020" />
          <Button title="Button Tambah" onPress={this.handleTambah} />
          <Text style={styles.jumlah}>Jumlah : {this.state.jumlah}</Text>
        </View> */}
        <View style={{flex: 1, backgroundColor: 'red'}}>
          <Text style={{flex: 1, backgroundColor: 'yellow', margin: 20}}>
            Halaman 1
          </Text>
          <Text style={{flex: 2, backgroundColor: 'green'}}>Halaman 2</Text>
        </View>
      </>
    );
  }
}

// const styles = StyleSheet.create({
//   header: {
//     marginTop: 20,
//     fontSize: 20,
//     textAlign: 'center',
//   },
//   jumlah: {
//     fontSize: 20,
//     textAlign: 'center',
//     color: 'red',
//     marginTop: 30,
//   },
// });
