import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    SafeAreaView,
} from 'react-native';
import CustomButton from '../components/CustomButton';
import { COLORS, SIZES } from '../utils/constants';

const HotelDetailsScreen = ({ route, navigation }) => {
    const { hotel } = route.params;

    const imageUrl = hotel.images && hotel.images[0] ? hotel.images[0] : 'https://via.placeholder.com/400';

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image source={{ uri: imageUrl }} style={styles.image} />

                <View style={styles.content}>
                    <View style={styles.header}>
                        <View style={styles.headerLeft}>
                            <Text style={styles.name}>{hotel.name}</Text>
                            <Text style={styles.location}>📍 {hotel.location}</Text>
                        </View>
                        <View style={styles.ratingBadge}>
                            <Text style={styles.rating}>⭐ {hotel.rating}</Text>
                        </View>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Description</Text>
                        <Text style={styles.description}>{hotel.description}</Text>
                    </View>

                    {hotel.amenities && hotel.amenities.length > 0 && (
                        <View style={styles.section}>
                            <Text style={styles.sectionTitle}>Amenities</Text>
                            <View style={styles.amenitiesContainer}>
                                {hotel.amenities.map((amenity, index) => (
                                    <View key={index} style={styles.amenityTag}>
                                        <Text style={styles.amenityText}>✓ {amenity}</Text>
                                    </View>
                                ))}
                            </View>
                        </View>
                    )}

                    {hotel.roomTypes && hotel.roomTypes.length > 0 && (
                        <View style={styles.section}>
                            <Text style={styles.sectionTitle}>Room Types</Text>
                            {hotel.roomTypes.map((room, index) => (
                                <View key={index} style={styles.roomCard}>
                                    <Text style={styles.roomType}>{room.type}</Text>
                                    <Text style={styles.roomPrice}>₹{room.price}/night</Text>
                                </View>
                            ))}
                        </View>
                    )}

                    <View style={styles.priceSection}>
                        <View>
                            <Text style={styles.priceLabel}>Starting from</Text>
                            <Text style={styles.price}>₹{hotel.price}</Text>
                            <Text style={styles.priceUnit}>per night</Text>
                        </View>
                        <CustomButton
                            title="Book Now"
                            gradient={COLORS.gradientPurple}
                            onPress={() => navigation.navigate('HotelBooking', { hotel })}
                            style={styles.bookButton}
                        />
                    </View>
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
    image: {
        width: '100%',
        height: 300,
        backgroundColor: COLORS.lightGray,
    },
    content: {
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 20,
    },
    headerLeft: {
        flex: 1,
    },
    name: {
        fontSize: SIZES.h2,
        fontWeight: 'bold',
        color: COLORS.black,
        marginBottom: 6,
    },
    location: {
        fontSize: SIZES.body,
        color: COLORS.gray,
    },
    ratingBadge: {
        backgroundColor: COLORS.primary,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
    },
    rating: {
        color: COLORS.white,
        fontSize: SIZES.body,
        fontWeight: 'bold',
    },
    section: {
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: SIZES.h3,
        fontWeight: 'bold',
        color: COLORS.black,
        marginBottom: 12,
    },
    description: {
        fontSize: SIZES.body,
        color: COLORS.gray,
        lineHeight: 22,
    },
    amenitiesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    amenityTag: {
        backgroundColor: COLORS.background,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
        marginRight: 8,
        marginBottom: 8,
    },
    amenityText: {
        fontSize: SIZES.small,
        color: COLORS.primary,
        fontWeight: '600',
    },
    roomCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        padding: 14,
        borderRadius: SIZES.radius,
        marginBottom: 8,
        elevation: 1,
    },
    roomType: {
        fontSize: SIZES.h4,
        fontWeight: '600',
        color: COLORS.black,
    },
    roomPrice: {
        fontSize: SIZES.h4,
        fontWeight: 'bold',
        color: COLORS.primary,
    },
    priceSection: {
        marginTop: 10,
        paddingTop: 20,
        borderTopWidth: 1,
        borderTopColor: COLORS.lightGray,
    },
    priceLabel: {
        fontSize: SIZES.small,
        color: COLORS.gray,
        marginBottom: 4,
    },
    price: {
        fontSize: 32,
        fontWeight: 'bold',
        color: COLORS.black,
    },
    priceUnit: {
        fontSize: SIZES.body,
        color: COLORS.gray,
        marginBottom: 16,
    },
    bookButton: {
        marginTop: 12,
    },
});

export default HotelDetailsScreen;
