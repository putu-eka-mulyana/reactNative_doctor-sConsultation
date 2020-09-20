import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../utils';
import {List} from '../../components/molecules';
import {Doctor2} from '../../assets';

const Messages = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        <List
          name="eka"
          desc="doctor kulit"
          profile={Doctor2}
          onPress={() => navigation.navigate('Chatting')}
        />
        <List
          name="eka"
          desc="doctor kulit"
          profile={Doctor2}
          onPress={() => navigation.navigate('Chatting')}
        />
        <List
          name="eka"
          desc="doctor kulit"
          profile={Doctor2}
          onPress={() => navigation.navigate('Chatting')}
        />
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.secondary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginLeft: 16,
  },
});
