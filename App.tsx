import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LittleLemonHeader } from './components/LittleLemonHeader';
import { LittleLemonFooter } from './components/LittleLemonFooter';
import { WelcomeScreen } from './Screens/WelcomeScreen';
import { LoginScreen } from './Screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { MenuScreen } from './Screens/MenuScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
    

export default function App() {
  return (
    <>
      <NavigationContainer>
        <View style={styles.container}>
          <LittleLemonHeader />
          <Tab.Navigator 
            initialRouteName="Login"
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Welcome') {
                  iconName = focused
                    ? 'home'
                    : 'home-outline';
                } else if (route.name === 'Menu') {
                  iconName =  focused
                  ? 'list'
                  : 'list-outline';
                } else if (route.name === 'Login') {
                  iconName =  focused
                  ? 'person-circle'
                  : 'person-circle-outline';
                }
                return <Ionicons name={iconName as any} size={size} color={color} />;
              },
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'gray',
            }
          )}>
            <Tab.Screen name="Welcome" component={WelcomeScreen} options={{title:'Home', headerTitleAlign: 'center'}}/>
            <Tab.Screen name="Login" component={LoginScreen} options={{ headerTitleAlign: 'center' }}/>
            <Tab.Screen name="Menu" component={MenuScreen} options={{ headerTitleAlign: 'center' }}/>
          </Tab.Navigator>
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

