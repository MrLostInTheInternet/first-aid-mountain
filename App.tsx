import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import BodyPartInfoScreen from './src/screens/BodyPartInfoScreen';
import BiteInfoScreen from './src/screens/BiteInfoScreen'
import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BodyPartInfo" component={BodyPartInfoScreen}/>
        <Stack.Screen name="BiteInfo" component={BiteInfoScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App
