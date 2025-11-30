import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CategoryCard from '../components/CategoryCard';
import { COLORS, SIZES } from '../utils/constants';

const HomeScreen = ({ navigation }) => {
    const categories = [
        {
            title: 'Hotels',
            icon: '🏨',
            gradient: ['#667eea', '#764ba2'],
            screen: 'HotelsList',
        },
        {
            title: 'Salons',
            icon: '💇',
            gradient: ['#f093fb', '#f5576c'],
            screen: 'SalonsList',
        },
        {
            title: 'Restaurants',
            icon: '🍽️',
            gradient: ['#4facfe', '#00f2fe'],
            screen: 'RestaurantsList',
        },
        {
            title: 'Spas',
            icon: '💆',
            gradient: ['#43e97b', '#38f9d7'],
            screen: 'SpasList',
        },
    ];

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="light-content" />
            <LinearGradient
                colors={['#667eea', '#764ba2']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.header}
            >
                <Text style={styles.headerTitle}>Book Your Experience</Text>
                <Text style={styles.headerSubtitle}>Choose from our premium services</Text>
            </LinearGradient>

            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.grid}>
                    {categories.map((category, index) => (
                        <View key={index} style={styles.gridItem}>
                            <CategoryCard
                                title={category.title}
                                icon={category.icon}
                                gradient={category.gradient}
                                onPress={() => navigation.navigate(category.screen)}
                            />
                        </View>
                    ))}
                </View>

                <View style={styles.infoSection}>
                    <Text style={styles.infoTitle}>✨ Premium Services</Text>
                    <Text style={styles.infoText}>
                        Book hotels, salons, restaurants, and spas with just a few taps.
                        Enjoy seamless booking experience with instant confirmation.
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    header: {
        paddingTop: 20,
        paddingBottom: 30,
        paddingHorizontal: 20,
    },
    headerTitle: {
        fontSize: SIZES.h1,
        fontWeight: 'bold',
        color: COLORS.white,
        marginBottom: 8,
    },
    headerSubtitle: {
        fontSize: SIZES.h4,
        color: COLORS.white,
        opacity: 0.9,
    },
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 8,
    },
    gridItem: {
        width: '50%',
    },
    infoSection: {
        margin: 16,
        padding: 20,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.radius,
        elevation: 2,
        shadowColor: COLORS.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    infoTitle: {
        fontSize: SIZES.h3,
        fontWeight: 'bold',
        color: COLORS.black,
        marginBottom: 8,
    },
    infoText: {
        fontSize: SIZES.body,
        color: COLORS.gray,
        lineHeight: 22,
    },
});

export default HomeScreen;
