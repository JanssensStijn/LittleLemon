import {StyleSheet, View } from 'react-native';
import  {LittleLemonHeader } from './components/LittleLemonHeader';
import { LittleLemonFooter } from './components/LittleLemonFooter';
import { WelcomeScreen } from './Screens/WelcomeScreen';
import { MenuScreen } from './Screens/MenuScreen';
import { FeedbackForm } from './components/FeedbackForm';
import { LoginScreen } from './Screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      {/*<View
        style={styles.container}>
        <LittleLemonHeader />
      </View>*/}
      <Stack.Navigator 
        initialRouteName="Welcome"
        screenOptions={{headerStyle: {backgroundColor: '#FBDABB'} }}>
        <Stack.Screen
          name="Welcome" 
          component={WelcomeScreen}
          options={{title: 'Home'}}
        />
        <Stack.Screen 
          name="Menu" 
          component={MenuScreen}
        />
      </Stack.Navigator>
      {/*<View>
        <LittleLemonFooter />
      </View>*/}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
});