// Filename: index.js
// Combined code from all files
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export default function App() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextLetter = () => {
        setCurrentIndex((currentIndex + 1) % letters.length);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Learn to Read</Text>
            <View style={styles.letterContainer}>
                <Text style={styles.letter}>{letters[currentIndex]}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={nextLetter}>
                <Text style={styles.buttonText}>Next Letter</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    letterContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    },
    letter: {
        fontSize: 100,
        fontWeight: 'bold',
        color: '#333',
    },
    button: {
        backgroundColor: '#1E90FF',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
});