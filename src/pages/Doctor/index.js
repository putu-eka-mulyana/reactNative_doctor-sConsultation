import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  HomeProfile,
  DoctorCategory,
  RatedDoctor,
  NewItem,
} from '../../components';
import {fonts, colors} from '../../utils';
const Doctor = () => {
  return (
    <View style={styles.page}>
      <HomeProfile />
      <Text style={styles.welcome}>Mau konsultasi dengan siapa hari ini?</Text>
      <DoctorCategory />
      <DoctorCategory />
      <DoctorCategory />
      <Text>Top Rated Doctors</Text>
      <RatedDoctor />
      <RatedDoctor />
      <RatedDoctor />
      <Text>Good News</Text>
      <NewItem />
      <NewItem />
      <NewItem />
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  page: {
    marginVertical: 34,
    paddingHorizontal: 16,
  },
  welcome: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  },
});
