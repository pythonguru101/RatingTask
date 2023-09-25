import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  getData,
} from '../config/helper';
import {COLORS} from '../assets/colors';
import {IMAGES} from '../assets/images';
import Button from './Button';
import firestore from '@react-native-firebase/firestore';
import {styles} from './styles';

export default function AddRatingComponent(props) {
  const {item, dataUpdated} = props;
  const ratingText = [
    {text: 'Slow Response', id: 0},
    {text: 'Good', id: 1},
    {text: 'Expensive', id: 1},
  ];
  const [rateValue, setRateValue] = useState(null);
  const [rateTextValue, setRateTextValue] = useState(null);
  const [currentID, setCurrentID] = useState('');
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    AverageRating();
  }, []);

  const AverageRating = async () => {
    let id = await getData('userId');

    item.data.map(itm => {
      setCurrentID(id);
      if (itm.uid === id) {
        setRateValue(itm.rating);
        setRateTextValue(itm.ratingId);
      }
    });
  };

  const submitData = () => {
    setLoader(true);
    let obj = {
      uid: currentID,
      rating: rateValue,
      ratingId: rateTextValue,
    };
    let isEdit = false;
    let editIndex = null;
    let ratingArray = item.data;

    ratingArray.map((itm, indx) => {
      if (itm.uid === currentID) {
        isEdit = true;
        editIndex = indx;
      }
    });

    if (isEdit) {
      ratingArray[editIndex] = obj;
    } else {
      ratingArray.push(obj);
    }

    updateData(ratingArray);
  };

  const updateData = ratingArray => {
    firestore().collection('Agents').doc(item.uid).update({data: ratingArray});
    dataUpdated();
    setLoader(false);
  };

  return (
    <View style={styles.ratingContainer}>
      <Text style={styles.ratingTitleText}>{item.title}</Text>
      <Text style={styles.ratingSubTitleText}>Rate This {item.subTitle}</Text>
      <View style={styles.ratingIconContainer}>
        {['', '', '', '', ''].map((_, index) => {
          return (
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                setRateValue(index + 1);
              }}>
              <Image
                key={index}
                style={[
                  styles.ratingImage,
                  {tintColor: rateValue > index ? '#FFCD3C' : 'lightgrey'},
                ]}
                source={IMAGES.filledStar}
              />
            </TouchableOpacity>
          );
        })}
      </View>
      <Text style={styles.feedbackTitle}>Leave some feedback</Text>
      <View style={styles.feedbackContainer}>
        {ratingText.map((itm, indx) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setRateTextValue(indx);
              }}
              style={[
                styles.feedbackItemContainer,
                {
                  backgroundColor:
                    rateTextValue === indx ? COLORS.primary : COLORS.white,
                  borderColor:
                    rateTextValue === indx ? COLORS.primary : COLORS.black,
                },
              ]}>
              <Text
                style={{
                  color: rateTextValue === indx ? COLORS.white : COLORS.black,
                }}>
                {itm.text}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <Button
        title="Submit"
        isLoading={loader}
        onPress={() => {
          submitData();
        }}
        bgColor={'darkblue'}
        width={'90%'}
      />
    </View>
  );
}
