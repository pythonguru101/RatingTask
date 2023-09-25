import { View, Text, Image, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { COLORS } from '../../assets/colors'
import { getData, verticalScale } from '../../config/helper'
import { APPROUTE } from '../../navigation/AppRoutes'
import styles from './styles'

export default function SplashScreen(props) {

  useEffect(() => {
    setTimeout(() => {
      checkUser();
    }, 2000);
  }, [])

  const checkUser = async () => {
    let id = await getData('userId')
    if (id === null) {
      props.navigation.replace(APPROUTE.Login)
    } else {
      props.navigation.replace(APPROUTE.Home)
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://t3.ftcdn.net/jpg/03/37/67/30/360_F_337673028_wZqTUA4lx1NuzIQZtfTVPbRnFcygY0hL.jpg' }} style={styles.splashLogo} resizeMode='contain' />
      <View>
        <ActivityIndicator size={'large'} color={COLORS.primary} />
      </View>
    </View>
  )
}