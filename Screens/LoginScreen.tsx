import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
    <>
        <View style={loginStyles.container}>
            <Text
                style={loginStyles.headerText}>
                Welcome to Little Lemon
            </Text>
            {isLoggedIn && <>
                <Text
                    style={loginStyles.regularText}>
                    You are logged in!
                </Text>
                <Pressable
                    style={loginStyles.button}
                    onPress={() => setIsLoggedIn(!isLoggedIn)}>
                    <Text
                        style={loginStyles.buttonText}>
                        Logout
                    </Text>
                </Pressable>
            </>}
            {!isLoggedIn && <>
                <Text
                    style={loginStyles.regularText}>
                    Login to continue
                </Text>
                <TextInput
                    style={loginStyles.inputBox}
                    placeholder="email"
                    onChangeText={setEmail}
                    value={email}
                    keyboardType="email-address"
                />
                <TextInput
                    style={loginStyles.inputBox}
                    placeholder="password"
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry={true}
                />
                <Pressable
                    style={loginStyles.button}
                    onPress={() => setIsLoggedIn(!isLoggedIn)}>
                    <Text
                        style={loginStyles.buttonText}>
                        Login
                    </Text>
                </Pressable>
            </>}
        </View>
    </>
    );
}

const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerText: {
        padding: 40,
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
    inputBox: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: 'EDEFEE',
        backgroundColor: '#EDEFEE',
    },
    button: {
        fontSize: 22,
        padding: 10,
        marginVertical: 8,
        margin: 100,
        backgroundColor: '#EE9972',
        borderColor: '#EE9972',
        borderWidth: 2,
        borderRadius: 50,
    },
    buttonText: {
        color: 'black',
        textAlign: 'center',
        fontSize: 25,
    },
});