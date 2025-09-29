import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function TokenCard({ tokenNumber, service, estimatedTime }) {
  return (
    <LinearGradient
      colors={["#4f46e5", "#3b82f6"]}
      style={styles.card}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Text style={styles.service}>{service}</Text>
      <Text style={styles.token}>{tokenNumber}</Text>
      <Text style={styles.estimate}>Est. Wait: {estimatedTime} mins</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 25,
    borderRadius: 20,
    marginVertical: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 6,
  },
  service: { color: "#fff", fontSize: 18, fontWeight: "600", marginBottom: 5 },
  token: { color: "#fff", fontSize: 40, fontWeight: "bold" },
  estimate: { color: "#d1d5db", fontSize: 16, marginTop: 5 },
});
