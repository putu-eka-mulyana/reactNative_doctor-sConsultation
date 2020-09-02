import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Button} from '../../atoms';
import {Doctor3} from '../../../assets';

const DarkProfile = ({onPress}) => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon={'dark-light'} onPress={onPress} />
      <View style={styles.centet}>
        <Text style={styles.name}>Nairobi Putri Hayza</Text>
        <Text style={styles.desc}>Dokter Anak</Text>
      </View>
      <Image source={Doctor3} style={styles.avatar} />
    </View>
  );
};

export default DarkProfile;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: colors.secondary,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  centet: {
    flex: 1,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    marginTop: 6,
    textAlign: 'center',
    color: colors.text.subTitle,
  },
});
