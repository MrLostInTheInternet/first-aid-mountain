import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native-gesture-handler'
import SafeDrawerAndroidView from '../../components/SafeDrawerAndroidView'
import tw from 'twrnc'
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { RootStackParamList } from '../../../types'


const fontScaleHeight = Dimensions.get("window").height  
const xsFontSize = fontScaleHeight * 0.02;
const lgFontSize = fontScaleHeight * 0.022;
const xlFontSize = fontScaleHeight * 0.024;
const xxlFontSize = fontScaleHeight * 0.027;
const iconSize = fontScaleHeight * 0.037;


const SettingsScreen = () => {
    const navigation = useNavigation<DrawerNavigationProp<RootStackParamList>>();
    
    const handleDrawer = () => {
        navigation.openDrawer();
    };

  return (
    <SafeAreaView style={SafeDrawerAndroidView.AndroidSafeArea}>
        <View style={tw`flex-row pb-3 items-center mx-4`}>
            <TouchableOpacity activeOpacity={0}>
                <IconMaterial name='settings' size={iconSize} color='black' />
            </TouchableOpacity>
            <View style={tw`flex-1`}>
                <Text allowFontScaling={false} style={{fontSize: xsFontSize, fontWeight:'bold', color:'#eb1a22', paddingLeft: 5}}>Mountain First Aid</Text>
                <Text allowFontScaling={false} style={{fontSize: lgFontSize, fontWeight:'bold', color:'#eb1a22', paddingLeft: 5}}>Impostazioni</Text>
            </View>
            <TouchableOpacity activeOpacity={0.4} onPress={() => handleDrawer()} style={tw`flex-row items-center`}>
                <Text allowFontScaling={false} style={{fontSize: xsFontSize, fontWeight:'bold', color:'gray', paddingRight: 5}}>Apri opzioni</Text>
                <IconFontAwesome name='bars' size={iconSize} color={'black'}/>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default SettingsScreen