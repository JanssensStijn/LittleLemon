import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
    <>
        <View style={loginStyles.container}>
            <Text
                style={loginStyles.headerText}>
                Welcome to Little Lemon
            </Text>
            <Text
                style={loginStyles.subText}>
                Login to continue
            </Text>
            <TextInput
                style={loginStyles.input}
                placeholder="email"
                onChangeText={setEmail}
                value={email}
                keyboardType="email-address"
            />
            <TextInput
                style={loginStyles.input}
                placeholder="password"
                onChangeText={setPassword}
                value={password}
                secureTextEntry={true}
            />
        </View>
    </>
    );
}

const loginStyles = StyleSheet.create({
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
    subText: {
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