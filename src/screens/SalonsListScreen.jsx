import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import ServiceCard from '../components/ServiceCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { salonsAPI } from '../utils/api';
import { COLORS, SIZES } from '../utils/constants';

const SalonsListScreen = ({ navigation }) => {
    const [salons, setSalons] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchSalons();
    }, []);

    const fetchSalons = async () => {
        try {
            const response = await salonsAPI.getAll();
            if (response.data.success) {
                setSalons(response.data.data);
            }
        } catch (error) {
            console.error('Error fetching salons:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <LoadingSpinner />;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>💇 Salons</Text>
                <Text style={styles.subtitle}>{salons.length} salons available</Text>
            </View>
            <FlatList
                data={salons}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <ServiceCard item={item} onPress={() => navigation.navigate('SalonDetails', { salon: item })} />
                )}
                contentContainerStyle={styles.list}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: COLORS.background },
    header: { padding: 20, backgroundColor: COLORS.white, borderBottomWidth: 1, borderBottomColor: COLORS.lightGray },
    title: { fontSize: SIZES.h2, fontWeight: 'bold', color: COLORS.black, marginBottom: 4 },
    subtitle: { fontSize: SIZES.body, color: COLORS.gray },
    list: { paddingVertical: 8 },
});

export default SalonsListScreen;
