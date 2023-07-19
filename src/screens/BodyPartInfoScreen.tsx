import React, { useLayoutEffect, useState} from 'react';
import { View, Text } from 'react-native';
import { useNavigation , useRoute, RouteProp} from '@react-navigation/native';
import { RootStackParamList } from '../../types';

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
        name: 'Elbow',
        description: 'Quick description about the elbow immobilization',
        imageURL: '../../assets/Elbow.png'
    },
    {
        name: 'Forearm',
        description: 'Quick description about the forearm immobilization',
        imageURL: '../../assets/Forearm.png'
    },
    {
        name: 'Hand',
        description: 'Quick description about the hand immobilization',
        imageURL: '../../assets/Hand.png'
    },
]


const BodyPartInfoScreen: React.FC = () => {
    const route = useRoute<RouteProp<RootStackParamList, 'BodyPartInfo'>>();
    const { bodyPartName } = route.params;
    const selectedPart = '';

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
        headerTitle: bodyPartName,
        });
    }, [navigation, bodyPartName]);

    return (
        <View>
            <Text>How to secure</Text>
        </View>
    );
};

export default BodyPartInfoScreen;