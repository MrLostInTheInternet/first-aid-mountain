import React, { useLayoutEffect, useState} from 'react';
import { View, Text } from 'react-native';
import { useNavigation , useRoute, RouteProp} from '@react-navigation/native';
import { RootStackParamList } from '../../types';

const BodyPartInfoScreen: React.FC = () => {
    const route = useRoute<RouteProp<RootStackParamList, 'BiteInfo'>>();
    const { biteType } = route.params;
    const selectedPart = '';

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
        headerTitle: biteType,
        });
    }, [navigation, biteType]);

    return (
        <View>
            <Text>How to secure</Text>
        </View>
    );
};

export default BodyPartInfoScreen;