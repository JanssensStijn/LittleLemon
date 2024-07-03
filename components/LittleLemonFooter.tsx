import { StyleSheet, Text, View } from "react-native";

export const LittleLemonFooter = () => {
    return (
        <View
            style={footerStyles.container}>
            <Text
                style={footerStyles.footerText}>
                All rights reserved by Little Lemon, 2024
            </Text>
        </View>
    );
};

const footerStyles = StyleSheet.create({
    container: {
        backgroundColor: '#EE9972',
    },
    footerText: {
        fontSize: 18,
        fontStyle: 'italic',
        color: 'black',
        textAlign: 'center',
    },
});