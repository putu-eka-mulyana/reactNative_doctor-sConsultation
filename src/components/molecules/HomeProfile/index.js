import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {ILUserPhotoNull, User} from '../../../assets';
import {fonts, colors, getData} from '../../../utils';

const HomeProfile = ({onPress}) => {
  const [profile, setProfile] = useState({
    photo: ILUserPhotoNull,
    fullName: '',
    profession: '',
  });

  useEffect(() => {
    getData('user').then((res) => {
      const data = res;
      data.photo = {uri: res.photo};
      setProfile(data);
    });
  }, []);
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={profile.photo}
        style={styles.avatar}
        defaultSource={ILUserPhotoNull}
      />
      <View>
        <Text style={styles.name}>{profile.fullName}</Text>
        <Text style={styles.profession}>{profile.profession}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    textTransform: 'capitalize',
  },
  profession: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    textTransform: 'capitalize',
  },
});
