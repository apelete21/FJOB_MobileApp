import { Signup, Welcome } from './screens';
import * as NavigationBar from 'expo-navigation-bar';
import {
  useFonts,
  Poppins_100Thin,
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black
} from '@expo-google-fonts/poppins';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

export default function App() {
  NavigationBar.setBackgroundColorAsync("#0000")
  // NavigationBar.setButtonStyleAsync("auto")
  let [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Poppins_900Black,
  });
  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='welcome'
        >
          <Stack.Group screenOptions={{
            header: ()=>{}
          }}>
            <Stack.Screen name='welcome' component={Welcome} />
            <Stack.Screen name='signup' component={Signup} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
