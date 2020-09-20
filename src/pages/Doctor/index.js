import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  HomeProfile,
  DoctorCategory,
  RatedDoctor,
  Gap,
  NewsItem,
} from '../../components';
import {fonts, colors} from '../../utils';
import {ScrollView} from 'react-native-gesture-handler';
import {Doctor1} from '../../assets';
const Doctor = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={30} />
          <View style={styles.wrepperSection}>
            <HomeProfile onPress={() => navigation.navigate('UserProfile')} />
            <Text style={styles.welcome}>
              Mau konsultasi dengan siapa hari ini?
            </Text>
          </View>
          <View style={styles.wrepperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.categorys}>
                <Gap width={32} />
                <DoctorCategory
                  onPress={() => navigation.navigate('ChooseDoctor')}
                />
                <DoctorCategory
                  onPress={() => navigation.navigate('ChooseDoctor')}
                />
                <DoctorCategory
                  onPress={() => navigation.navigate('ChooseDoctor')}
                />
                <DoctorCategory
                  onPress={() => navigation.navigate('ChooseDoctor')}
                />
                <Gap width={22} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.wrepperSection}>
            <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
            <RatedDoctor
              onPress={() => navigation.navigate('DoctorProfile')}
              name="eka"
              desc="Doktor Anak"
              avatar={Doctor1}
            />
            <RatedDoctor
              onPress={() => navigation.navigate('DoctorProfile')}
              name="eka"
              desc="Doktor Anak"
              avatar={Doctor1}
            />
            <RatedDoctor
              onPress={() => navigation.navigate('DoctorProfile')}
              name="eka"
              desc="Doktor Anak"
              avatar={Doctor1}
            />
            <Text style={styles.sectionLabel}>Good News</Text>
          </View>
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <Gap height={34} />
        </ScrollView>
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
  wrepperSection: {paddingHorizontal: 16},
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
