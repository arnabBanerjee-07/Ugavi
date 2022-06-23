import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Register from './Register';
import Profile from './Profile';
import Login from './Login';
import ResetPassword from './ResetPassword';
import React, {useState, useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
//import Tab from './Tab Navigation/Tab';
const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />

        {/* <Stack.Screen
          name="Tab"
          component={Tab}
          options={{headerShown: false }}
        /> */}

        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            title: 'Profile Management',
            headerStyle: {
              height: 65,
              backgroundColor: '#CA2B63',
            },
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            headerLeft: () => (
              <TouchableOpacity>
                <Icon
                  name="bars"
                  size={25}
                  color="white"
                  style={{marginLeft: 15}}
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
