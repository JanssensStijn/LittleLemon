import {StyleSheet, View } from 'react-native';
import  {LittleLemonHeader } from './components/LittleLemonHeader';
import { LittleLemonFooter } from './components/LittleLemonFooter';
import { WelcomeScreen } from './components/WelcomeScreen';
import { MenuItems } from './components/MenuItems';
import { FeedbackForm } from './components/FeedbackForm';
import { LoginScreen } from './components/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <View
        style={styles.container}>
        <LittleLemonHeader />
        <WelcomeScreen />
        {/*<MenuItems />*/}
        {/*<FeedbackForm/>*/}
        {/*<LoginScreen />*/}
      </View>
      <View>
        <LittleLemonFooter />
      </View>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
});