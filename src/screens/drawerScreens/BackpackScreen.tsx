import React, { useLayoutEffect, useState} from 'react';
import { View, Text, useWindowDimensions, Dimensions } from 'react-native';
import { useNavigation , useRoute, RouteProp} from '@react-navigation/native';
import { RootStackParamList } from '../../../types';
import { RFValue } from 'react-native-responsive-fontsize';
import SafeAndroidView from '../../components/SafeAndroidView';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import tw from 'twrnc';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import SafeDrawerAndroidView from '../../components/SafeDrawerAndroidView';



const BackpackScreen = () => {
  const navigation = useNavigation<DrawerNavigationProp<RootStackParamList>>();
  const fontScaleHeight = Dimensions.get("window").height
  const fontScaleWidth = Dimensions.get("window").width

  const xsFontSize = fontScaleHeight * 0.02;
  const lgFontSize = fontScaleHeight * 0.022;
  const xlFontSize = fontScaleHeight * 0.024;
  const xxlFontSize = fontScaleHeight * 0.027;
  const iconSize = fontScaleHeight * 0.037;


  const handleDrawer = () => {
    navigation.openDrawer();
  }

  return (
      <SafeAreaView style={SafeDrawerAndroidView.AndroidSafeArea}>
          <View style={tw`flex-row pb-3 items-center mx-4`}>
              <TouchableOpacity activeOpacity={0} >
                <IconMaterial name='backpack' size={iconSize} color='#542a18' />
              </TouchableOpacity>
              <View style={tw`flex-1`}>
                <Text allowFontScaling={false} style={{fontSize: xsFontSize, fontWeight:'bold', color:'#eb1a22', paddingLeft: 5}}>Mountain First Aid</Text>
                <Text allowFontScaling={false} style={{fontSize: lgFontSize, fontWeight:'bold', color:'#eb1a22', paddingLeft: 5}}>Kit Primo Soccorso</Text>
              </View>
              <TouchableOpacity activeOpacity={0.4} onPress={() => handleDrawer()} style={tw`flex-row items-center`}>
                <Text allowFontScaling={false} style={{fontSize: xsFontSize, fontWeight:'bold', color:'gray', paddingRight: 5}}>Apri opzioni</Text>
                <IconFontAwesome name='bars' size={iconSize} color={'black'}/>
              </TouchableOpacity>
          </View>
      </SafeAreaView>
);
}

export default BackpackScreen