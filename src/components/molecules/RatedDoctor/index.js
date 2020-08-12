import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {IconStart, Doctor1} from '../../../assets';
import {fonts, colors} from '../../../utils';

const RatedDoctor = () => {
  return (
    <View style={styles.container}>
      <Image source={Doctor1} style={styles.avatar} />
      <View style={styles.profile}>
        <Text style={styles.name}>Alexa Rachel</Text>
        <Text style={styles.category}>Pediatrician</Text>
      </View>
      <View style={styles.rate}>
        <IconStart />
        <IconStart />
        <IconStart />
        <IconStart />
        <IconStart />
      </View>
    </View>
  );
};

export default RatedDoctor;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  avatar: {width: 50, height: 50, borderRadius: 50 / 2, marginRight: 12},
  rate: {flexDirection: 'row'},
  profile: {flex: 1},
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  category: {
    fontSize: 12,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 2,
  },
});
