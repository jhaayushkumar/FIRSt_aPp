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
            // Mock bookings data - replace with API call when backend is ready
            const mockBookings = [
                {
                    _id: '1',
                    serviceName: 'The Grand Plaza Hotel',
                    serviceType: 'Hotel',
                    bookingDate: '2025-12-15',
                    checkIn: '2025-12-15',
                    checkOut: '2025-12-18',
                    guests: 2,
                    totalPrice: 45000,
                    status: 'confirmed',
                    userName: 'Guest User',
                    userEmail: 'guest@example.com',
                    location: 'Downtown, Mumbai'
                },
                {
                    _id: '2',
                    serviceName: 'Glamour Studio',
                    serviceType: 'Salon',
                    bookingDate: '2025-12-10',
                    appointmentTime: '3:00 PM',
                    services: ['Haircut', 'Hair Color'],
                    totalPrice: 2500,
                    status: 'confirmed',
                    userName: 'Guest User',
                    userEmail: 'guest@example.com',
                    location: 'Bandra, Mumbai'
                },
                {
                    _id: '3',
                    serviceName: 'Taj Fine Dining',
                    serviceType: 'Restaurant',
                    bookingDate: '2025-12-05',
                    bookingTime: '7:30 PM',
                    guests: 4,
                    totalPrice: 5000,
                    status: 'pending',
                    userName: 'Guest User',
                    userEmail: 'guest@example.com',
                    location: 'Connaught Place, Delhi'
                }
            ];

            setBookings(mockBookings);
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
                    onPress: () => {
                        // Remove booking from state (simulating cancellation)
                        setBookings(prevBookings =>
                            prevBookings.filter(booking => booking._id !== bookingId)
                        );
                        Alert.alert('Success', 'Booking cancelled successfully');
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
