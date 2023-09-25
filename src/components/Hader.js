import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {verticalScale} from '../config/helper';
import {COLORS} from '../assets/colors';
import {styles} from './styles';

export default function Hader(props) {
  const {screenName} = props;

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{screenName}</Text>
    </View>
  );
}
