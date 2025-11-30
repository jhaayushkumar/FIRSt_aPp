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
            const response = await hotelsAPI.getAll();
            if (response.data.success) {
                setHotels(response.data.data);
            }
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
