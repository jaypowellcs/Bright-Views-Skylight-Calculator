
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Identify" component={IdentifyScreen} />
        <Stack.Screen name="SkylightCal" component={SkylightCalScreen} />
        <Stack.Screen name="Glass" component={GlassScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


