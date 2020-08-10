import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {ILicon, ILGetStarted} from '../../assets';
import {Button, Gap} from '../../components/atoms';
import {colors, fonts} from '../../utils';

const GetStarted = ({navigation}) => {
  return (
    <ImageBackground source={ILGetStarted} style={styles.page}>
      <View>
        <ILicon />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('Register')}
        />
        <Gap height={16} />
        <Button
          title="Sign In"
          type="secondary"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    justifyContent: 'space-between',
    flex: 1,
    color: colors.white,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: colors.white,
    marginTop: 90,
    fontFamily: fonts.primary[600],
  },
});
