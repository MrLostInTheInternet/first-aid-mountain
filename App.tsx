import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import BodyPartInfoScreen from './src/screens/BodyPartInfoScreen';
import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BodyPartInfo" component={BodyPartInfoScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator
