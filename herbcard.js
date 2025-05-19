import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HerbCard({ name, desc }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.desc}>{desc}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#33691e',
    borderColor: '#81c784',
    borderWidth: 1,
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
  },
  name: {
    fontSize: 16,
    color: '#a5d6a7',
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 13,
    color: '#dcedc8',
    marginTop: 5,
  },
});
