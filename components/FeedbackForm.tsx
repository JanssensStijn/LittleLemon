import { useState } from "react";
import { Button, ScrollView, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";

export const FeedbackForm = () => {
    const [firstName, onChangeFirstName] = useState(''); 
    const [lastName, onChangeLastName] = useState(''); 
    const [message, onChangeMessage] = useState(''); 

    return (
        <KeyboardAvoidingView
            style={feedbackStyles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <ScrollView keyboardDismissMode="on-drag"> 
                <Text style={feedbackStyles.headingSection}> 
                    How was your visit to Little Lemon? 
                </Text> 
                <Text style={feedbackStyles.infoSection}> 
                    Little Lemon is a charming neighborhood bistro that serves simple food 
                    and classic cocktails in a lively but casual environment. We would love 
                    to hear your experience with us! 
                </Text>
                <TextInput 
                    style={feedbackStyles.input} 
                    value={firstName} 
                    onChangeText={onChangeFirstName} 
                /> 
                <TextInput 
                    style={feedbackStyles.input} 
                    value={lastName} 
                    onChangeText={onChangeLastName} 
                /> 
                <TextInput 
                    style={feedbackStyles.messageInput} 
                    value={message} 
                    onChangeText={onChangeMessage}
                    multiline={true} 
                /> 
                <Button
                    title="Submit"
                    onPress={() => alert('Feedback submitted!')}
                />
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const feedbackStyles = StyleSheet.create({ 
    container: { 
        flex: 1, 
    }, 
    input: { 
        height: 40, 
        margin: 12, 
        borderWidth: 1, 
        padding: 10, 
        fontSize: 16, 
        borderColor: 'EDEFEE', 
        backgroundColor: '#F4CE14', 
    }, 
    messageInput: { 
        height: 100, 
        margin: 12, 
        borderWidth: 1, 
        padding: 10, 
        fontSize: 16, 
        backgroundColor: '#F4CE14', 
    }, 
    infoSection: { 
        fontSize: 24, 
        padding: 20, 
        marginVertical: 8, 
        color: '#EDEFEE', 
        textAlign: 'center', 
        backgroundColor: '#495E57', 
    }, 
    headingSection: { 
        fontSize: 28, 
        padding: 20, 
        marginVertical: 8, 
        color: '#EDEFEE', 
        textAlign: 'center', 
        backgroundColor: '#495E57', 
    }, 
}); 