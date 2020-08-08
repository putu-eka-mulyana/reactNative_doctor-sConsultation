import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input} from '../../components';
import {colors} from '../../utils';

const Register = () => {
  return (
    <View style={styles.page}>
      <Header title="Daftar Akun" />
      <View style={styles.container}>
        <Input label="Full Name" />
        <Gap height={24} />
        <Input label="Profession" />
        <Gap height={24} />
        <Input label="Email Address" />
        <Gap height={24} />
        <Input label="Password" />
        <Gap height={40} />
        <Button title="Continue" />
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    padding: 40,
    paddingTop: 0,
  },
});
