import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import ServiceCard from '../components/ServiceCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { spasAPI } from '../utils/api';
import { COLORS, SIZES } from '../utils/constants';

const SpasListScreen = ({ navigation }) => {
    const [spas, setSpas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchSpas();
    }, []);

    const fetchSpas = async () => {
        try {
            const response = await spasAPI.getAll();
            if (response.data.success) {
                setSpas(response.data.data);
            }
        } catch (error) {
            console.error('Error fetching spas:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <LoadingSpinner />;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>💆 Spas</Text>
                <Text style={styles.subtitle}>{spas.length} spas available</Text>
            </View>
            <FlatList
                data={spas}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <ServiceCard item={item} onPress={() => navigation.navigate('SpaDetails', { spa: item })} />
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

export default SpasListScreen;
