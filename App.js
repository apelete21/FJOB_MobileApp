import { Confirm, NewPassword, PasswordUpdate, SignIn, Signup, UpdateProfile, Welcome } from './screens';
import { setBackgroundColorAsync } from 'expo-navigation-bar';
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
  setBackgroundColorAsync("transparent")
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

          {/* Header no present */}
          <Stack.Group screenOptions={{
            header: () => { }
          }}>
            <Stack.Screen name='welcome' component={Welcome} />
          </Stack.Group>
          {/* Header no present */}

          {/* Header back btn present */}
          <Stack.Group screenOptions={{
            headerBackground: () => { },
            title: null
          }}>
            <Stack.Screen name='confirm' component={Confirm} />
            <Stack.Screen name='passwordupdate' component={PasswordUpdate} />
          </Stack.Group>
          {/* Header back btn present */}

          {/* Header blank */}
          <Stack.Group screenOptions={{
            headerLeft: () => { return (<></>) },
            headerBackground: () => { },
            title: null
          }}>
            <Stack.Screen name='signup' component={Signup} />
            <Stack.Screen name='signin' component={SignIn} />
            <Stack.Screen name='newpassword' component={NewPassword} />
            <Stack.Screen name='updateprofile' component={UpdateProfile} />
          </Stack.Group>
          {/* Header blank */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
