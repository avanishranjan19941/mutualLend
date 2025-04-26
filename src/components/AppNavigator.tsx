// src/navigation/AppNavigator.js
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignUp from './SignUp';
import Login from './Login';
import Home from './Home';
//import RegisterBusiness from '../components/RegisterBusiness';
//import FindNearMe from '../components/FindNearMe';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
//         <Stack.Screen name="RegisterBusiness" component={RegisterBusiness} />
//         <Stack.Screen name="FindNearMe" component={FindNearMe} />
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default AppNavigator;
