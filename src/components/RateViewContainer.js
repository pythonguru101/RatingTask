import {View, Text, Image} from 'react-native';
import React from 'react';
import {horizontalScale, moderateScale, verticalScale} from '../config/helper';
import {IMAGES} from '../assets/images';
import {COLORS} from '../assets/colors';
import {styles} from './styles';

export default function RateViewContainer(props) {
  const {item} = props;

  const AverageRating = () => {
    let totalRating = 0;
    item?.data?.map(itm => {
      totalRating = totalRating + itm.rating;
    });
    let AverageRating = totalRating / item?.data?.length;
    return Math.trunc(AverageRating);
  };

  return (
    <View style={styles.rateViewContainer}>
      <View style={styles.w95}>
        <Text style={styles.rateViewTitle}>{item.title}</Text>
        <Text style={styles.rateViewSubTitle}>{item.subTitle}</Text>
        <View style={styles.rateViewIconsContainer}>
          {['', '', '', '', ''].map((_item, index) => {
            return (
              <Image
                key={index}
                style={[
                  styles.rateViewImage,
                  {
                    tintColor:
                      AverageRating() > index ? COLORS.primary : 'grey',
                  },
                ]}
                source={IMAGES.filledStar}
              />
            );
          })}
          <Text style={styles.fs14}>{` (${item?.data?.length})`}</Text>
        </View>
      </View>
      <Image
        style={styles.rateViewSideArrow}
        resizeMode="contain"
        source={{
          uri: 'https://w7.pngwing.com/pngs/551/108/png-transparent-arrow-illustration-arrow-icon-right-arrow-angle-web-design-internet-thumbnail.png',
        }}
      />
    </View>
  );
}
