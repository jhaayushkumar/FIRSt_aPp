import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import ServiceCard from '../components/ServiceCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { hotelsAPI } from '../utils/api';
import { COLORS, SIZES } from '../utils/constants';

const HotelsListScreen = ({ navigation }) => {
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchHotels();
    }, []);

    const fetchHotels = async () => {
        try {
            // Mock data for now (replace with API call when backend is ready)
            const mockHotels = [
                {
                    _id: '1',
                    name: 'The Grand Plaza Hotel',
                    description: 'Luxury 5-star hotel in the heart of the city with world-class amenities',
                    price: 15000,
                    rating: 4.8,
                    images: ['https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500'],
                    location: 'Downtown, Mumbai',
                    amenities: ['WiFi', 'Pool', 'Spa', 'Gym', 'Restaurant']
                },
                {
                    _id: '2',
                    name: 'Seaside Resort & Spa',
                    description: 'Beautiful beachfront resort with stunning ocean views',
                    price: 12000,
                    rating: 4.6,
                    images: ['https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500'],
                    location: 'Goa Beach',
                    amenities: ['Beach Access', 'Pool', 'Restaurant', 'Bar']
                },
                {
                    _id: '3',
                    name: 'Mountain View Lodge',
                    description: 'Cozy mountain retreat perfect for nature lovers',
                    price: 8000,
                    rating: 4.5,
                    images: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500'],
                    location: 'Manali, HP',
                    amenities: ['WiFi', 'Parking', 'Fireplace', 'Restaurant']
                },
                {
                    _id: '4',
                    name: 'Business Center Hotel',
                    description: 'Modern hotel ideal for business travelers',
                    price: 9000,
                    rating: 4.4,
                    images: ['https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500'],
                    location: 'Cyber City, Bangalore',
                    amenities: ['WiFi', 'Meeting Rooms', 'Gym', 'Restaurant']
                },
            ];

            setHotels(mockHotels);
        } catch (error) {
            console.error('Error fetching hotels:', error);
            alert('Failed to load hotels. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <LoadingSpinner />;
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>🏨 Hotels</Text>
                <Text style={styles.subtitle}>{hotels.length} properties available</Text>
            </View>

            <FlatList
                data={hotels}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <ServiceCard
                        item={item}
                        onPress={() => navigation.navigate('HotelDetails', { hotel: item })}
                    />
                )}
                contentContainerStyle={styles.list}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    header: {
        padding: 20,
        backgroundColor: COLORS.white,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.lightGray,
    },
    title: {
        fontSize: SIZES.h2,
        fontWeight: 'bold',
        color: COLORS.black,
        marginBottom: 4,
    },
    subtitle: {
        fontSize: SIZES.body,
        color: COLORS.gray,
    },
    list: {
        paddingVertical: 8,
    },
});

export default HotelsListScreen;
