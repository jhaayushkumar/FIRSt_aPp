import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TextInput,
    SafeAreaView,
    Alert,
    TouchableOpacity,
} from 'react-native';
import CustomButton from '../components/CustomButton';
import { hotelsAPI } from '../utils/api';
import { COLORS, SIZES } from '../utils/constants';

const HotelBookingScreen = ({ route, navigation }) => {
    const { hotel } = route.params;

    const [formData, setFormData] = useState({
        userName: '',
        userEmail: '',
        checkIn: '',
        checkOut: '',
        guests: '2',
        roomType: hotel.roomTypes && hotel.roomTypes[0] ? hotel.roomTypes[0].type : 'Standard',
    });

    const [loading, setLoading] = useState(false);

    const handleBooking = async () => {
        // Validation
        if (!formData.userName || !formData.userEmail || !formData.checkIn || !formData.checkOut) {
            Alert.alert('Error', 'Please fill all required fields');
            return;
        }

        setLoading(true);

        try {
            const bookingData = {
                userId: 'guest_user', // Replace with actual user ID from auth
                userName: formData.userName,
                userEmail: formData.userEmail,
                bookingDate: new Date(formData.checkIn),
                checkIn: formData.checkIn,
                checkOut: formData.checkOut,
                guests: parseInt(formData.guests),
                roomType: formData.roomType,
                totalPrice: hotel.price,
            };

            const response = await hotelsAPI.book(hotel._id, bookingData);

            if (response.data.success) {
                Alert.alert(
                    'Success!',
                    'Your hotel has been booked successfully!',
                    [
                        {
                            text: 'OK',
                            onPress: () => navigation.navigate('Home'),
                        },
                    ]
                );
            }
        } catch (error) {
            console.error('Booking error:', error);
            Alert.alert('Error', 'Failed to book hotel. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <Text style={styles.title}>Complete Your Booking</Text>
                    <Text style={styles.hotelName}>{hotel.name}</Text>
                </View>

                <View style={styles.form}>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Full Name *</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your name"
                            value={formData.userName}
                            onChangeText={(text) => setFormData({ ...formData, userName: text })}
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Email *</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your email"
                            keyboardType="email-address"
                            value={formData.userEmail}
                            onChangeText={(text) => setFormData({ ...formData, userEmail: text })}
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Check-in Date *</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="YYYY-MM-DD"
                            value={formData.checkIn}
                            onChangeText={(text) => setFormData({ ...formData, checkIn: text })}
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Check-out Date *</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="YYYY-MM-DD"
                            value={formData.checkOut}
                            onChangeText={(text) => setFormData({ ...formData, checkOut: text })}
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Number of Guests</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="2"
                            keyboardType="number-pad"
                            value={formData.guests}
                            onChangeText={(text) => setFormData({ ...formData, guests: text })}
                        />
                    </View>

                    {hotel.roomTypes && hotel.roomTypes.length > 0 && (
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Room Type</Text>
                            <View style={styles.roomTypesContainer}>
                                {hotel.roomTypes.map((room, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        style={[
                                            styles.roomTypeButton,
                                            formData.roomType === room.type && styles.roomTypeButtonActive,
                                        ]}
                                        onPress={() => setFormData({ ...formData, roomType: room.type })}
                                    >
                                        <Text
                                            style={[
                                                styles.roomTypeText,
                                                formData.roomType === room.type && styles.roomTypeTextActive,
                                            ]}
                                        >
                                            {room.type}
                                        </Text>
                                        <Text
                                            style={[
                                                styles.roomTypePrice,
                                                formData.roomType === room.type && styles.roomTypePriceActive,
                                            ]}
                                        >
                                            ₹{room.price}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>
                    )}

                    <View style={styles.totalSection}>
                        <Text style={styles.totalLabel}>Total Amount</Text>
                        <Text style={styles.totalPrice}>₹{hotel.price}</Text>
                    </View>

                    <CustomButton
                        title={loading ? 'Booking...' : 'Confirm Booking'}
                        gradient={COLORS.gradientPurple}
                        onPress={handleBooking}
                        style={styles.bookButton}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    scrollView: {
        flex: 1,
    },
    header: {
        backgroundColor: COLORS.white,
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.lightGray,
    },
    title: {
        fontSize: SIZES.h3,
        fontWeight: 'bold',
        color: COLORS.black,
        marginBottom: 6,
    },
    hotelName: {
        fontSize: SIZES.body,
        color: COLORS.primary,
        fontWeight: '600',
    },
    form: {
        padding: 20,
    },
    inputGroup: {
        marginBottom: 20,
    },
    label: {
        fontSize: SIZES.body,
        fontWeight: '600',
        color: COLORS.black,
        marginBottom: 8,
    },
    input: {
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.lightGray,
        borderRadius: SIZES.radius,
        padding: 14,
        fontSize: SIZES.body,
        color: COLORS.black,
    },
    roomTypesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 8,
    },
    roomTypeButton: {
        backgroundColor: COLORS.white,
        borderWidth: 1.5,
        borderColor: COLORS.lightGray,
        borderRadius: SIZES.radius,
        padding: 12,
        marginRight: 8,
        marginBottom: 8,
        minWidth: 100,
    },
    roomTypeButtonActive: {
        borderColor: COLORS.primary,
        backgroundColor: COLORS.primary + '10',
    },
    roomTypeText: {
        fontSize: SIZES.body,
        fontWeight: '600',
        color: COLORS.gray,
        marginBottom: 4,
    },
    roomTypeTextActive: {
        color: COLORS.primary,
    },
    roomTypePrice: {
        fontSize: SIZES.small,
        color: COLORS.gray,
    },
    roomTypePriceActive: {
        color: COLORS.primary,
        fontWeight: 'bold',
    },
    totalSection: {
        backgroundColor: COLORS.white,
        padding: 16,
        borderRadius: SIZES.radius,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    totalLabel: {
        fontSize: SIZES.h4,
        fontWeight: '600',
        color: COLORS.black,
    },
    totalPrice: {
        fontSize: SIZES.h2,
        fontWeight: 'bold',
        color: COLORS.primary,
    },
    bookButton: {
        marginTop: 10,
    },
});

export default HotelBookingScreen;
