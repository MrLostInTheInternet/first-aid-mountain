import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useLayoutEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';
import { RootStackParamList } from '../../types';
import {
  AcademicCapIcon,
  Bars3Icon
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
    navigation.navigate("BiteInfo", { biteType })
  }

  return (
    <SafeAreaView>
      <View style={tw`flex-row top-[6%] absolute pb-3 items-center mx-4`}>
        <TouchableOpacity activeOpacity={0.4} >
          <AcademicCapIcon size={40} color="black"/>
        </TouchableOpacity>
        <View>
          <Text style={tw`font-bold text-gray-400 text-xs`}>Select body part</Text>
          <Text style={tw`font-bold text-xl text-pink-500`}>Trail Medic</Text>
        </View>
      </View>
      <View style={tw`right-[2%] absolute top-[6%] z-100`}>
        <SelectList
          setSelected={(val:string) => setSelected(val)}
          onSelect={()=> handleSelected()}
          data={data} 
          save="value"
          search={false}
          inputStyles={{fontSize:12}}
          boxStyles={{backgroundColor:'white'}}
          dropdownStyles={{backgroundColor:'white'}}
          dropdownTextStyles={{fontSize:12, margin: -2}}
        />
      </View>
      <View style={tw`items-center justify-center top-[12%]`}>
        <BodyPartsComponent />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen
