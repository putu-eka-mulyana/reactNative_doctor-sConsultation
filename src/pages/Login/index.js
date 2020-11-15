import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {ILicon} from '../../assets/illustrations';
import {Button, Gap, Input, Link} from '../../components';
import {colors, fonts, showError, storeData, useForm} from '../../utils';
import {Fire} from './../../config';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [form, setForm] = useForm({email: '', password: ''});
  const login = () => {
    dispatch({
      type: 'SET_LOADING',
      value: true,
    });
    Fire.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then((res) => {
        dispatch({
          type: 'SET_LOADING',
          value: false,
        });
        Fire.database()
          .ref(`users/${res.user.uid}/`)
          .once('value')
          .then((resDB) => {
            if (resDB.val()) {
              storeData('user', resDB.val());
              navigation.replace('MainApp');
            } else {
              showError('pasian belum terdaftar');
            }
          });
      })
      .catch((err) => {
        showError(err.message);
        dispatch({
          type: 'SET_LOADING',
          value: false,
        });
      });
  };
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Gap height={40} />
        <ILicon />
        <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
        <Input
          label="Email Address"
          value={form.email}
          onChangeText={(value) => setForm('email', value)}
        />
        <Gap height={24} />
        <Input
          label="Password"
          value={form.password}
          onChangeText={(value) => setForm('password', value)}
          secureTextEntry
        />
        <Gap height={10} />
        <Link title="Forgot My Password" size={12} />
        <Gap height={40} />
        <Button title="Sign In" onPress={login} />
        <Gap height={30} />
        <Link
          title="Create New Account"
          size={16}
          Align="center"
          onPress={() => navigation.navigate('Register')}
        />
      </ScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {padding: 40, backgroundColor: colors.white, flex: 1},
  title: {
    color: colors.text.primary,
    maxWidth: 153,
    fontSize: 20,
    marginVertical: 40,
    fontFamily: fonts.primary[600],
  },
});
