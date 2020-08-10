import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILicon} from '../../assets/illustrations';
import {Input, Link, Button, Gap} from '../../components';
import {colors, fonts} from '../../utils';

const Login = () => {
  return (
    <View style={styles.page}>
      <ILicon />
      <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
      <Input label="Email Address" />
      <Gap height={24} />
      <Input label="Password" />
      <Gap height={10} />
      <Link title="Forgot My Password" size={12} />
      <Gap height={40} />
      <Button title="Sign In" />
      <Gap height={30} />
      <Link title="Create New Account" size={16} Align="center" />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {padding: 40, backgroundColor: colors.white},
  title: {
    color: colors.text.primary,
    maxWidth: 153,
    fontSize: 20,
    marginVertical: 40,
    fontFamily: fonts.primary[600],
  },
});
