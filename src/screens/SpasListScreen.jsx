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
            const mockSpas = [
                {
                    _id: '1',
                    name: 'Serenity Day Spa',
                    description: 'Luxurious spa treatments for complete relaxation',
                    price: 3500,
                    rating: 4.9,
                    images: ['https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=500'],
                    location: 'Juhu, Mumbai',
                    treatments: ['Swedish Massage', 'Hot Stone', 'Aromatherapy', 'Body Scrub']
                },
                {
                    _id: '2',
                    name: 'Ayurvedic Wellness Center',
                    description: 'Traditional Ayurvedic treatments and therapies',
                    price: 4000,
                    rating: 4.8,
                    images: ['https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=500'],
                    location: 'Whitefield, Bangalore',
                    treatments: ['Abhyanga', 'Shirodhara', 'Panchakarma', 'Herbal Bath']
                },
                {
                    _id: '3',
                    name: 'The Healing Touch Spa',
                    description: 'Modern spa with range of therapeutic massages',
                    price: 3000,
                    rating: 4.7,
                    images: ['https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=500'],
                    location: 'Nehru Place, Delhi',
                    treatments: ['Deep Tissue', 'Thai Massage', 'Reflexology', 'Couples Massage']
                },
            ];
            setSpas(mockSpas);
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
