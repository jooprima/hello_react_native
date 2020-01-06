import React from 'react';
import {View, Text} from 'react-native';

const Footer = () => {
  var jooprima = '@jooprima';
  return (
    <View>
      <Text>Ini adalah Footer function component dengan file terpisah</Text>
      <Text>{jooprima}</Text>
    </View>
  );
};

export default Footer;
