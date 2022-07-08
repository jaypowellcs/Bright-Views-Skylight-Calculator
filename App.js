
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-elements';
//Screens
import HomeScreen from './screens/HomeScreen';
import IdentifyScreen from './screens/IdentifyScreen';
import SkylightCalScreen from './screens/SkylightCalScreen';
import GlassScreen from './screens/GlassScreen';
import ContactScreen from './screens/ContactScreen';




export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
        backgroundColor: '#F5272B',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold',
        },
        }}
        >
        <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          title: 'Home',
          }}
        />
        <Stack.Screen 
        name="Identify" 
        component={IdentifyScreen} 
        options={{title: 'Identify Your Skylights'}}
        />
        <Stack.Screen 
        name="SkylightCal" 
        component={SkylightCalScreen}
        options={{title: 'Skylight Calculator'}}
         />
        <Stack.Screen 
        name="Glass"
         component={GlassScreen}
         options={{title: 'Glass vs Plastic'}}
         />
        <Stack.Screen 
        name="Contact" 
        component={ContactScreen}
        options={{title: 'Contact Us'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


