import { useState } from "react";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View} from "react-native";

export const WelcomeScreen = () => {
    const [firstName, onChangeFirstName] = useState('');
    return (
        <ScrollView style={welcomeStyles.container}>
        <View style={welcomeStyles.headerWrapper}>
          <Image
            style={welcomeStyles.image}
            source={require('../assets/img/littleLemonLogoSmall.png')}
            resizeMode="cover"
            accessible={true}
            accessibilityLabel={'Little Lemon Logo'}
          />
  
          <Text style={welcomeStyles.headerText}>Little Lemon</Text>
        </View>
        <Text style={welcomeStyles.regularText}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would love
          to hear your experience with us!
        </Text>
      </ScrollView>
    );
};

const welcomeStyles = StyleSheet.create({
    container: {
        flex: 1,
      },
      headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 10,
      },
      headerText: {
        paddingRight: 10,
        paddingLeft: 20,
        paddingTop: 30,
        paddingBottom: 10,
        fontSize: 30,
        color: '#EDEFEE',
        textAlign: 'center',
      },
      regularText: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
      },
      image: {
        width: 100,
        height: 100,
        borderRadius: 20,
      },
});