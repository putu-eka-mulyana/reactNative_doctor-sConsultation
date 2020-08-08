import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Link = ({title, size, Align}) => {
  return (
    <View>
      <Text style={styles.text(size, Align)}>{title}</Text>
    </View>
  );
};

export default Link;

const styles = StyleSheet.create({
  text: (size, Align) => ({
    fontSize: size,
    color: '#7D8797',
    fontFamily: 'Nunito-Regular',
    textDecorationLine: 'underline',
    textAlign: Align,
  }),
});
