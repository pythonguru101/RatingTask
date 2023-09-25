import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {COLORS} from '../assets/colors';
import {styles} from './styles';

export default function InputField(props) {
  const {
    placeholder,
    Width,
    BR,
    multiLine,
    value,
    onChangeText,
    secureTextEntry,
  } = props;

  return (
    <View
      style={[
        styles.inputContainer,
        {
          width: Width,
          borderRadius: BR,
        },
      ]}>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={COLORS.black}
        multiline={multiLine}
        value={value}
        onChangeText={text => {
          onChangeText(text);
        }}
        style={styles.colorPrimary}
      />
    </View>
  );
}
