import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, Alert } from 'react-native';
import BookingCard from '../components/BookingCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { bookingsAPI } from '../utils/api';
import { COLORS, SIZES } from '../utils/constants';

const MyBookingsScreen = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBookings();
    }, []);

    const fetchBookings = async () => {
        try {
            // Replace with actual user ID from authentication
            const response = await bookingsAPI.getUserBookings('guest_user');
            if (response.data.success) {
                setBookings(response.data.data);
            }
        } catch (error) {
            console.error('Error fetching bookings:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleCancelBooking = async (bookingId) => {
        Alert.alert(
            'Cancel Booking',
            'Are you sure you want to cancel this booking?',
            [
                { text: 'No', style: 'cancel' },
                {
                    text: 'Yes, Cancel',
                    style: 'destructive',
                    onPress: async () => {
                        try {
                            const response = await bookingsAPI.cancel(bookingId);
                            if (response.data.success) {
                                Alert.alert('Success', 'Booking cancelled successfully');
                                fetchBookings(); // Refresh the list
                            }
                        } catch (error) {
                            console.error('Error canceling booking:', error);
                            Alert.alert('Error', 'Failed to cancel booking');
                        }
                    },
                },
            ]
        );
    };

    if (loading) return <LoadingSpinner />;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>My Bookings</Text>
                <Text style={styles.subtitle}>{bookings.length} total bookings</Text>
            </View>

            {bookings.length === 0 ? (
                <View style={styles.emptyContainer}>
                    <Text style={styles.emptyText}>📋</Text>
                    <Text style={styles.emptyTitle}>No bookings yet</Text>
                    <Text style={styles.emptySubtitle}>Start exploring and book your first service!</Text>
                </View>
            ) : (
                <FlatList
                    data={bookings}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item }) => (
                        <BookingCard booking={item} onCancel={handleCancelBooking} />
                    )}
                    contentContainerStyle={styles.list}
                    showsVerticalScrollIndicator={false}
                />
            )}
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
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
    },
    emptyText: {
        fontSize: 64,
        marginBottom: 16,
    },
    emptyTitle: {
        fontSize: SIZES.h3,
        fontWeight: 'bold',
        color: COLORS.black,
        marginBottom: 8,
    },
    emptySubtitle: {
        fontSize: SIZES.body,
        color: COLORS.gray,
        textAlign: 'center',
    },
});

export default MyBookingsScreen;
