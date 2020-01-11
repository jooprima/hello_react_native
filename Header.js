import React, {Component} from 'react';
import {Text, View, TextInput} from 'react-native';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      umur: this.props.usia,
      inputan: '',
    };
  }

  handleInput = event => {
    this.setState({inputan: event});
  };

  render() {
    return (
      <View>
        <Text>{this.state.umur}</Text>
        <TextInput
          onChangeText={this.handleInput}
          placeholder="masukan inputan"
          value={this.state.inputan}
        />
        <Text>Ini adalah Text : {this.state.inputan}</Text>
      </View>
    );
  }
}

export default Header;
