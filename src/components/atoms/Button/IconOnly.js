import React from 'react';
import {TouchableOpacity} from 'react-native';
import {ICbackDark, ICbackLight} from '../../../assets';

const IconOnly = ({onPress, icon}) => {
  const Icon = () => {
    if (icon === 'back-dark') {
      return <ICbackDark />;
    }
    if (icon === 'dark-light') {
      return <ICbackLight />;
    }
    return <ICbackDark />;
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default IconOnly;
