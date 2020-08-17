import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Doctor2, ICChevronRight} from '../../../assets';
import {colors, fonts} from '../../../utils';

const ListDoctor = ({type}) => {
  return (
    <View style={styles.container}>
      <Image source={Doctor2} style={styles.avatar} />
      <View style={styles.wrepper}>
        <Text style={styles.name}>Alexander Jannie</Text>
        <Text style={styles.desc}>
          Baik ibu, terima kasih banyak atas wakt...
        </Text>
      </View>
      {type === 'next' && <ICChevronRight />}
    </View>
  );
};
export default ListDoctor;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wrepper: {
    flex: 1,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    marginRight: 12,
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
  desc: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
  },
});
