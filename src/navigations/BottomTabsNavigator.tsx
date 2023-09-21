import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from '../../types';
import HomeScreen from '../screens/HomeScreen';
import AntScreen from '../screens/AntScreen';
import SnakeScreen from '../screens/SnakeScreen';
import BackpackScreen from '../screens/BackpackScreen';
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Informations from '../screens/Informations';


const Tab = createBottomTabNavigator<RootStackParamList>();
const fontScaleHeight = Dimensions.get("window").height;
const iconSize = fontScaleHeight * 0.037;

export default function BottomTabsNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name='Home' component={HomeScreen} options={{tabBarLabel: () => null, tabBarIcon: ({focused}) => (
            <Ionicons
                name='home'
                size={iconSize}
                color={focused ? '#eb1a22' : 'black'}
            />
        )}}/>
        <Tab.Screen name='Info' component={Informations} options={{tabBarLabel: () => null, tabBarIcon: ({focused}) => (
            <IconCommunity
                name='information'
                size={iconSize}
                color={focused ? '#eb1a22' : 'black'}
            />
        )}}/>
    </Tab.Navigator>
  )
}