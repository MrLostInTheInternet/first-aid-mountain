import { View, Text, Dimensions} from 'react-native'
import React from 'react'
import { DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer'
import { RootStackParamList } from '../../types'
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from '../components/logo_loader';
import HomeScreen from '../screens/HomeScreen';
import AntScreen from '../screens/drawerScreens/AntScreen';
import SnakeScreen from '../../src/screens/drawerScreens/SnakeScreen';
import BackpackScreen from '../../src/screens/drawerScreens/BackpackScreen';
import BodyPartInfoScreen from '../screens/drawerScreens/BodyPartInfoScreen';
import BottomTabsNavigator from './BottomTabsNavigator';
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SettingsScreen from '../screens/drawerScreens/Settings';
import Help from '../screens/drawerScreens/Help';
import RateUs from '../screens/drawerScreens/RateUs';



const Drawer = createDrawerNavigator<RootStackParamList>();
const fontScaleHeight = Dimensions.get("window").height;
const iconSize = fontScaleHeight * 0.037;
const lgFontSize = fontScaleHeight * 0.022;

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{drawerPosition: 'right', headerShown:false}}
        drawerContent={
          (props:any) => {
            return (
              <SafeAreaView>
                <View style={{
                  height:'30%',
                  justifyContent: 'center',
                  alignItems:'center'
                }}>
                  <Logo />
                </View>
                <DrawerItemList {...props}/>
              </SafeAreaView>
            )
          }
        }
      >
        <Drawer.Screen name="Tab" component={BottomTabsNavigator} options={{drawerAllowFontScaling: false, drawerLabelStyle: {fontSize: lgFontSize}, drawerLabel: 'Home', drawerIcon: ({focused}) => (
              <Ionicons
                name='body'
                size={iconSize}
                color={focused ? '#eb1a22' : 'black'}
              />
           ),}}/>
        <Drawer.Screen name="BodyPartInfo" component={BodyPartInfoScreen} options={{drawerLabel: () => null, drawerItemStyle: {display:'none'}}}/>
        <Drawer.Screen name="Ant" component={AntScreen} options={{drawerAllowFontScaling: false, drawerLabelStyle: {fontSize: lgFontSize}, drawerLabel:'Puntura da Imenottero', drawerIcon: ({focused}) => (
              <IconCommunity
                name='bee'
                size={iconSize}
                color={focused ? '#ffa500' : 'black'}
              />
           ),}}/>
        <Drawer.Screen name="Snake" component={SnakeScreen} options={{drawerAllowFontScaling: false, drawerLabelStyle: {fontSize: lgFontSize}, drawerLabel:'Morso di Vipera', drawerIcon: ({focused}) => (
              <IconCommunity
                name='snake'
                size={iconSize}
                color={focused ? '#9bbd5c' : 'black'}
              />
           ),}}/>
        <Drawer.Screen name="Backpack" component={BackpackScreen} options={{drawerAllowFontScaling: false, drawerLabelStyle: {fontSize: lgFontSize}, drawerLabel:'Kit primo soccorso',
            drawerItemStyle: {marginBottom: '30%'},
            drawerIcon: ({focused}) => (
              <IconMaterial
                name='backpack'
                size={iconSize}
                color={focused ? '#542a18' : 'black'}
              />
           ),}}/>
        <Drawer.Screen name='Settings' component={SettingsScreen}options={{drawerAllowFontScaling: false, drawerLabelStyle: {fontSize: lgFontSize}, drawerLabel:'Impostazioni', drawerIcon: ({focused}) => (
              <IconMaterial
                name='settings'
                size={iconSize}
                color={focused ? 'gray' : 'black'}
              />
           ),}}/>
        <Drawer.Screen name='Help' component={Help}options={{drawerAllowFontScaling: false, drawerLabelStyle: {fontSize: lgFontSize}, drawerLabel:'Supporto', drawerIcon: ({focused}) => (
              <IconCommunity
                name='help'
                size={iconSize}
                color={focused ? 'green' : 'black'}
              />
           ),}}/>
        <Drawer.Screen name='RateUs' component={RateUs}options={{drawerAllowFontScaling: false, drawerLabelStyle: {fontSize: lgFontSize}, drawerLabel:'Donazioni', drawerIcon: ({focused}) => (
              <IconMaterial
                name='star'
                size={iconSize}
                color={focused ? 'yellow' : 'black'}
              />
           ),}}/>
      </Drawer.Navigator>
  )
}