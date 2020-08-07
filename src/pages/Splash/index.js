import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILicon} from '../../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted');
    }, 3000);
  });
  return (
    <View style={styles.page}>
      <ILicon />
      <Text style={styles.title}>My Doctor</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#E5E5E5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#112340',
    fontFamily: 'Nunito-SemiBold',
    marginTop: 20,
  },
});
