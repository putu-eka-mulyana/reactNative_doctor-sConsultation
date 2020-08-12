import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {User} from '../../../assets';
import {fonts, colors} from '../../../utils';

const HomeProfile = () => {
  return (
    <View style={styles.container}>
      <Image source={User} style={styles.avatar} />
      <View>
        <Text style={styles.name}>Shayna Melinda</Text>
        <Text style={styles.profession}>Product Designer</Text>
      </View>
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  profession: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
  },
});
