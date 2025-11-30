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
            const response = await restaurantsAPI.getAll();
            if (response.data.success) {
                setRestaurants(response.data.data);
            }
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
