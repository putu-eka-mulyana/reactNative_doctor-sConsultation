import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {ILicon, ILGetStarted} from '../../assets';
import {Button, Gap} from '../../components/atoms';

const GetStarted = () => {
  return (
    <ImageBackground source={ILGetStarted} style={styles.page}>
      <View>
        <ILicon />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button title="Get Started" />
        <Gap height={16} />
        <Button title="Sign In" type="secondary" />
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
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: 'white',
    marginTop: 90,
    fontFamily: 'Nunito-SemiBold',
  },
});
