import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, SIZES } from '../utils/constants';

const CategoryCard = ({ title, icon, gradient, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container} activeOpacity={0.8}>
            <LinearGradient
                colors={gradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.gradient}
            >
                <Text style={styles.icon}>{icon}</Text>
                <Text style={styles.title}>{title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 8,
        borderRadius: SIZES.radius * 1.5,
        elevation: 5,
        shadowColor: COLORS.black,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
    },
    gradient: {
        padding: 24,
        borderRadius: SIZES.radius * 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 160,
    },
    icon: {
        fontSize: 48,
        marginBottom: 12,
    },
    title: {
        color: COLORS.white,
        fontSize: SIZES.h3,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default CategoryCard;
