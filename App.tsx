import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from './types';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './src/navigations/DrawerNavigator';

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Drawer' screenOptions={{headerShown: false}}>
        <Stack.Screen name='Drawer' component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App
