// RequestScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, SafeAreaView } from 'react-native';

const RequestScreen = () => {
  const [list, setList] = useState('');
  const [cost, setCost] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>POST YOUR REQUEST</Text>

      <Text style={styles.label}>ENTER LIST</Text>
      <TextInput
        style={styles.input}
        placeholder="Type your request list"
        value={list}
        onChangeText={setList}
        multiline
      />

      <Text style={styles.label}>TOTAL COSTS</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter total cost"
        value={cost}
        onChangeText={setCost}
        keyboardType="numeric"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 30,
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
    marginTop: 20,
    color: '#444',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#f1edf2',
    padding: 12,
    borderRadius: 6,
    fontSize: 16,
  },
});

export default RequestScreen;










