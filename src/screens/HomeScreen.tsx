import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useLayoutEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';
import { RootStackParamList } from '../../types';
import {
  AcademicCapIcon,
  BarsArrowDownIcon,
  BarsArrowUpIcon
} from "react-native-heroicons/outline";
import { SelectList } from 'react-native-dropdown-select-list'
import SafeAndroidView from "../components/SafeAndroidView";
import BodyPartsComponent from "../components/BodyPartsComponent"
import { StackNavigationProp } from '@react-navigation/stack';


const HomeScreen: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const [selected, setSelected] = React.useState("");
  
  const data = [
      {key:'1', value:'Puntura da imenottero'},
      {key:'2', value:'Morso di vipera'},
      {key:'3', value:'Cosa mettere nello zaino'},
  ]
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const handleSelected = () => {
    const biteType = selected
    setSelected("")
    navigation.navigate("BiteInfo", { biteType })
  }

  return (
    <SafeAreaView>
      <View style={tw`flex-row top-[6.55%] absolute pb-3 items-center mx-4`}>
        <TouchableOpacity activeOpacity={0.4} >
          <AcademicCapIcon size={40} color="black"/>
        </TouchableOpacity>
        <View>
          <Text style={tw`font-bold text-xs`}>Select body part</Text>
          <Text style={tw`font-bold text-xl text-pink-500`}>First Aid Mountain</Text>
        </View>
      </View>
      <View style={tw`right-[2%] absolute top-[6%] z-100`}>
        <SelectList
          setSelected={(value:string) => setSelected(value)}
          onSelect={()=> handleSelected()}
          data={data} 
          save="value"
          inputStyles={{fontSize:12}}
          boxStyles={{backgroundColor:'white'}}
          dropdownStyles={{backgroundColor:'white'}}
          arrowicon={<BarsArrowDownIcon size={20} color='black' style={tw`mx-1 left-3`}/>}
          closeicon={<BarsArrowUpIcon size={20} color='black' style={tw`mx-1 left-3`}/>}
          dropdownTextStyles={{fontSize:12, margin: 2}}
        />
      </View>
      <View style={tw`items-center justify-center top-[12%]`}>
        <BodyPartsComponent />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen
