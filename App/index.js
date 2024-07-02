// Filename: index.js
// Combined code from all files

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showNextLetter = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % alphabet.length);
  };

  const showPreviousLetter = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + alphabet.length) % alphabet.length);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Learn to Read!</Text>
      <View style={styles.letterContainer}>
        <TouchableOpacity onPress={showPreviousLetter} style={styles.arrowButton}>
          <Text style={styles.arrowText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.letter}>{alphabet[currentIndex]}</Text>
        <TouchableOpacity onPress={showNextLetter} style={styles.arrowButton}>
          <Text style={styles.arrowText}>→</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  letterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrowButton: {
    padding: 20,
  },
  arrowText: {
    fontSize: 48,
    color: '#FF6347',
  },
  letter: {
    fontSize: 120,
    fontWeight: 'bold',
    color: '#333333',
    marginHorizontal: 20,
  },
});

export default App;