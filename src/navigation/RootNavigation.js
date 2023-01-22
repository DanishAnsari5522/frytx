import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoarding from '../screens/OnBoarding';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
// import ForgotPassword from '../screens/ForgotPassword';
// import EmailSendConfirmation from '../screens/EmailSendConfirmation';
// import Notification from '../screens/Notification';
// import SpecialOffers from '../screens/SpecialOffers';
// import Wishlist from '../screens/Wishlist';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {

    let screens = (
        <>
            <Stack.Screen name="OnBoarding" component={OnBoarding} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            {/* <Stack.Screen name="ForgotPassword" component={ForgotPassword} /> */}
            {/* <Stack.Screen name="EmailSendConfirmation" component={EmailSendConfirmation} /> */}
        </>
    );


    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {screens}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
