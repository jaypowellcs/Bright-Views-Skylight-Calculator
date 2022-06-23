
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import IdentifyScreen from './screens/IdentifyScreen';
import { createStackNavigator } from '@react-navigation/stack';




export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Identify" component={IdentifyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


