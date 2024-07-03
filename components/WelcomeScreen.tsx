import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export const WelcomeScreen = () => {
    const [firstName, onChangeFirstName] = useState('');
    return (
        <ScrollView
            indicatorStyle="white"
            style={welcomeStyles.container}>
                <Text
                    style={welcomeStyles.headerText}>
                    Welcome to Little Lemon
                </Text>
                <Text
                    style={welcomeStyles.welcomeText}>
                    Little Lemon is a charming neigherhood bistro that serves simple food  and classic cocktails
                    in a lively but casual environment. We would love to hear more about your experience with us!
                </Text>
                <TextInput
                    style={welcomeStyles.input}
                    placeholder="First Name"
                    value={firstName}
                    onChangeText={onChangeFirstName}
                />

        </ScrollView>
    );
};

const welcomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    headerText: {
        fontSize: 30,
        padding: 40,
        color: '#EDEFEE',
        textAlign: 'center'
    },
    welcomeText: {
        fontSize: 25,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: '#EDEFEE',
        backgroundColor: '#EDEFEE',
    }
});