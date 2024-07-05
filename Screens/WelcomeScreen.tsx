import { useAppState, useDeviceOrientation } from "@react-native-community/hooks";
import { useState } from "react";
import { Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, View,
  useColorScheme, useWindowDimensions
} from "react-native";
import { NavigationProp } from '@react-navigation/native';


export const WelcomeScreen = ({navigation}: {navigation: NavigationProp<any>}) => {
    const { width, height, fontScale } = useWindowDimensions();
    const colorScheme = useColorScheme();

    


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
  
          <Text style={[welcomeStyles.headerText, 
            colorScheme === 'light' ? {color:'#333333'}: {color:'#EDEFEE'}
          ]}>Little Lemon</Text>
        </View>
        <Text style={[welcomeStyles.regularText, 
            colorScheme === 'light' ? {color:'#333333'}: {color:'#EDEFEE'}
          ]}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would love
          to hear your experience with us!
        </Text>
        <Pressable onPress={() => navigation.navigate('Menu')}> 
          <Text style={welcomeStyles.buttonText}>View Menu</Text> 
        </Pressable> 
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
        textAlign: 'center',
      },
      regularText: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        textAlign: 'center',
      },
      image: {
        width: 100,
        height: 100,
        borderRadius: 20,
      },
      buttonText: {
        fontSize: 24,
        textAlign: 'center',
        backgroundColor: '#FFD700',
        color: '#333333',
        padding: 10,
        margin: 10,
        borderRadius: 10,
      },
});