import React, { useLayoutEffect, useState} from 'react';
import { View, Text } from 'react-native';
import { useNavigation , useRoute, RouteProp} from '@react-navigation/native';
import { RootStackParamList } from '../../types';
import { RFValue } from 'react-native-responsive-fontsize';
import SafeAndroidView from '../components/SafeAndroidView';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import tw from 'twrnc';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import { DrawerNavigationProp } from '@react-navigation/drawer';


const ViperaScreen = () => {
  const navigation = useNavigation<DrawerNavigationProp<RootStackParamList>>();
  const xsFontSize = RFValue(13);
  const lgFontSize = RFValue(17);

  const handleDrawer = () => {
    navigation.openDrawer();
  }

  return (
      <SafeAreaView style={SafeAndroidView.AndroidSafeArea}>
          <View style={tw`flex-row top-[3%] absolute pb-3 items-center mx-4 pt-4`}>
              <TouchableOpacity activeOpacity={0.4} >
                  <IconFontAwesome5 name='mountain' size={30} color="#9dbb5c"/>
              </TouchableOpacity>
              <View style={tw`flex-1`}>
                  <Text style={{fontSize: xsFontSize, fontWeight:'bold', color:'gray', paddingLeft: 5}}></Text>
                  <Text style={{fontSize: lgFontSize, fontWeight:'bold', color:'brown', paddingLeft: 5}}>First Aid Mountain</Text>
              </View>
              <Text style={{fontSize: xsFontSize, fontWeight:'bold', color:'gray', paddingRight: 5}}>Apri opzioni</Text>
              <IconFontAwesome name='bars' size={30} color={'black'} onPress={() => handleDrawer()}/>
          </View>
      </SafeAreaView>
);
}

export default ViperaScreen