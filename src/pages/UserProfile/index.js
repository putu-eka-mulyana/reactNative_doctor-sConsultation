import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {ILUserPhotoNull} from '../../assets';
import {Gap, Header, List, Profile} from '../../components';
import {colors, getData} from '../../utils';

const UserProfile = ({navigation}) => {
  const [profile, setProfile] = useState({
    fullname: '',
    profession: '',
    photo: ILUserPhotoNull,
  });
  useEffect(() => {
    getData('user').then((res) => {
      const data = res;
      data.photo = {uri: res.photo};
      setProfile(data);
    });
  }, []);
  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Gap height={10} />
      {profile.fullname.length > 0 && (
        <Profile
          name={profile.fullname}
          desc={profile.profession}
          photo={profile.photo}
        />
      )}
      <Gap height={14} />
      <List
        name="Edit Profile"
        desc="Last Update Yesterday"
        type="next"
        icon="editProfile"
        onPress={() => navigation.navigate('UpdateProfile')}
      />
      <List
        name="Language"
        desc="Available 12 languages"
        type="next"
        icon="languange"
      />
      <List
        name="Give Us Rate"
        desc="On Google Play Store"
        type="next"
        icon="GiveUsRate"
      />
      <List name="Help" desc="Read our guidelines" type="next" icon="help" />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
