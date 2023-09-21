import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from '../../types';
import HomeScreen from '../screens/HomeScreen';
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Informations from '../screens/Informations';
import BodyList from '../screens/BodyList';


const Tab = createBottomTabNavigator<RootStackParamList>();
const fontScaleHeight = Dimensions.get("window").height;
const iconSize = fontScaleHeight * 0.037;

export default function BottomTabsNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name='Home' component={HomeScreen} options={{tabBarLabel: () => null, tabBarIcon: ({focused}) => (
            <Ionicons
                name='body'
                size={iconSize}
                color={focused ? '#eb1a22' : 'black'}
            />
        )}}/>
        <Tab.Screen name='BodyList' component={BodyList} options={{tabBarLabel: () => null, tabBarIcon: ({focused}) => (
            <IconCommunity
                name='view-list'
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