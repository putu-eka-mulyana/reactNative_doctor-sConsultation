import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  ICDoctor,
  ICDoctorActive,
  ICHospital,
  ICHospitalActive,
  ICMessage,
  ICMessageActive,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Doctor') {
      return active ? <ICDoctorActive /> : <ICDoctor />;
    }
    if (title === 'Hospitals') {
      return active ? <ICHospitalActive /> : <ICHospital />;
    }
    if (title === 'Messages') {
      return active ? <ICMessageActive /> : <ICMessage />;
    }
    return active ? <ICDoctorActive /> : <ICDoctor />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: (active) => ({
    fontSize: 10,
    color: active ? colors.text.menuActive : colors.text.menuInactive,
    fontFamily: fonts.primary[600],
    marginTop: 4,
  }),
});
