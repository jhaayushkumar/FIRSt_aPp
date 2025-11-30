import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from '../utils/constants';

const BookingCard = ({ booking, onCancel }) => {
    const getStatusColor = (status) => {
        switch (status) {
            case 'confirmed':
                return COLORS.success;
            case 'pending':
                return COLORS.warning;
            case 'cancelled':
                return COLORS.error;
            case 'completed':
                return COLORS.gray;
            default:
                return COLORS.gray;
        }
    };

    const getServiceIcon = (type) => {
        switch (type) {
            case 'hotel':
                return '🏨';
            case 'salon':
                return '💇';
            case 'restaurant':
                return '🍽️';
            case 'spa':
                return '💆';
            default:
                return '📋';
        }
    };

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.icon}>{getServiceIcon(booking.serviceType)}</Text>
                <View style={styles.headerText}>
                    <Text style={styles.serviceName} numberOfLines={1}>
                        {booking.serviceName}
                    </Text>
                    <Text style={styles.date}>{formatDate(booking.bookingDate)}</Text>
                </View>
                <View style={[styles.statusBadge, { backgroundColor: getStatusColor(booking.status) }]}>
                    <Text style={styles.statusText}>{booking.status}</Text>
                </View>
            </View>

            <View style={styles.divider} />

            <View style={styles.details}>
                <Text style={styles.detailText}>Booking ID: {booking._id.substring(0, 8)}</Text>
                <Text style={styles.price}>₹{booking.totalPrice}</Text>
            </View>

            {booking.status === 'confirmed' && onCancel && (
                <TouchableOpacity onPress={() => onCancel(booking._id)} style={styles.cancelButton}>
                    <Text style={styles.cancelText}>Cancel Booking</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        borderRadius: SIZES.radius,
        padding: 16,
        marginHorizontal: 16,
        marginVertical: 8,
        elevation: 2,
        shadowColor: COLORS.black,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        fontSize: 32,
        marginRight: 12,
    },
    headerText: {
        flex: 1,
    },
    serviceName: {
        fontSize: SIZES.h4,
        fontWeight: 'bold',
        color: COLORS.black,
        marginBottom: 4,
    },
    date: {
        fontSize: SIZES.small,
        color: COLORS.gray,
    },
    statusBadge: {
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
    },
    statusText: {
        color: COLORS.white,
        fontSize: SIZES.small,
        fontWeight: '600',
        textTransform: 'capitalize',
    },
    divider: {
        height: 1,
        backgroundColor: COLORS.lightGray,
        marginVertical: 12,
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    detailText: {
        fontSize: SIZES.small,
        color: COLORS.gray,
    },
    price: {
        fontSize: SIZES.h3,
        fontWeight: 'bold',
        color: COLORS.primary,
    },
    cancelButton: {
        marginTop: 12,
        padding: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: COLORS.error,
        alignItems: 'center',
    },
    cancelText: {
        color: COLORS.error,
        fontSize: SIZES.body,
        fontWeight: '600',
    },
});

export default BookingCard;
