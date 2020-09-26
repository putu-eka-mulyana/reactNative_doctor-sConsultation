import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {Button, Gap, Header, Input, Loading} from '../../components';
import {Fire} from '../../config';
import {colors, storeData, useForm} from '../../utils';
const Register = ({navigation}) => {
  const [form, setForm] = useForm({
    fullName: '',
    profession: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const onContiue = () => {
    const data = {
      fullName: form.fullName,
      profession: form.profession,
      email: form.email,
    };
    navigation.navigate('UploadPhoto', data);
    // setLoading(true);
    // Fire.auth()
    //   .createUserWithEmailAndPassword(form.email, form.password)
    //   .then((success) => {
    //     setLoading(false);
    //     setForm('reset');
    //     const data = {
    //       fullName: form.fullName,
    //       profession: form.profession,
    //       email: form.email,
    //       uid:success.user.id,
    //     };
    //     Fire.database()
    //       .ref('users/' + success.user.uid + '/')
    //       .set(data);
    //     storeData('user', data);
    //     navigation.navigate('UploadPhoto', data);
    //   })
    //   .catch((error) => {
    //     setLoading(false);
    //     const errorMessage = error.message;
    //     showMessage({
    //       message: errorMessage,
    //       type: 'default',
    //       backgroundColor: colors.error,
    //       color: colors.white,
    //     });
    //   });
  };
  return (
    <>
      <View style={styles.page}>
        <Header title="Daftar Akun" onPress={() => navigation.goBack()} />
        <View style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Input
              label="Full Name"
              value={form.fullName}
              onChangeText={(value) => setForm('fullName', value)}
            />
            <Gap height={24} />
            <Input
              label="Profession"
              value={form.profession}
              onChangeText={(value) => setForm('profession', value)}
            />
            <Gap height={24} />
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
            <Gap height={40} />
            <Button title="Continue" onPress={() => onContiue()} />
          </ScrollView>
        </View>
      </View>
      {loading && <Loading />}
    </>
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
