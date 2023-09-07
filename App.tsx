import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import BodyPartInfoScreen from './src/screens/BodyPartInfoScreen';
import { RootStackParamList } from './types';
import 'react-native-gesture-handler';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import ImenotteroScreen from './src/screens/AntScreen';
import ViperaScreen from './src/screens/SnakeScreen';
import ZainoScreen from './src/screens/BackpackScreen';
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SafeAndroidView from './src/components/SafeAndroidView';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';


const Drawer = createDrawerNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{drawerPosition: 'right', headerShown:false}}
        drawerContent={
          (props:any) => {
            return (
              <SafeAreaView>
                <View style={{
                  height:100,
                  justifyContent: 'center',
                  backgroundColor: 'pink'
                }}>
                  
                </View>
                <DrawerItemList {...props}/>
              </SafeAreaView>
            )
          }
        }
      >
        <Drawer.Screen name="Home" component={HomeScreen} options={{drawerIcon: ({focused}) => (
              <Ionicons
                name='body'
                size={30}
                color={focused ? '#eaddca' : 'black'}
              />
           ),}}/>
        <Drawer.Screen name="BodyPartInfo" component={BodyPartInfoScreen} options={{drawerLabel: () => null, drawerItemStyle: {display:'none'}}}/>
        <Drawer.Screen name="Imenottero" component={ImenotteroScreen} options={{drawerLabel:'Morso da Imenottero', drawerIcon: ({focused}) => (
              <IconCommunity
                name='bee'
                size={30}
                color={focused ? '#ffa500' : 'black'}
              />
           ),}}/>
        <Drawer.Screen name="Vipera" component={ViperaScreen} options={{drawerLabel:'Morso di Vipera', drawerIcon: ({focused}) => (
              <IconCommunity
                name='snake'
                size={30}
                color={focused ? '#9bbd5c' : 'black'}
              />
           ),}}/>
        <Drawer.Screen name="Zaino" component={ZainoScreen} options={{drawerLabel:'Cosa mettere nello zaino', drawerIcon: ({focused}) => (
              <IconMaterial
                name='backpack'
                size={30}
                color={focused ? '#542a18' : 'black'}
              />
           ),}}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App
