import {StyleSheet, View } from 'react-native';
import  {LittleLemonHeader } from './components/LittleLemonHeader';
import { LittleLemonFooter } from './components/LittleLemonFooter';
import { WelcomeScreen } from './components/WelcomeScreen';
import { MenuItems } from './components/MenuItems';
import { FeedbackForm } from './components/FeedbackForm';

export default function App() {
  return (
    <>
      <View
        style={styles.container}>
        <LittleLemonHeader />
        <WelcomeScreen />
        {/*<MenuItems />*/}
        {/*<FeedbackForm/>*/}
      </View>
      <View>
        <LittleLemonFooter />
      </View>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
});