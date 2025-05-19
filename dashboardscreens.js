import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HerbCard from '../components/HerbCard';

const herbs = [
  { name: '🌿 Tulsi (Holy Basil)', desc: 'Boosts immunity, reduces stress, supports respiratory health.' },
  { name: '🌼 Chamomile', desc: 'Promotes sleep, relaxation, mild anti-inflammatory.' },
  { name: '🧄 Garlic', desc: 'Lowers blood pressure, boosts immunity.' },
  { name: '🌱 Ginger', desc: 'Relieves nausea, aids digestion, reduces inflammation.' },
  { name: '🍃 Peppermint', desc: 'Soothes headaches, aids digestion.' },
  { name: '✨ Turmeric', desc: 'Antioxidant-rich, powerful anti-inflammatory.' },
  { name: '🌾 Ashwagandha', desc: 'Reduces anxiety, supports mental clarity.' },
  { name: '🌸 Lavender', desc: 'Calms the mind, aids sleep.' },
];

export default function DashboardScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('loggedInUser').then((user) => {
      if (!user) navigation.replace('Login');
      else setUsername(user);
    });
  }, []);

  const logout = async () => {
    await AsyncStorage.removeItem('loggedInUser');
    navigation.replace('Login');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Welcome to HerbaPedia</Text>
      <Text style={styles.subtitle}>Hello, {username}! Here's your personalized dashboard of herbal knowledge.</Text>

      <TouchableOpacity style={styles.button} onPress={() => setShowProfile(!showProfile)}>
        <Text style={styles.buttonText}>Toggle Profile</Text>
      </TouchableOpacity>

      {showProfile && (
        <View style={styles.profile}>
          <Text style={styles.profileText}>👤 Username: {username}</Text>
          <Text style={styles.profileText}>📅 Member Since: April 2025</Text>
          <Text style={styles.profileText}>🌱 Role: HerbaPedia Enthusiast</Text>
        </View>
      )}

      {herbs.map((herb, idx) => (
        <HerbCard key={idx} name={herb.name} desc={herb.desc} />
      ))}

      <TouchableOpacity style={[styles.button, { marginTop: 20 }]} onPress={logout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1b5e20', padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#c8e6c9', textAlign: 'center', marginBottom: 10 },
  subtitle: { fontSize: 14, color: '#a5d6a7', textAlign: 'center', marginBottom: 20 },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: { color: '#fff', fontSize: 16 },
  profile: {
    backgroundColor: '#2e7d32',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
  },
  profileText: { color: '#dcedc8', marginBottom: 5 },
});
