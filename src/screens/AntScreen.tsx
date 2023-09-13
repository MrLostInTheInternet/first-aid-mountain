import React, { useEffect, useLayoutEffect, useState} from 'react';
import { View, Text, Button } from 'react-native';
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
import { StackNavigationProp } from '@react-navigation/stack';



const ImenotteroScreen = () => {
    const navigation = useNavigation<DrawerNavigationProp<RootStackParamList>>();
    const nav = useNavigation<StackNavigationProp<RootStackParamList>>();
    const [initialMessage, setInitialMessage] = useState(true);
    const [allergicYes, setAllergicYes] = useState(false);
    const [allergicNot, setAllergicNot] = useState(false);
    const [allergicIdk, setAllergicIdk] = useState(false);
    const [allergicIdkYes, setAllergicIdkYes] = useState(false);
    const [allergicIdkNot, setAllergicIdkNot] = useState(false);

    useLayoutEffect(() => {
        resetPage()
      }, [navigation]);

    const xsFontSize = RFValue(13);
    const lgFontSize = RFValue(17);
    const xlFontSize = RFValue(20);
    const xxlFontSize = RFValue(24);

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

  return (
      <SafeAreaView style={SafeDrawerAndroidView.AndroidSafeArea}>
          <View style={tw`flex-row pb-3 items-center mx-4`}>
              <TouchableOpacity activeOpacity={0} onPress={() => resetPage()}>
                <IconCommunity name='bee' size={30} color='#ffa500' />
              </TouchableOpacity>
              <View style={tw`flex-1`}>
                <Text style={{fontSize: xsFontSize, fontWeight:'bold', color:'#eb1a22', paddingLeft: 5}}>Mountain First Aid</Text>
                <Text style={{fontSize: lgFontSize, fontWeight:'bold', color:'#eb1a22', paddingLeft: 5}}>Puntura di Ape/Vespa/..</Text>
              </View>
              <TouchableOpacity activeOpacity={0.4} onPress={() => handleDrawer()} style={tw`flex-row items-center`}>
                <Text style={{fontSize: xsFontSize, fontWeight:'bold', color:'gray', paddingRight: 5}}>Apri opzioni</Text>
                <IconFontAwesome name='bars' size={30} color={'black'}/>
              </TouchableOpacity>
          </View>
          {initialMessage && !allergicYes && !allergicIdk && !allergicNot && ( // INITIAL PAGE
            <View style={tw`items-center mx-4 flex-1 justify-center`}>
                <View style={tw`bg-red-500 justify-center items-center mx-[10%] rounded-3xl shadow-md p-4 mx-5`}>
                    <Text style={{fontSize: xxlFontSize, fontWeight:'bold', color:'white', textAlign:'center'}}>Sei stata/o punta/o da una Vespa o simile?</Text>
                </View>
                <IconCommunity name='arrow-down-thin' size={45} style={tw`m-2`}/>
                <View style={tw`bg-red-500 h-[20%] w-[60%] justify-center items-center mx-[10%] rounded-3xl shadow-md mb-7`}>
                    <Text style={{fontSize: xxlFontSize, fontWeight:'bold', color:'white', textAlign:'center'}}>Sei allergico?</Text>
                </View>
                
                <View style={tw`flex-row mt-5`}>
                    <TouchableOpacity activeOpacity={0} style={tw`mx-1 bg-red-500 p-2 px-5 rounded-xl shadow-md`} onPress={() => renderYes()}>
                        <Text style={{fontSize: xlFontSize, fontWeight:'bold', color:'white', textAlign:'center', marginHorizontal:7}}>Si</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0} style={tw`mx-1 bg-green-500 p-2 rounded-xl shadow-md`} onPress={() => renderNot()}>
                        <Text style={{fontSize: xlFontSize, fontWeight:'bold', color:'white', textAlign:'center', marginHorizontal:7}}>No</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0} style={tw`mx-1 bg-yellow-300 pt-2 pb-2 rounded-xl shadow-md`} onPress={() => renderIdk()}>
                        <Text style={{fontSize: xlFontSize, fontWeight:'bold', color:'black', textAlign:'center', marginHorizontal:7}}>Non lo so</Text>
                    </TouchableOpacity>
                </View>
            </View>)}
          {allergicYes && !allergicIdk && !allergicNot && ( // ALLERGIC YES PAGE ALERT
            <View style={tw`items-center justify-center flex-1`}>
                <View style={tw`bg-red-500 w-[60%] p-4 justify-center rounded-3xl shadow-md`}>
                    <Text style={{fontSize: xlFontSize, fontWeight:'bold', color:'white'}}>SOMMINISTRA FARMACI EMERGENZA COME DA INDICAZIONE DEL TUO MEDICO</Text>
                    <View style={tw`bg-white rounded-2xl p-4`}>
                        <Text style={{fontSize: xlFontSize, fontWeight:'bold', color:'red'}}>[ ADRENALINA INTRAMUSCOLO COSCIA ]</Text>
                    </View>
                </View>
                <View style={tw`mt-5`}>
                    <TouchableOpacity activeOpacity={0} style={tw`bg-red-500 p-4 justify-center rounded-3xl items-center shadow-md`}>
                        <Text style={{fontSize: xlFontSize, fontWeight:'bold', color:'white'}}>ALLERTA 118 O 112</Text>
                    </TouchableOpacity>
                </View>
            </View>)}
          {!allergicYes && !allergicIdk && allergicNot && ( // ALLERGIC NOT PAGE
            <View style={tw`items-center flex-1 justify-center`}>
                <View style={tw`bg-yellow-300 p-2 rounded-xl shadow-md`}>
                    <Text style={{fontSize: xsFontSize, fontWeight:'bold', color:'black', textAlign:'center'}}>COMPARSA DI ROSSORE, GONFIORE 2-3 CM</Text>
                </View>
                <IconCommunity name='arrow-down-thin' size={30} style={tw``}/>
                <View style={tw`bg-green-500 w-[80%] p-2 justify-center rounded-3xl shadow-md`}>
                    <Text style={{fontSize: lgFontSize, fontWeight:'bold', color:'white', marginBottom:5}}>• APPLICARE GHIACCIO SECCO</Text>
                    <Text style={{fontSize: lgFontSize, fontWeight:'bold', color:'white', marginBottom:5}}>• APPLICARE POMATA AL CORTISONE</Text>
                    <Text style={{fontSize: lgFontSize, fontWeight:'bold', color:'white'}}>• ESTRARRE IL PUNGIGLIONE SE PRESENTE</Text>
                    <Text style={{fontSize: lgFontSize, fontWeight:'bold', color:'red', textAlign:'center', backgroundColor:'white', borderRadius:15, padding:5}}>Utilizza pinzette o oggetti simili, il pungiglione va sollevato [ ! ]</Text>
                </View>
            </View>)}
            {!allergicYes && allergicIdk && !allergicNot && ( // ALLERGIC I DONT KNOW PAGE
            <View style={tw`items-center flex-1 justify-center`}>
                <View style={tw`bg-yellow-300 p-2 rounded-xl shadow-md`}>
                    <Text style={{fontSize: xsFontSize, fontWeight:'bold', color:'black', textAlign:'center'}}>COMPARSA DI ROSSORE, GONFIORE 2-3 CM</Text>
                </View>
                <IconCommunity name='arrow-down-thin' size={30} style={tw``}/>
                <View style={tw`bg-green-500 w-[80%] p-2 justify-center rounded-3xl shadow-md`}>
                    <Text style={{fontSize: lgFontSize, fontWeight:'bold', color:'white', marginBottom:5}}>• APPLICARE GHIACCIO SECCO</Text>
                    <Text style={{fontSize: lgFontSize, fontWeight:'bold', color:'white', marginBottom:5}}>• APPLICARE POMATA AL CORTISONE</Text>
                    <Text style={{fontSize: lgFontSize, fontWeight:'bold', color:'white'}}>• ESTRARRE IL PUNGIGLIONE SE PRESENTE</Text>
                    <Text style={{fontSize: lgFontSize, fontWeight:'bold', color:'red', textAlign:'center', backgroundColor:'white', borderRadius:15, padding:5}}>Utilizza pinzette o oggetti simili, il pungiglione va sollevato [ ! ]</Text>
                </View>
                <IconCommunity name='arrow-down-thin' size={30} style={tw``}/>
                <View style={tw`bg-yellow-300 p-2 rounded-xl shadow-md`}>
                    <Text style={{fontSize: xsFontSize, fontWeight:'bold', color:'black', textAlign:'center'}}>COMPARSA DI</Text>
                </View>
                <IconCommunity name='arrow-down-thin' size={30} style={tw``}/>
                <View style={tw`bg-yellow-500 w-[80%] p-2 justify-center rounded-3xl shadow-md`}>
                    <Text style={{fontSize: lgFontSize, fontWeight:'bold', color:'white', marginBottom:5}}>• DIFFICOLTA' RESPIRATORIA</Text>
                    <Text style={{fontSize: lgFontSize, fontWeight:'bold', color:'white', marginBottom:5}}>• GONFIORE BOCCA, COLLO, LINGUA</Text>
                    <Text style={{fontSize: lgFontSize, fontWeight:'bold', color:'white', marginBottom:5}}>• ABBASSAMENTO PRESSIONE</Text>
                    <Text style={{fontSize: lgFontSize, fontWeight:'bold', color:'white'}}>• ALTERAZIONE FREQUENZA CARDIACA</Text>
                </View>
                <View style={tw`flex-row mt-2`}>
                    <TouchableOpacity activeOpacity={0} style={tw`mx-10 bg-red-500 p-2 px-5 rounded-xl shadow-md`} onPress={() => renderYesIdkPage()}>
                        <Text style={{fontSize: xlFontSize, fontWeight:'bold', color:'white', textAlign:'center', marginHorizontal:7}}>Si</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0} style={tw`mx-10 bg-green-500 p-2 rounded-xl shadow-md`} onPress={() => renderNotIdkPage()}>
                        <Text style={{fontSize: xlFontSize, fontWeight:'bold', color:'white', textAlign:'center', marginHorizontal:7}}>No</Text>
                    </TouchableOpacity>
                </View>
                {allergicIdkNot && (<View style={tw`bg-green-500 w-[90%] p-2 justify-center rounded-3xl shadow-md mt-4`}>
                    <Text style={{fontSize: lgFontSize, fontWeight:'bold', color:'white', marginBottom:5, textAlign:'center'}}>• RESTA MONITORATO PER 24/48 H</Text>
                </View>)}
            </View>)}
            {allergicIdkYes && ( // ALLERGIC YES PAGE ALERT
            <View style={tw`items-center justify-center flex-1`}>
                <View style={tw``}>
                    <TouchableOpacity activeOpacity={0} style={tw`bg-red-500 p-4 justify-center rounded-3xl items-center shadow-md`}>
                        <Text style={{fontSize: xlFontSize, fontWeight:'bold', color:'white'}}>ALLERTA 118 O 112</Text>
                    </TouchableOpacity>
                </View>
                <View style={tw`bg-red-500 w-[60%] p-4 justify-center rounded-3xl shadow-md mt-5`}>
                    <Text style={{fontSize: xlFontSize, fontWeight:'bold', color:'white'}}>SOMMINISTRA FARMACI EMERGENZA COME DA INDICAZIONE DEL TUO MEDICO</Text>
                    <View style={tw`bg-white rounded-2xl p-4`}>
                        <Text style={{fontSize: xlFontSize, fontWeight:'bold', color:'red'}}>[ ADRENALINA INTRAMUSCOLO COSCIA ]</Text>
                    </View>
                </View>
            </View>)}
      </SafeAreaView>
);
}

export default ImenotteroScreen