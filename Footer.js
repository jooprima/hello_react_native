import React from 'react';
import {View, Text} from 'react-native';

const Footer = props => {
  var jooprima = '@jooprima';
  return (
    <View>
      <Text>Ini adalah Footer function component dengan file terpisah</Text>
      <Text>
        {jooprima} {props.tahun}
      </Text>
    </View>
  );
};

export default Footer;
