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
    
    
    const navigation = useNavigation();
    
    useLayoutEffect(() => {
        const selectedPart = bodyParts.find((part) => part.name.toLowerCase() === bodyPartName.toLowerCase());
        setSelectBodyPart(selectedPart || null)
        navigation.setOptions({
            headerTitle: bodyPartName,
        });
    }, [navigation, bodyPartName]);

    return (
        <View>
            <Text>How to secure {selectBodyPart?.name}</Text>
            <Text>Description: {selectBodyPart?.description}</Text>
        </View>
    );
};

export default BodyPartInfoScreen;