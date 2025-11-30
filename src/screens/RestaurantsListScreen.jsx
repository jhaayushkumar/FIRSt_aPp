import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import ServiceCard from '../components/ServiceCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { restaurantsAPI } from '../utils/api';
import { COLORS, SIZES } from '../utils/constants';

const RestaurantsListScreen = ({ navigation }) => {
    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchRestaurants();
    }, []);

    const fetchRestaurants = async () => {
        try {
            const mockRestaurants = [
                {
                    _id: '1',
                    name: 'Taj Fine Dining',
                    description: 'Authentic Indian cuisine in elegant ambiance',
                    price: 2500,
                    rating: 4.8,
                    images: ['https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500'],
                    location: 'Connaught Place, Delhi',
                    cuisine: ['Indian', 'Mughlai', 'Continental']
                },
                {
                    _id: '2',
                    name: 'The Italian Kitchen',
                    description: 'Fresh pasta and wood-fired pizzas',
                    price: 2000,
                    rating: 4.6,
                    images: ['https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500'],
                    location: 'Indiranagar, Bangalore',
                    cuisine: ['Italian', 'Mediterranean']
                },
                {
                    _id: '3',
                    name: 'Sushi Zen',
                    description: 'Premium Japanese sushi and sashimi',
                    price: 3000,
                    rating: 4.7,
                    images: ['https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=500'],
                    location: 'Powai, Mumbai',
                    cuisine: ['Japanese', 'Asian Fusion']
                },
            ];
            setRestaurants(mockRestaurants);
        } catch (error) {
            console.error('Error fetching restaurants:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <LoadingSpinner />;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>🍽️ Restaurants</Text>
                <Text style={styles.subtitle}>{restaurants.length} restaurants available</Text>
            </View>
            <FlatList
                data={restaurants}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <ServiceCard item={item} onPress={() => navigation.navigate('RestaurantDetails', { restaurant: item })} />
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

export default RestaurantsListScreen;
