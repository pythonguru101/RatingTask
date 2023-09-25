import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from '../config/rootNavigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import { APPROUTE } from './AppRoutes';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={APPROUTE.Splash} component={SplashScreen} />
                <Stack.Screen name={APPROUTE.Login} component={LoginScreen} />
                <Stack.Screen name={APPROUTE.Home} component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}