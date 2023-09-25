import { View, StyleSheet } from 'react-native'
import React from 'react'
import AppNavigator from './src/navigation/AppNavigator'

export default function App() {
  return (
    <View style={styles.container}>
      <AppNavigator />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})