import { useState } from "react";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View,
  useColorScheme
} from "react-native";

export const WelcomeScreen = () => {
    var colorScheme = useColorScheme();

    return (
      <ScrollView style={[welcomeStyles.container, 
        colorScheme === 'light' ? {backgroundColor:'#fff'}: {backgroundColor:'#333333'}
        ]}>
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
        <Text style={welcomeStyles.regularText}>Color scheme: {colorScheme}</Text>
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