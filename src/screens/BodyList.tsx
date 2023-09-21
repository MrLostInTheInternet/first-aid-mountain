import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SafeAndroidView from '../components/SafeAndroidView'
import { TouchableOpacity } from 'react-native-gesture-handler'
import tw from 'twrnc'
import LogoNoText from '../components/logo_noText'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { RootStackParamList } from '../../types'

const BodyList = () => {

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
    <SafeAreaView style={SafeAndroidView.AndroidSafeArea}>
      <View style={tw`flex-row items-center mx-4`}>
        <TouchableOpacity activeOpacity={0.4}>
          <LogoNoText/>
        </TouchableOpacity>
        <View style={tw`flex-1`}>
          <Text allowFontScaling={false} style={{fontSize: xsFontSize, fontWeight:'bold', color:'gray', paddingLeft: 5}}>Seleziona zona dolore</Text>
          <Text allowFontScaling={false} style={{fontSize: lgFontSize, fontWeight:'bold', color:'#eb1a22', paddingLeft: 5}}>Mountain First Aid</Text>
        </View>
        <TouchableOpacity activeOpacity={0.4} onPress={() => handleDrawer()} style={tw`flex-row items-center`}>
          <Text allowFontScaling={false} style={{fontSize: xsFontSize, fontWeight:'bold', color:'gray', paddingRight: 5}}>Apri opzioni</Text>
          <IconFontAwesome name='bars' size={iconSize} color={'black'}/>
        </TouchableOpacity>
      </View>
      <View>
        <View></View>
      </View>
      </SafeAreaView>
  )
}

export default BodyList