import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React from 'react';
import {moderateScale, verticalScale} from '../config/helper';
import {COLORS} from '../assets/colors';
import {styles} from './styles';

export default function Button(props) {
  const {title, onPress, bgColor, width, isLoading} = props;

  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        {
          width: width || '80%',
          backgroundColor: bgColor || COLORS.primary,
        },
      ]}
      onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator
          size={'small'}
          color={COLORS.primary}
        />
      ) : (
        <Text style={styles.buttonTitle}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}
