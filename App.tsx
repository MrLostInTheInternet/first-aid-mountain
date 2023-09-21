import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from './types';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './src/navigations/DrawerNavigator';
import { useState } from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { View, Text, Dimensions, Image } from 'react-native';
import tw from 'twrnc';

const fontScaleHeight = Dimensions.get("window").height
const fontScaleWidth = Dimensions.get("window").width

const xsFontSize = fontScaleHeight * 0.02;
const lgFontSize = fontScaleHeight * 0.022;
const xlFontSize = fontScaleHeight * 0.024;
const xxlFontSize = fontScaleHeight * 0.027;
const iconSize = fontScaleHeight * 0.037;

const Stack = createStackNavigator<RootStackParamList>();

const slides = [
  {
    id: 1,
    title: 'Benvenuti in Mountain First Aid',
    description: 'Un\'app che vi aiuterà nelle situazioni di emergenza in montagna,\ntra punture, morsi, lesioni e fratture,\nl\'app vi guiderà per curare, immobilizzare o prevenire danni ulteriori.\n\nSperiamo vi sarà di aiuto.',
    image: require('./assets/logo_text.png')
  },
  {
    id: 2,
    title: 'Seleziona la zona interessata sul manichino',
    description: 'Si aprirà una pagina con le opzioni da scegliere in base alla provenienza del dolore: lesione, morso di vipera, puntura, frattura\n\nSeleziona l\'opzione per la quale hai bisogno\n\nTroverai la spiegazione passo passo di come curare, bendare, immobilizzare la zona.',
    image: require('./assets/logo_text.png')
  },
  {
    id: 3,
    title: 'Nel menù in alto a destra troverete tante altre opzioni che vi potrebbero servire',
    description: 'Un\'app che vi aiuterà nelle situazioni di emergenza in montagna,\n\ntra punture, morsi, lesioni e fratture,\n\nl\'app vi guiderà per curare, immobilizzare o prevenire danni ulteriori.\n\nSperiamo vi sarà di aiuto.',
    image: require('./assets/logo_text.png')
  }
]

const App: React.FC = () => {
  const [showHomePage, setShowHomePage] = useState(false);

  const buttonLabel = (label:any) => {
    return (
      <View>
        <Text>
          {label}
        </Text>
      </View>
    )  
  }

  if (!showHomePage) {
    return (
      <AppIntroSlider
        data={slides}
        renderItem={({item}) => {
          return (
            <View style={tw`flex-1 items-center justify-center bg-orange-300`}>
              <Image
                source={item.image}
              />
              <Text style={[{fontSize: xxlFontSize, textAlign: 'center'}, tw`m-[2%]`]}>{item.title}</Text>
              <Text style={[{fontSize: xsFontSize, textAlign: 'center'}, tw`mx-[2%]`]}>{item.description}</Text>
            </View>
          )
        }}
        showSkipButton
        renderNextButton={() => buttonLabel('Avanti')}
        renderSkipButton={() => buttonLabel('Salta')}
        renderDoneButton={() => buttonLabel('Fatto!')}
        onDone={() => {
          setShowHomePage(true);
        }}/>
    )
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Drawer' screenOptions={{headerShown: false}}>
        <Stack.Screen name='Drawer' component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App
