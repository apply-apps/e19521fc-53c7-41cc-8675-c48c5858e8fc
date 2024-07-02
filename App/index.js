// Filename: index.js
// Combined code from all files

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Learn to Read Letters</Text>
            <Alphabet />
        </SafeAreaView>
    );
};

const Alphabet = () => {
    const [currentLetter, setCurrentLetter] = useState(0);

    const nextLetter = () => {
        setCurrentLetter((prev) => (prev < letters.length - 1 ? prev + 1 : 0));
    };

    return (
        <View style={alphabetStyles.container}>
            <Text style={alphabetStyles.letter}>{letters[currentLetter]}</Text>
            <TouchableOpacity style={alphabetStyles.button} onPress={nextLetter}>
                <Text style={alphabetStyles.buttonText}>Next</Text>
            </TouchableOpacity>
        </View>
    );
};

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
    },
});

const alphabetStyles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    letter: {
        fontSize: 100,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    button: {
        backgroundColor: '#007BFF',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
    },
});

export default App;