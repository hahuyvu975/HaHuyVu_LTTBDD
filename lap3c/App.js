import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './views/Home'
import DetailsScreen from './views/Details'
import ColorScreen from './views/Colors';
import RedColorScreen from './views/ColorRed';
import BlueColorScreen from './views/ColorBlue';
import BlackColorScreen from './views/ColorBlack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
         <Stack.Screen name="Colors" component={ColorScreen} />
        <Stack.Screen name="ColorRed" component={RedColorScreen}/>
        <Stack.Screen name="ColorBlack" component={BlackColorScreen}/>
        <Stack.Screen name="ColorBlue" component={BlueColorScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}




