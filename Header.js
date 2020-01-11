import React, {Component} from 'react';
import {Text} from 'react-native';

class Header extends Component {
  render() {
    return <Text>Ini adalah Header {this.props.person} </Text>;
  }
}

export default Header;
