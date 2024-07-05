import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LittleLemonHeader } from './components/LittleLemonHeader';
import { LittleLemonFooter } from './components/LittleLemonFooter';
import { WelcomeScreen } from './Screens/WelcomeScreen';
import { LoginScreen } from './Screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MenuScreen } from './Screens/MenuScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <View style={styles.container}>
          <LittleLemonHeader />
          <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Menu" component={MenuScreen} />
          </Stack.Navigator>
        </View>
        <View style={styles.footerContainer}>
          <LittleLemonFooter />
        </View>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
});

