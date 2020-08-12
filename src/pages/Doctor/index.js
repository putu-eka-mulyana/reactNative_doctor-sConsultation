import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  HomeProfile,
  DoctorCategory,
  RatedDoctor,
  NewItem,
  Gap,
} from '../../components';
import {fonts, colors} from '../../utils';
import {ScrollView} from 'react-native-gesture-handler';
const Doctor = () => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <HomeProfile />
        <Text style={styles.welcome}>
          Mau konsultasi dengan siapa hari ini?
        </Text>
        <View style={styles.wrepperScroll}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.categorys}>
              <Gap width={16} />
              <DoctorCategory />
              <DoctorCategory />
              <DoctorCategory />
              <DoctorCategory />
              <Gap width={6} />
            </View>
          </ScrollView>
        </View>
        <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
        <RatedDoctor />
        <RatedDoctor />
        <RatedDoctor />
        <Text style={styles.sectionLabel}>Good News</Text>
        <NewItem />
        <NewItem />
        <NewItem />
      </View>
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    paddingVertical: 34,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  welcome: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  },
  categorys: {
    flexDirection: 'row',
  },
  wrepperScroll: {
    marginHorizontal: -16,
  },
  sectionLabel: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  },
});
