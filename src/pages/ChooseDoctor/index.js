import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, List} from '../../components';
import {Fire} from '../../config';
import {colors, fonts} from '../../utils';

const ChooseDoctor = ({navigation, route}) => {
  const itemCategory = route.params;
  const [listDoctor, setListDoctor] = useState([]);
  useEffect(() => {
    callDoctorByCategory(itemCategory.category);
  }, [itemCategory.category]);
  const callDoctorByCategory = (category) => {
    Fire.database()
      .ref('doctors/')
      .orderByChild('category')
      .equalTo(category)
      .once('value')
      .then((res) => {
        if (res.val()) {
          const oldData = res.val();
          const data = [];
          Object.keys(oldData).map((item) => {
            data.push({
              id: item,
              data: oldData[item],
            });
          });
          setListDoctor(data);
        }
      });
  };
  return (
    <View style={styles.page}>
      <Header
        type="dark"
        title={`Pilih ${itemCategory.category}`}
        onPress={() => navigation.goBack()}
      />
      {listDoctor.map((doctor) => {
        return (
          <List
            key={doctor.id}
            name={doctor.data.fullName}
            desc={doctor.data.gender}
            profile={{uri: doctor.data.photo}}
            type="next"
            onPress={() => navigation.navigate('DoctorProfile', doctor)}
          />
        );
      })}
      {listDoctor.length === 0 && (
        <Text style={styles.msg}>Dotkter Belum Tersedia</Text>
      )}
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  msg: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: fonts.primary[600],
    marginTop: 10,
  },
});
