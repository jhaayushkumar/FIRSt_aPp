import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import TokenCard from "../components/TokenCard";

export default function BookTokenScreen({ route, navigation }) {
  const { service } = route.params;
  const [tokenNumber, setTokenNumber] = useState(null);
  const [estimatedWait, setEstimatedWait] = useState(0);

  const bookToken = () => {
    const token = Math.floor(Math.random() * 100) + 1;
    const waitTime = Math.floor(Math.random() * 30) + 5;
    setTokenNumber(token);
    setEstimatedWait(waitTime);
  };

  const rescheduleToken = () => {
    Alert.alert("Reschedule", "Your token has been rescheduled to a later time.");
  };

  const transferToken = () => {
    Alert.alert("Transfer", "You can transfer your token to another person.");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Book Your Token - {service}</Text>
      {tokenNumber ? (
        <>
          <TokenCard tokenNumber={tokenNumber} service={service} estimatedTime={estimatedWait} />
          <TouchableOpacity style={styles.secondaryButton} onPress={rescheduleToken}>
            <Text style={styles.secondaryText}>Reschedule</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton} onPress={transferToken}>
            <Text style={styles.secondaryText}>Transfer Token</Text>
          </TouchableOpacity>
        </>
      ) : (
        <TouchableOpacity style={styles.button} onPress={bookToken}>
          <Text style={styles.buttonText}>Book Token</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f3f4f6", padding: 20 },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 30, color: "#1f2937", textAlign: "center" },
  button: { backgroundColor: "#4f46e5", padding: 15, borderRadius: 10, width: "80%", alignItems: "center" },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  secondaryButton: {
    marginTop: 15,
    padding: 12,
    borderRadius: 10,
    width: "60%",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#4f46e5",
  },
  secondaryText: { color: "#4f46e5", fontSize: 16, fontWeight: "bold" },
});
