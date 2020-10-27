import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {ILicon} from '../../assets/illustrations';
import {Input, Link, Button, Gap, Loading} from '../../components';
import {colors, fonts, storeData, useForm} from '../../utils';
import {Fire} from './../../config';

const Login = ({navigation}) => {
  const [form, setForm] = useForm({email: '', password: ''});
  const [loading, setLoading] = useState(false);
  const login = () => {
    setLoading(true);
    Fire.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then((res) => {
        console.log('suc', res);
        setLoading(false);
        Fire.database()
          .ref(`users/${res.user.uid}/`)
          .once('value')
          .then((resDB) => {
            if (resDB.val()) {
              storeData('user', resDB.val());
            }
          });
        navigation.replace('MainApp');
      })
      .catch((err) => {
        showMessage({
          message: err.message,
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
        setLoading(false);
      });
  };
  return (
    <>
      <View style={styles.page}>
        <ScrollView showsHorizontalScrollIndicator={false}>
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
      {loading && <Loading />}
    </>
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
