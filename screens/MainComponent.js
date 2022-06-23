//Settings
import { Text, Card, Image, Button, Icon, Header } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList
} from '@react-navigation/drawer';
import { Image, Platform, StyleSheet, Text, View, ScrollView } from 'react-native';
import Constants from 'expo-constants';
//Screens
import HomeScreen from './HomeScreen';
import IdentifyScreen from './IdentifyScreen';
import SkylightCalScreen from './SkylightCalScreen';
import GlassScreen from './GlassScreen';
import ContactScreen from './ContactScreen';
//Images
import skylight from '../assets/images/mainskylight.jpg';



const Drawer = createDrawerNavigator();

const screenOptions = {
    headerTintColor: '#fff',
    headerStyle: { backgroundColor: '#5637DD' }
};

const HomeNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Home'
                component={HomeScreen}
            />
        </Stack.Navigator>
    );
};

const IdentifyNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Identify'
                component={IdentifyScreen}
                
            />
        </Stack.Navigator>
    );
};

const SkylightCalNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Skylight Cal'
                component={SkylightCalScreen}
            />
        </Stack.Navigator>
    );
};

const GlassNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Glass vs Plastic '
                component={GlassScreen}
            />
        </Stack.Navigator>
    );
};

const ContactNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Contact'
                component={ContactScreen}
            />
        </Stack.Navigator>
    );
};


const TopHeader = () => {
    return (
        <Header backgroundColor='#F5272B'
        rightComponent={{
            icon: 'menu',
            color: '#fff',
            size: 35, 
      }}
        centerComponent={
          <View >
            <Text 
            style={{
                color: '#fff',
                fontSize: 25, 
            
            }}>
            Skylight Calculator
            </Text>
          </View>
      }
    />
    );
};

const CustomDrawerContent = (props) => (
    <DrawerContentScrollView {...props}>
        <View style={styles.drawerHeader}>
            <View style={{ flex: 1 }}>
                <Image source={logo} style={styles.drawerImage} />
            </View>
            <View style={{ flex: 2 }}>
                <Text style={styles.drawerHeaderText}>NuCamp</Text>
            </View>
        </View>
        <DrawerItemList {...props} labelStyle={{ fontWeight: 'bold' }} />
    </DrawerContentScrollView>
);




const Main = () => {
    return (
        <View
        style={{
            flex: 1,
            paddingTop:
                Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
        }}
        >
            <Drawer.Navigator
                initialRouteName='Home'
                drawerContent={CustomDrawerContent}
                drawerStyle={{ backgroundColor: '#CEC8FF' }}
            >
                <Drawer.Screen
                    name='Home'
                    component={HomeScreen}
                    options={{
                        title: 'Home',
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='home'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name='identify'
                    component={IdentifyScreen}
                    options={{
                        title: 'Campsite Directory',
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='list'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name='SkylightCal'
                    component={SkylightCalScreen}
                    options={{
                        title: 'SkylightCal',
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='tree'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name='GlassvsPlastic'
                    component={GlassScreen}
                    options={{
                        title: 'About',
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='info-circle'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name='Contact'
                    component={ContactNavigator}
                    options={{
                        title: 'Contact Us',
                                                
                    }}
                />
            </Drawer.Navigator>
            </View>
         );
    };


export default Main;
