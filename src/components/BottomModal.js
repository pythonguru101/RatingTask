import React from 'react';
import {StyleSheet} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Height, verticalScale} from '../config/helper';

const BottomModal = ({sheetRef, children, height, onClose, customStyles}) => {
  const heightVal = height !== undefined ? height : 1.8;
  return (
    <RBSheet
      ref={sheetRef}
      closeOnDragDown
      dragFromTopOnly
      height={Height / heightVal}
      onClose={() => {
        if (onClose) {
          onClose();
        }
      }}
      customStyles={
        customStyles ? customStyles : {container: styles.containerStyle}
      }>
      {children}
    </RBSheet>
  );
};
const styles = StyleSheet.create({
  containerStyle: {
    elevation: 100,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingBottom: verticalScale(10),
  },
});

export default BottomModal;
