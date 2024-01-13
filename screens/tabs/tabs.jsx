import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Signup } from '../signUp/signup';
import { colors } from '../../constants';
import { setBackgroundColorAsync } from 'expo-navigation-bar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Home } from '../home/home';
import { Jobs } from '../jobs/jobs';
import { Search } from '../search/search';
import { Settings } from '../settings/settings';

const Tab = createBottomTabNavigator();

export function Tabs() {
    (async function () {
        await setBackgroundColorAsync(colors.white)
    })()
    return (
        <Tab.Navigator backBehavior='initialRoute' initialRouteName='Home' screenOptions={{
            // header: ()=>{return},
            headerTitle: "",
            headerStyle: {
                backgroundColor: colors.tabsBg
            },
            tabBarHideOnKeyboard: true,
            tabBarActiveTintColor: colors.primary,
            tabBarStyle: {
                borderColor: "#fff",
                backgroundColor: "#fff",
                elevation: 5
            }
        }}>
            <Tab.Screen name="Home" component={Home.Page} options={{
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home-variant-outline" color={color} size={26} />
                ),
            }} />
            <Tab.Screen name="jobs" component={Jobs} 
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="briefcase-variant-outline" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen name="search" component={Search} 
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="magnify" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen name="Settings" component={Settings} 
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="cog-outline" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}