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
            // Mock data for now
            const mockSalons = [
                {
                    _id: '1',
                    name: 'Glamour Studio',
                    description: 'Premium salon offering haircuts, styling, and beauty treatments',
                    price: 1500,
                    rating: 4.7,
                    images: ['https://images.unsplash.com/photo-1560066984-138dadb4c035?w=500'],
                    location: 'Bandra, Mumbai',
                    services: ['Haircut', 'Hair Color', 'Facial', 'Manicure', 'Pedicure']
                },
                {
                    _id: '2',
                    name: 'The Style Lounge',
                    description: 'Modern unisex salon with expert stylists',
                    price: 2000,
                    rating: 4.5,
                    images: ['https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=500'],
                    location: 'Koramangala, Bangalore',
                    services: ['Haircut', 'Styling', 'Spa', 'Makeup']
                },
                {
                    _id: '3',
                    name: 'Natural Beauty Spa',
                    description: 'Organic products and natural treatments',
                    price: 1800,
                    rating: 4.6,
                    images: ['https://images.unsplash.com/photo-1562322140-8baeececf3df?w=500'],
                    location: 'Gurgaon',
                    services: ['Facial', 'Hair Spa', 'Massage', 'Waxing']
                },
            ];

            setSalons(mockSalons);
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
