import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useLayoutEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';
import { RootStackParamList } from '../../types';
import SafeAndroidView from '../components/SafeAndroidView';
import BodyPartsComponent from "../components/BodyPartsComponent"
import { RFValue } from 'react-native-responsive-fontsize';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import LogoNoText from '../components/logo_noText';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<DrawerNavigationProp<RootStackParamList>>();
  const xsFontSize = RFValue(13);
  const lgFontSize = RFValue(17);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const handleDrawer = () => {
    navigation.openDrawer();
  }

  return (
    <SafeAreaView style={SafeAndroidView.AndroidSafeArea}>
      <View style={tw`flex-row items-center mx-4 top-[2%]`}>
        <TouchableOpacity activeOpacity={0.4}>
          <LogoNoText/>
        </TouchableOpacity>
        <View style={tw`flex-1`}>
          <Text style={{fontSize: xsFontSize, fontWeight:'bold', color:'gray', paddingLeft: 5}}>Seleziona zona dolore</Text>
          <Text style={{fontSize: lgFontSize, fontWeight:'bold', color:'#eb1a22', paddingLeft: 5}}>Mountain First Aid</Text>
        </View>
        <Text style={{fontSize: xsFontSize, fontWeight:'bold', color:'gray', paddingRight: 5}}>Apri opzioni</Text>
        <IconFontAwesome name='bars' size={30} color={'black'} onPress={() => handleDrawer()}/>
      </View>
      <View style={tw`items-center justify-center mt-2 pt-4`}>
        <BodyPartsComponent />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen
