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
  const [isOpen, setIsOpen] = useState(false);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const [selected, setSelected] = React.useState("");
  
  const data = [
      {key:'1', value:'Bite Type 1'},
      {key:'2', value:'Bite Type 2'},
      {key:'3', value:'Bite Type 3'},
  ]
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const handleSelected = () => {
    const biteType = selected
    navigation.navigate("BiteInfo", { biteType })
    setIsOpen(!isOpen)
  }

  return (
    <SafeAreaView style={SafeAndroidView.AndroidSafeArea}>
      <View style={tw`flex-row pt-4 pb-3 items-center mx-4`}>
        <TouchableOpacity activeOpacity={0.4} style={tw`bg-white`}>
          <AcademicCapIcon size={40} color="black"/>
        </TouchableOpacity>
        <View style={tw`pr-50`}>
          <Text style={tw`font-bold text-gray-400 text-xs`}>Select body part</Text>
          <Text style={tw`font-bold text-xl text-pink-500`}>Trek Medic</Text>
        </View>
      </View>
      <View style={tw`left-65 absolute top-11 z-100`}>
        <SelectList
          setSelected={(val:string) => setSelected(val)}
          onSelect={()=> handleSelected()}
          placeholder='Bite Type'
          data={data} 
          save="value"
          search={false}
        />
      </View>
      <View>
        <BodyPartsComponent />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen