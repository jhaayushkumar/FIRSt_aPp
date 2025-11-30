// screens/HomeScreen.js
import React from "react";
import { View, Text, StyleSheet, SectionList, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const servicesData = [
  {
    title: "Healthcare",
    data: [{ id: "1", name: "Hospital", waiting: 5 }],
  },
  {
    title: "Fitness & Beauty",
    data: [
      { id: "2", name: "Gym", waiting: 3 },
      { id: "3", name: "Salon", waiting: 2 },
    ],
  },
  {
    title: "Food & Dining",
    data: [{ id: "4", name: "Restaurant", waiting: 8 }],
  },
];

export default function HomeScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("BookToken", { service: item.name })}
    >
      <Ionicons name="ios-people" size={40} color="#4f46e5" />
      <View style={{ marginLeft: 15 }}>
        <Text style={styles.serviceName}>{item.name}</Text>
        <Text style={styles.waiting}>Current Queue: {item.waiting} people</Text>
      </View>
      <Text style={styles.bookNow}>Book &gt;</Text>
    </TouchableOpacity>
  );

  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={styles.sectionHeader}>{title}</Text>
  );

  return (
    <View style={styles.container}>
      <SectionList
        sections={servicesData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f3f4f6" },
  sectionHeader: { fontSize: 22, fontWeight: "bold", color: "#111827", marginTop: 20, marginBottom: 10 },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 5,
  },
  serviceName: { fontSize: 18, fontWeight: "bold", color: "#1f2937" },
  waiting: { color: "#746764ff", marginTop: 5 },
  bookNow: { marginLeft: "auto", color: "#4f46e5", fontWeight: "bold" },
});
