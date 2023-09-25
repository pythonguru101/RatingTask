import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {getData} from '../../config/helper';
import firestore from '@react-native-firebase/firestore';
import BottomModal from '../../components/BottomModal';
import Hader from '../../components/Hader';
import RateViewContainer from '../../components/RateViewContainer';
import AddRatingComponent from '../../components/AddRatingComponent';
import {COLORS} from '../../assets/colors';
import {useIsFocused} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {APPROUTE} from '../../navigation/AppRoutes';
import {styles} from './styles';

export default function HomeScreen(props) {
  const RatingRBSheet = useRef();
  const [selectedData, setSelectedData] = useState(null);
  const [currentUserId, setCurrentUserId] = useState('');
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    getDataFromDatabase();
  }, [isFocused]);

  const getDataFromDatabase = async loaderAvoid => {
    !loaderAvoid && setLoader(true);
    let id = await getData('userId');
    const Array = [];
    setCurrentUserId(id);
    firestore()
      .collection('Agents')
      .onSnapshot(documentSnapshot => {
        documentSnapshot._docs?.map((item, index) => {
          Array.push(item._data);
        });
      });
    setTimeout(() => {
      setData(Array);
      setLoader(false);
      RatingRBSheet.current.close();
    }, 3000);
  };

  const performLogout = async () => {
    await AsyncStorage.clear();
    props.navigation.replace(APPROUTE.Login);
  };

  return (
    <>
      <Hader screenName="Dashboard" />
      <View style={styles.container}>
        {loader === true ? (
          <ActivityIndicator
            size={'large'}
            color={COLORS.primary}
            style={styles.loaderContainer}
          />
        ) : (
          data.map((item, index) => {
            return (
              <TouchableOpacity
                activeOpacity={0.8}
                style={{display: item.uid === currentUserId ? 'none' : 'flex'}}
                key={index}
                onPress={() => {
                  setSelectedData(item), RatingRBSheet.current.open();
                }}>
                <RateViewContainer item={item} />
              </TouchableOpacity>
            );
          })
        )}
      </View>
      <BottomModal sheetRef={RatingRBSheet} height={1.8}>
        <AddRatingComponent
          item={selectedData}
          dataUpdated={() => {
            getDataFromDatabase(true);
          }}
        />
      </BottomModal>
      <TouchableOpacity
        onPress={() => {
          performLogout();
        }}
        activeOpacity={1}
        style={[
          styles.logoutContainer,
          {
            display: loader ? 'none' : 'flex',
          },
        ]}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </>
  );
}
