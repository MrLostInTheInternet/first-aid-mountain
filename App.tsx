import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import BodyPartInfoScreen from './src/screens/BodyPartInfoScreen';
import { RootStackParamList } from './types';
import 'react-native-gesture-handler';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import AntScreen from './src/screens/AntScreen';
import SnakeScreen from './src/screens/SnakeScreen';
import BackpackScreen from './src/screens/BackpackScreen';
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SafeAndroidView from './src/components/SafeAndroidView';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Dimensions, View } from 'react-native';
import { Svg } from 'react-native-svg';
import Logo from './src/components/logo_loader';

const Drawer = createDrawerNavigator<RootStackParamList>();

const App: React.FC = () => {
  const fontScaleHeight = Dimensions.get("window").height;
  const iconSize = fontScaleHeight * 0.037;
  
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{drawerPosition: 'right', headerShown:false}}
        drawerContent={
          (props:any) => {
            return (
              <SafeAreaView>
                <View style={{
                  height:'40%',
                  justifyContent: 'center',
                  alignItems:'center'
                }}>
                  <Logo />
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
                size={iconSize}
                color={focused ? '#eb1a22' : 'black'}
              />
           ),}}/>
        <Drawer.Screen name="BodyPartInfo" component={BodyPartInfoScreen} options={{drawerLabel: () => null, drawerItemStyle: {display:'none'}}}/>
        <Drawer.Screen name="Ant" component={AntScreen} options={{drawerLabel:'Puntura da Imenottero', drawerIcon: ({focused}) => (
              <IconCommunity
                name='bee'
                size={iconSize}
                color={focused ? '#ffa500' : 'black'}
              />
           ),}}/>
        <Drawer.Screen name="Snake" component={SnakeScreen} options={{drawerLabel:'Morso di Vipera', drawerIcon: ({focused}) => (
              <IconCommunity
                name='snake'
                size={iconSize}
                color={focused ? '#9bbd5c' : 'black'}
              />
           ),}}/>
        <Drawer.Screen name="Backpack" component={BackpackScreen} options={{drawerLabel:'Kit primo soccorso', drawerIcon: ({focused}) => (
              <IconMaterial
                name='backpack'
                size={iconSize}
                color={focused ? '#542a18' : 'black'}
              />
           ),}}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App
