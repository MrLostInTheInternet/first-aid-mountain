import React, { useLayoutEffect, useState} from 'react';
import { View, Text, useWindowDimensions, Dimensions } from 'react-native';
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
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import SafeDrawerAndroidView from '../components/SafeDrawerAndroidView';
import EmergencyCall from '../components/EmergencyCall';
import SnakeBiteVenoumous from '../components/SnakeBiteVenomous';
import SnakeBite from '../components/SnakeBite';
import BondageSnakeBite from '../components/BondageSnakeBite';



const ViperaScreen = () => {
  const navigation = useNavigation<DrawerNavigationProp<RootStackParamList>>();
  const fontScaleHeight = Dimensions.get("window").height
  const fontScaleWidth = Dimensions.get("window").width

  const xsFontSize = fontScaleHeight * 0.02;
  const lgFontSize = fontScaleHeight * 0.022;
  const xlFontSize = fontScaleHeight * 0.024;
  const xxlFontSize = fontScaleHeight * 0.027;
  const titleFontSize = fontScaleHeight * 0.019;
  const xxsFontSize = fontScaleHeight * 0.015;
  const iconSize = fontScaleHeight * 0.037;

  const handleDrawer = () => {
    navigation.openDrawer();
  }

  return (
      <SafeAreaView style={SafeDrawerAndroidView.AndroidSafeArea}>
          <View style={tw`flex-row pb-3 items-center mx-4`}>
              <TouchableOpacity activeOpacity={0} >
                <IconCommunity name='snake' size={iconSize} color='#9bbd5c' />
              </TouchableOpacity>
              <View style={tw`flex-1`}>
                <Text style={{fontSize: xsFontSize, fontWeight:'bold', color:'#eb1a22', paddingLeft: 5}}>Mountain First Aid</Text>
                <Text style={{fontSize: lgFontSize, fontWeight:'bold', color:'#eb1a22', paddingLeft: 5}}>Morso di Vipera</Text>
              </View>
              <TouchableOpacity activeOpacity={0.4} onPress={() => handleDrawer()} style={tw`flex-row items-center`}>
                <Text style={{fontSize: xsFontSize, fontWeight:'bold', color:'gray', paddingRight: 5}}>Apri opzioni</Text>
                <IconFontAwesome name='bars' size={iconSize} color={'black'}/>
              </TouchableOpacity>
          </View>
          <View style={tw`items-center justify-center h-[20%] flex-row bg-white m-[5%]`}>
            <View style={tw`flex-col justify-center items-center mx-[5%] bg-gray-100 p-2 rounded-3xl shadow-xl`}>
              <Text style={{fontSize: lgFontSize, fontWeight:'bold', color:'#eb1a22', paddingLeft: 5}}>VELENOSO</Text>
              <SnakeBiteVenoumous/>
            </View>
            <View style={tw`flex-col items-center justify-center bg-gray-100 p-2 rounded-3xl shadow-xl`}>
              <Text style={{fontSize: lgFontSize, fontWeight:'bold', color:'black', paddingLeft: 5}}>NON VELENOSO</Text>
              <SnakeBite/>
            </View>
          </View>
          <View style={tw`flex-col flex-1 items-start bg-white`}>
            <View style={tw`bg-white items-center absolute w-[10%] h-[70%] top-[0%] right-[0%] mx-[5%]`}>
              <BondageSnakeBite />
            </View>
            <View style={tw`flex-col items-center justify-center mx-4 bg-orange-200 rounded-2xl p-3 mt-[5%] mx-[5%] w-[65%] shadow-lg`}>
              <View style={tw`w-[10%] bg-orange-500 absolute left-[-5%] top-[0%] rounded-3xl items-center justify-center shadow-2xl`}>
                <Text style={[tw`text-center`, {fontSize: lgFontSize, color:'white'}]}>1</Text>
              </View> 
              <View style={tw`items-center`}>
                <Text style={{fontSize: titleFontSize, fontWeight: 'bold', textAlign:'center'}}>RESTA CALMO E NON MUOVERTI</Text>
                <View style={tw`items-start mx-2`}>
                  <Text style={{fontSize: xxsFontSize, fontWeight: 'normal'}}>IL MOVIMENTO E LA PAURA MANDANO IN CIRCOLO IL VELENO</Text>
                </View>
              </View>
            </View>
            <View style={tw`flex-col items-center justify-center mx-4 bg-red-200 rounded-2xl p-3 mt-[5%] mx-[5%] w-[65%] shadow-lg`}>
              <View style={tw`w-[10%] bg-red-500 absolute left-[-5%] top-[0%] rounded-3xl items-center justify-center shadow-2xl`}>
                <Text style={[tw`text-center`, {fontSize: lgFontSize, color:'white'}]}>2</Text>
              </View> 
              <View style={tw`items-center`}>
                <Text style={{fontSize: titleFontSize, fontWeight: 'bold', textAlign:'center'}}>MANTIENI L'ARTO IMMOBILE</Text>
                <View style={tw`items-start mx-2`}>
                  <Text style={{fontSize: xxsFontSize, fontWeight: 'normal'}}>RESTA FERMO COME SE AVESSI UNA FRATTURA. IL MOVIMENTO DELL'ARTO E DEL SANGUE SONO NOCIVI</Text>
                </View>
              </View>
            </View>
            <View style={tw`flex-col items-center justify-center mx-4 bg-orange-100 rounded-2xl p-3 mt-[5%] mx-[5%] w-[65%] shadow-lg`}>
              <View style={tw`w-[10%] bg-orange-300 absolute left-[-5%] top-[0%] rounded-3xl items-center justify-center shadow-2xl`}>
                <Text style={[tw`text-center`, {fontSize: lgFontSize, color:'white'}]}>3</Text>
              </View> 
              <View style={tw`items-center`}>
                <Text style={{fontSize: titleFontSize, fontWeight: 'bold', textAlign:'center'}}>FASCIA L'ARTO E COMPRIMI</Text>
                <View style={tw`items-start mx-2`}>
                  <Text style={{fontSize: xxsFontSize, fontWeight: 'normal'}}>FASCIA L'ARTO CON UNA BENDA E COMPRIMI SENZA ESAGERARE!</Text>
                </View>
              </View>
            </View>
            <View style={tw`flex-col items-center justify-center mx-4 bg-blue-200 rounded-2xl p-3 mt-[5%] mx-[5%] w-[65%] shadow-lg`}>
              <View style={tw`w-[10%] bg-blue-500 absolute left-[-5%] top-[0%] rounded-3xl items-center justify-center shadow-2xl`}>
                <Text style={[tw`text-center`, {fontSize: lgFontSize, color:'white'}]}>4</Text>
              </View> 
              <View style={tw`items-center`}>
                <Text style={{fontSize: titleFontSize, fontWeight: 'bold', textAlign:'center'}}>CHIAMA IL 118/112</Text>
                <View style={tw`items-start mx-2`}>
                  <Text style={{fontSize: xxsFontSize, fontWeight: 'normal'}}>ALLERTA I SOCCORSI IL PRIMA POSSIBILE E NON MUOVERTI DA LI</Text>
                </View>
              </View>
            </View>
            <View style={tw`flex-col items-center justify-center mx-4 bg-green-200 rounded-2xl p-3 mt-[5%] mx-[5%] w-[65%] shadow-lg`}>
              <View style={tw`w-[10%] bg-green-700 absolute left-[-5%] top-[0%] rounded-3xl items-center justify-center shadow-2xl`}>
                <Text style={[tw`text-center`, {fontSize: lgFontSize, color:'white'}]}>5</Text>
              </View> 
              <View style={tw`items-center`}>
                <Text style={{fontSize: titleFontSize, fontWeight: 'bold', textAlign:'center'}}>NON DISINFETTARE CON ALCOL, NON ASSUMERE FARMACI</Text>
                <View style={tw`items-start mx-2`}>
                  <Text style={{fontSize: xxsFontSize, fontWeight:'normal'}}>L'ALCOL AUMENTA IL VELENO. PUOI PULIRE LA FERITA CON ACQUA DELLA BOTTIGLIA O ACQUA OSSIGENATA</Text>
                </View>
              </View>
            </View>
          </View>
      </SafeAreaView>
);
}

export default ViperaScreen