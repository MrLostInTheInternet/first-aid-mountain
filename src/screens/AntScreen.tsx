import React, { useEffect, useLayoutEffect, useState} from 'react';
import { View, Text, Button, Linking, useWindowDimensions, Dimensions } from 'react-native';
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
import { Circle } from 'react-native-svg';
import SafeDrawerAndroidView from '../components/SafeDrawerAndroidView';


const ImenotteroScreen = () => {
    const navigation = useNavigation<DrawerNavigationProp<RootStackParamList>>();
    const [initialMessage, setInitialMessage] = useState(true);
    const [allergicYes, setAllergicYes] = useState(false);
    const [allergicNot, setAllergicNot] = useState(false);
    const [allergicIdk, setAllergicIdk] = useState(false);
    const [allergicIdkYes, setAllergicIdkYes] = useState(false);
    const [allergicIdkNot, setAllergicIdkNot] = useState(false);

    useEffect(() => {
        // Add a focus listener to reset the state when the screen comes into focus
        const focusListener = navigation.addListener('focus', resetPage);
    }, []);

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

    const renderYes = () => {
        setAllergicYes(true);
    }

    const renderNot = () => {
        setAllergicNot(true);
    }
    
    const renderIdk = () => {
        setAllergicIdk(true);
    }

    const renderYesIdkPage = () => {
        setAllergicIdkYes(true);
        setAllergicYes(false);
        setAllergicIdk(false);
        setAllergicNot(false);
        setInitialMessage(false);
    }

    const renderNotIdkPage = () => {
        setAllergicIdkNot(true);
    }
    
    const resetPage = () => {
        setInitialMessage(true);
        setAllergicYes(false);
        setAllergicIdk(false);
        setAllergicNot(false);
        setAllergicIdkYes(false);
        setAllergicIdkNot(false);
    }

    const openPhoneDialer = () => {
        const phoneNumber = '118'; // Replace with the phone number you want to dial.
        const url = `tel:${phoneNumber}`;
    
        Linking.openURL(url)
            .catch((error) => {
            console.error('Error opening phone dialer:', error);
        });
    };
    
  return (
      <SafeAreaView style={SafeDrawerAndroidView.AndroidSafeArea}>
          <View style={tw`flex-row pb-3 items-center mx-4`}>
              <TouchableOpacity activeOpacity={0} onPress={() => resetPage()}>
                <IconCommunity name='bee' size={iconSize} color='#ffa500' />
              </TouchableOpacity>
              <View style={tw`flex-1`}>
                <Text style={{fontSize: xsFontSize, fontWeight:'bold', color:'#eb1a22', paddingLeft: 5}}>Mountain First Aid</Text>
                <Text style={{fontSize: lgFontSize, fontWeight:'bold', color:'#eb1a22', paddingLeft: 5}}>Puntura di Ape/Vespa/..</Text>
              </View>
              <TouchableOpacity activeOpacity={0.4} onPress={() => handleDrawer()} style={tw`flex-row items-center`}>
                <Text style={{fontSize: xsFontSize, fontWeight:'bold', color:'gray', paddingRight: 5}}>Apri opzioni</Text>
                <IconFontAwesome name='bars' size={iconSize} color={'black'}/>
              </TouchableOpacity>
          </View>
          {initialMessage && !allergicYes && !allergicIdk && !allergicNot && ( // INITIAL PAGE
            <View style={tw`items-center mx-4 flex-1 justify-center flex`}>
                <View style={tw`bg-red-500 justify-center items-center mx-[10%] rounded-3xl shadow-2xl p-4 mx-5`}>
                    <Text style={{fontSize: xxlFontSize, fontWeight:'bold', color:'white', textAlign:'center'}}>Sei stata/o punta/o da una Vespa o simile?</Text>
                </View>
                <IconCommunity name='arrow-down-thin' size={iconSize} style={tw`m-2`}/>
                <View style={tw`bg-red-500 h-[15%] justify-center items-center mx-[10%] p-4 rounded-3xl shadow-2xl mb-7`}>
                    <Text style={{fontSize: xxlFontSize, fontWeight:'bold', color:'white', textAlign:'center'}}>Sei allergico?</Text>
                </View>
                
                <View style={tw`flex-row mt-5`}>
                    <TouchableOpacity activeOpacity={0} style={tw`mx-[5%] bg-red-500 p-2 px-5 rounded-xl shadow-2xl`} onPress={() => renderYes()}>
                        <Text style={{fontSize: xlFontSize, fontWeight:'bold', color:'white', textAlign:'center', marginHorizontal:7}}>Si</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0} style={tw`mx-[5%] bg-green-500 p-2 rounded-xl shadow-2xl`} onPress={() => renderNot()}>
                        <Text style={{fontSize: xlFontSize, fontWeight:'bold', color:'white', textAlign:'center', marginHorizontal:7}}>No</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0} style={tw`mx-[5%] bg-yellow-300 pt-2 pb-2 rounded-xl shadow-2xl`} onPress={() => renderIdk()}>
                        <Text style={{fontSize: xlFontSize, fontWeight:'bold', color:'black', textAlign:'center', marginHorizontal:7}}>Non lo so</Text>
                    </TouchableOpacity>
                </View>
            </View>)}
          {allergicYes && !allergicIdk && !allergicNot && ( // ALLERGIC YES PAGE ALERT
            <View style={tw`items-center justify-center flex-1`}>
                <View style={tw`bg-red-500 p-4 justify-center rounded-3xl shadow-2xl mx-[10%]`}>
                    <Text style={{fontSize: xlFontSize, fontWeight:'bold', color:'white'}}>SOMMINISTRA FARMACI EMERGENZA COME DA INDICAZIONE DEL TUO MEDICO</Text>
                    <View style={tw`bg-white rounded-2xl p-4 mt-2`}>
                        <Text style={{fontSize: xlFontSize, fontWeight:'bold', color:'red'}}>[ ADRENALINA INTRAMUSCOLO COSCIA ]</Text>
                    </View>
                </View>
                <View style={tw`mt-5 flex-row items-center justify-center`}>
                    <TouchableOpacity activeOpacity={0} style={tw`bg-red-500 flex-row p-4 justify-center rounded-3xl items-center shadow-2xl mx-[4%]`} onPress={() => openPhoneDialer()}>
                        <Text style={{fontSize: xlFontSize, fontWeight:'bold', color:'white', marginHorizontal:'5%'}}>ALLERTA 118 O 112</Text>
                        <IconCommunity name='phone-dial' size={iconSize}/>
                        <Text style={{fontSize: xlFontSize, fontWeight:'bold', marginHorizontal:'2%'}}>Chiama</Text>
                    </TouchableOpacity>
                </View>
            </View>)}
          {!allergicYes && !allergicIdk && allergicNot && ( // ALLERGIC NOT PAGE
            <View style={tw`items-center flex-1 justify-center`}>
                <View style={tw`bg-yellow-300 p-2 rounded-xl shadow-2xl mx-[10%]`}>
                    <Text style={{fontSize: xsFontSize, fontWeight:'bold', color:'black', textAlign:'center'}}>COMPARSA DI ROSSORE, GONFIORE 2-3 CM</Text>
                </View>
                <IconCommunity name='arrow-down-thin' size={iconSize} style={tw``}/>
                <View style={tw`bg-green-500 p-2 justify-center rounded-3xl shadow-2xl mx-[10%]`}>
                    <Text style={{fontSize: lgFontSize, fontWeight:'bold', color:'white', marginBottom:5}}>• APPLICARE GHIACCIO SECCO</Text>
                    <Text style={{fontSize: lgFontSize, fontWeight:'bold', color:'white', marginBottom:5}}>• APPLICARE POMATA AL CORTISONE</Text>
                    <Text style={{fontSize: lgFontSize, fontWeight:'bold', color:'white'}}>• ESTRARRE IL PUNGIGLIONE SE PRESENTE</Text>
                    <Text style={{fontSize: lgFontSize, fontWeight:'bold', color:'red', textAlign:'center', backgroundColor:'white', borderRadius:15, padding:5}}>Utilizza pinzette o oggetti simili, il pungiglione va sollevato [ ! ]</Text>
                </View>
            </View>)}
            {!allergicYes && allergicIdk && !allergicNot && ( // ALLERGIC I DONT KNOW PAGE
            <View style={tw`items-center flex-1 justify-center`}>
                <View style={tw`bg-yellow-300 p-2 rounded-xl shadow-2xl mx-[1%]`}>
                    <Text style={{fontSize: xsFontSize, fontWeight:'bold', color:'black', textAlign:'center'}}>COMPARSA DI ROSSORE, GONFIORE 2-3 CM</Text>
                </View>
                <IconCommunity name='arrow-down-thin' size={iconSize} style={tw``}/>
                <View style={tw`bg-green-500 p-2 justify-center rounded-3xl shadow-2xl mx-[1%]`}>
                    <Text style={{fontSize: lgFontSize, fontWeight:'bold', color:'white', marginBottom:5}}>• APPLICARE GHIACCIO SECCO</Text>
                    <Text style={{fontSize: lgFontSize, fontWeight:'bold', color:'white', marginBottom:5}}>• APPLICARE POMATA AL CORTISONE</Text>
                    <Text style={{fontSize: lgFontSize, fontWeight:'bold', color:'white'}}>• ESTRARRE IL PUNGIGLIONE SE PRESENTE</Text>
                    <Text style={[{fontSize: lgFontSize, fontWeight:'bold', color:'red', textAlign:'center', backgroundColor:'white', padding:5}, tw`rounded-2xl`]}>Utilizza pinzette o oggetti simili, il pungiglione va sollevato [ ! ]</Text>
                </View>
                <IconCommunity name='arrow-down-thin' size={iconSize} style={tw``}/>
                <View style={tw`bg-yellow-300 p-2 rounded-xl shadow-2xl mx-[1%]`}>
                    <Text style={{fontSize: xsFontSize, fontWeight:'bold', color:'black', textAlign:'center'}}>COMPARSA DI</Text>
                </View>
                <IconCommunity name='arrow-down-thin' size={iconSize} style={tw``}/>
                <View style={tw`bg-yellow-500 p-2 justify-center rounded-3xl shadow-2xl mx-[1%]`}>
                    <Text style={{fontSize: lgFontSize, fontWeight:'bold', color:'white', marginBottom:5}}>• DIFFICOLTA' RESPIRATORIA</Text>
                    <Text style={{fontSize: lgFontSize, fontWeight:'bold', color:'white', marginBottom:5}}>• GONFIORE BOCCA, COLLO, LINGUA</Text>
                    <Text style={{fontSize: lgFontSize, fontWeight:'bold', color:'white', marginBottom:5}}>• ABBASSAMENTO PRESSIONE</Text>
                    <Text style={{fontSize: lgFontSize, fontWeight:'bold', color:'white'}}>• ALTERAZIONE FREQUENZA CARDIACA</Text>
                </View>
                <View style={tw`flex-row mt-2 items-center justify-center`}>
                    <TouchableOpacity activeOpacity={0} style={tw`mx-[10%] bg-red-500 p-2 px-5 rounded-xl shadow-2xl`} onPress={() => renderYesIdkPage()}>
                        <Text style={{fontSize: xlFontSize, fontWeight:'bold', color:'white', textAlign:'center', marginHorizontal: 20}}>Si</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0} style={tw`mx-[10%] bg-green-500 p-2 rounded-xl shadow-2xl`} onPress={() => renderNotIdkPage()}>
                        <Text style={{fontSize: xlFontSize, fontWeight:'bold', color:'white', textAlign:'center', marginHorizontal: 20}}>No</Text>
                    </TouchableOpacity>
                </View>
                {allergicIdkNot && (<View style={tw`bg-green-500 p-2 justify-center rounded-xl shadow-2xl mt-4`}>
                    <Text style={{fontSize: lgFontSize, fontWeight:'bold', color:'white', marginBottom:5, textAlign:'center'}}>• RESTA MONITORATO PER 24/48 H</Text>
                </View>)}
            </View>)}
            {allergicIdkYes && ( // ALLERGIC IDK YES PAGE ALERT
            <View style={tw`items-center justify-center flex-1`}>
                <View style={tw`flex-row justify-center items-center`}>
                    <TouchableOpacity activeOpacity={0} style={tw`bg-red-500 flex-row p-4 justify-center rounded-3xl items-center shadow-2xl mx-[4%]`} onPress={() => openPhoneDialer()}>
                        <Text style={{fontSize: xlFontSize, fontWeight:'bold', color:'white', marginHorizontal:'5%'}}>ALLERTA 118 O 112</Text>
                        <IconCommunity name='phone-dial' size={iconSize}/>
                        <Text style={{fontSize: xlFontSize, fontWeight:'bold', marginHorizontal:'2%'}}>Chiama</Text>
                    </TouchableOpacity>
                </View>
                <View style={tw`bg-red-500 p-4 justify-center rounded-3xl shadow-2xl mt-5 mx-[10%]`}>
                    <Text style={{fontSize: xlFontSize, fontWeight:'bold', color:'white'}}>SOMMINISTRA FARMACI EMERGENZA COME DA INDICAZIONE DEL TUO MEDICO</Text>
                    <View style={tw`bg-white rounded-2xl p-4 mt-3`}>
                        <Text style={{fontSize: xlFontSize, fontWeight:'bold', color:'red'}}>[ ADRENALINA INTRAMUSCOLO COSCIA ]</Text>
                    </View>
                </View>
            </View>)}
      </SafeAreaView>
);
}

export default ImenotteroScreen