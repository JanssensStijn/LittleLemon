import { StyleSheet, Text, View } from "react-native";

export const LittleLemonHeader = () => {
    return (
        <View 
            style={headerStyle.container}>
            <Text 
                style={headerStyle.headerText}>
                Little Lemon
            </Text>
        </View>
    );
};

const headerStyle = StyleSheet.create({
    container: {
        flex: 0.15,
        backgroundColor: '#EE9972',
    },
    headerText: {
        paddingTop: 25,
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
    },
});