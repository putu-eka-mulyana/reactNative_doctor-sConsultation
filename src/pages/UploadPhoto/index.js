import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Header, Button, Link, Gap} from '../../components';
import {ILUserPhotoNull, ICBtnAddPhoto, ICBtnRemovePhoto} from '../../assets';
import {colors, fonts} from '../../utils';
import ImagePicker from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';

const UploadPhoto = ({navigation}) => {
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState(ILUserPhotoNull);
  const getImage = () => {
    ImagePicker.launchImageLibrary({}, (response) => {
      if (response.didCancel || response.error) {
        showMessage({
          message: 'oops, sepertinya anda tidak memiliki photo nya?',
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
      } else {
        console.log(response);
        setPhoto({uri: response.uri});
        setHasPhoto(true);
      }
    });
  };
  return (
    <View style={styles.page}>
      <Header title="Upload Photo" />
      <View style={styles.content}>
        <View style={styles.profile}>
          <TouchableOpacity style={styles.avatarWrepper} onPress={getImage}>
            <Image source={photo} style={styles.avatar} />
            {hasPhoto && <ICBtnRemovePhoto style={styles.addPhoto} />}
            {!hasPhoto && <ICBtnAddPhoto style={styles.addPhoto} />}
          </TouchableOpacity>
          <Text style={styles.name}>Shayna Melinda</Text>
          <Text style={styles.profession}>Product Designer</Text>
        </View>
        <View>
          <Button
            disable={!hasPhoto}
            title="Upload And Continue"
            onPress={() => navigation.replace('MainApp')}
          />
          <Gap height={30} />
          <Link
            title="Skip for this"
            Align="center"
            size={16}
            onPress={() => navigation.replace('MainApp')}
          />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.white},
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  content: {
    paddingHorizontal: 40,
    flex: 1,
    paddingBottom: 64,
    justifyContent: 'space-between',
  },
  profile: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  avatarWrepper: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPhoto: {
    position: 'absolute',
    bottom: 8,
    right: 6,
  },
  name: {
    textAlign: 'center',
    color: colors.text.primary,
    fontSize: 24,
    fontFamily: fonts.primary[600],
  },
  profession: {
    fontFamily: fonts.primary[400],
    fontSize: 18,
    color: colors.text.secondary,
    textAlign: 'center',
  },
});
