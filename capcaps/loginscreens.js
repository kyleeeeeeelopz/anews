import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');

  const handleLogin = async () => {
    if (username.trim()) {
      await AsyncStorage.setItem('loggedInUser', username);
      navigation.replace('Dashboard');
    } else {
      Alert.alert('Please enter a valid username');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>HerbaPedia</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        placeholderTextColor="#a5d6a7"
        onChangeText={setUsername}
      />
      <Button title="Login" color="#4CAF50" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1b5e20', justifyContent: 'center', padding: 20 },
  title: { fontSize: 32, color: '#c8e6c9', marginBottom: 40, textAlign: 'center' },
  input: {
    backgroundColor: '#33691e',
    borderRadius: 8,
    color: '#fff',
    padding: 12,
    marginBottom: 20,
    borderColor: '#81c784',
    borderWidth: 1,
  },
});
