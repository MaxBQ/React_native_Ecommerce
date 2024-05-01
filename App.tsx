import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import HomeScreen from './src/screens/HomeScreen';

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#E96E6E',
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({size, color}) => (
              <Entypo name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Reorder"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({size, color}) => (
              <MaterialIcons name="reorder" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({size, color}) => (
              <MaterialCommunityIcons name="cart" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({size, color}) => (
              <MaterialCommunityIcons
                name="account"
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
