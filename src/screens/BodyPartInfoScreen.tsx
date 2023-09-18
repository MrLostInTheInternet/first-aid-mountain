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
import Ionicons from 'react-native-vector-icons/Ionicons';
import SafeDrawerAndroidView from '../components/SafeDrawerAndroidView';



interface BodyPart {
    name: string;
    description: string;
    imageURL: string;
}

const bodyParts: BodyPart [] = [
    {
        name: 'Head',
        description: 'Quick description about the head immobilization',
        imageURL: '../../assets/Head.png'
    },
    {
        name: 'Neck',
        description: 'Quick description about the neck immobilization',
        imageURL: '../../assets/Neck.png'
    },
    {
        name: 'Torso',
        description: 'Quick description about the torso immobilization',
        imageURL: '../../assets/Torso.png'
    },
    {
        name: 'Right Shoulder',
        description: 'Quick description about the right shoulder immobilization',
        imageURL: '../../assets/Dx_shoulder.png'
    },
    {
        name: 'Left Shoulder',
        description: 'Quick description about the left shoulder immobilization',
        imageURL: '../../assets/Sx_shoulder.png'
    },
    {
        name: 'Left Elbow',
        description: 'Quick description about the left elbow immobilization',
        imageURL: '../../assets/Elbow.png'
    },
    {
        name: 'Left Forearm',
        description: 'Quick description about the left forearm immobilization',
        imageURL: '../../assets/Forearm.png'
    },
    {
        name: 'Left Hand',
        description: 'Quick description about the left hand immobilization',
        imageURL: '../../assets/Hand.png'
    },
    {
        name: 'Right Elbow',
        description: 'Quick description about the right elbow immobilization',
        imageURL: '../../assets/Elbow.png'
    },
    {
        name: 'Right Forearm',
        description: 'Quick description about the right forearm immobilization',
        imageURL: '../../assets/Forearm.png'
    },
    {
        name: 'Right Hand',
        description: 'Quick description about the right hand immobilization',
        imageURL: '../../assets/Hand.png'
    },
    {
        name: 'Right Wrist',
        description: 'Quick description about the right wrist immobilization',
        imageURL: '../../assets/Wrist.png'
    },
    {
        name: 'Left Wrist',
        description: 'Quick description about the left wrist immobilization',
        imageURL: '../../assets/Wrist.png'
    },
    {
        name: 'Pelvis',
        description: 'Quick description about the pelvis immobilization',
        imageURL: '../../assets/Pelvis.png'
    },
]


const BodyPartInfoScreen: React.FC = () => {
    const route = useRoute<RouteProp<RootStackParamList, 'BodyPartInfo'>>();
    const [selectBodyPart, setSelectBodyPart] = useState<BodyPart | null>(null);
    const { bodyPartName } = route.params;
    const fontScaleHeight = Dimensions.get("window").height
    const fontScaleWidth = Dimensions.get("window").width
  
    const xsFontSize = fontScaleHeight * 0.02;
    const lgFontSize = fontScaleHeight * 0.022;
    const xlFontSize = fontScaleHeight * 0.024;
    const xxlFontSize = fontScaleHeight * 0.027;
    const iconSize = fontScaleHeight * 0.037;

    const navigation = useNavigation<DrawerNavigationProp<RootStackParamList>>();
    
    useLayoutEffect(() => {
        const selectedPart = bodyParts.find((part) => part.name.toLowerCase() === bodyPartName.toLowerCase());
        setSelectBodyPart(selectedPart || null)
    }, [navigation, bodyPartName]);

    const handleDrawer = () => {
        navigation.openDrawer();
    }

    return (
        <SafeAreaView style={SafeDrawerAndroidView.AndroidSafeArea}>
            <View style={tw`flex-row items-center mx-4`}>
                <TouchableOpacity activeOpacity={0} >
                    <Ionicons name='body' size={iconSize} color='#ff0090' />
                </TouchableOpacity>
                <View style={tw`flex-1`}>
                    <Text allowFontScaling={false} style={{fontSize: xsFontSize, fontWeight:'bold', color:'#eb1a22', paddingLeft: 5}}>Mountain First Aid</Text>
                    <Text allowFontScaling={false} style={{fontSize: lgFontSize, fontWeight:'bold', color:'#eb1a22', paddingLeft: 5}}>{bodyPartName}</Text>
                </View>
                <TouchableOpacity activeOpacity={0.4} onPress={() => handleDrawer()} style={tw`flex-row items-center`}>
                    <Text allowFontScaling={false} style={{fontSize: xsFontSize, fontWeight:'bold', color:'gray', paddingRight: 5}}>Apri opzioni</Text>
                    <IconFontAwesome name='bars' size={iconSize} color={'black'}/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default BodyPartInfoScreen;