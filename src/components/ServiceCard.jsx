import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';
import { COLORS, SIZES } from '../utils/constants';

const ServiceCard = ({ item, onPress }) => {
    const imageUrl = item.images && item.images[0] ? item.images[0] : 'https://via.placeholder.com/400';

    return (
        <TouchableOpacity onPress={onPress} style={styles.container} activeOpacity={0.7}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.name} numberOfLines={1}>{item.name}</Text>
                <Text style={styles.location} numberOfLines={1}>📍 {item.location}</Text>

                <View style={styles.footer}>
                    <View style={styles.ratingContainer}>
                        <Text style={styles.rating}>⭐ {item.rating}</Text>
                    </View>
                    {item.price && (
                        <Text style={styles.price}>₹{item.price}</Text>
                    )}
                    {item.priceRange && (
                        <Text style={styles.priceRange}>{item.priceRange}</Text>
                    )}
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        borderRadius: SIZES.radius,
        marginHorizontal: 16,
        marginVertical: 8,
        elevation: 3,
        shadowColor: COLORS.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 180,
        backgroundColor: COLORS.lightGray,
    },
    content: {
        padding: 12,
    },
    name: {
        fontSize: SIZES.h4,
        fontWeight: 'bold',
        color: COLORS.black,
        marginBottom: 4,
    },
    location: {
        fontSize: SIZES.small,
        color: COLORS.gray,
        marginBottom: 8,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    ratingContainer: {
        backgroundColor: COLORS.background,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
    },
    rating: {
        fontSize: SIZES.small,
        fontWeight: '600',
    },
    price: {
        fontSize: SIZES.h4,
        fontWeight: 'bold',
        color: COLORS.primary,
    },
    priceRange: {
        fontSize: SIZES.h4,
        fontWeight: 'bold',
        color: COLORS.success,
    },
});

export default ServiceCard;
