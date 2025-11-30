import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, SIZES } from '../utils/constants';

const CustomButton = ({ title, onPress, gradient = COLORS.gradientPurple, style }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, style]} activeOpacity={0.8}>
            <LinearGradient
                colors={gradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.gradient}
            >
                <Text style={styles.title}>{title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: SIZES.radius,
        overflow: 'hidden',
        elevation: 3,
        shadowColor: COLORS.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    gradient: {
        paddingVertical: 14,
        paddingHorizontal: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: COLORS.white,
        fontSize: SIZES.h4,
        fontWeight: 'bold',
    },
});

export default CustomButton;
