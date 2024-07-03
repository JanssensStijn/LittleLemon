import { ScrollView, StyleSheet, Text, View } from "react-native";

export const WelcomeScreen = () => {
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
        </ScrollView>
    );
};

const welcomeStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerText: {
        fontSize: 30,
        padding: 40,
        color: 'EDEFEE',
        textAlign: 'center'
    },
    welcomeText: {
        fontSize: 25,
        padding: 20,
        marginVertical: 8,
        color: 'EDEFEE',
        textAlign: 'center'
    },

});