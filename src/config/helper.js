import { Dimensions, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Width = Dimensions.get('window').width;
export const Height = Dimensions.get('window').height;
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;
export const horizontalScale = size => (Width / guidelineBaseWidth) * size;
export const verticalScale = size => (Height / guidelineBaseHeight) * size;

export const moderateScale = (size, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

export const valid_Email = name => {
  let reg = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return reg.test(name);
};

//saveasyncdata
export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log(e);
  }
};

//getsyncdata
export const getData = async key => {
  let _return = null;
  await AsyncStorage.getItem(key).then(data => {
    _return = data;
  });
  return _return;
};

export const KeyboardBehavior = Platform.OS === 'ios' ? 'padding' : "padding";
