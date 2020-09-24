import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const Loading = () => {
  return (
    <View style={styles.wrepper}>
      <ActivityIndicator size="large" color={colors.primary} />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  wrepper: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.loadingBackround,
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: 18,
    color: colors.primary,
    fontFamily: fonts.primary[600],
    marginTop: 16,
  },
});
