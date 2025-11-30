import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import Screens
import HomeScreen from './src/screens/HomeScreen';
import HotelsListScreen from './src/screens/HotelsListScreen';
import HotelDetailsScreen from './src/screens/HotelDetailsScreen';
import HotelBookingScreen from './src/screens/HotelBookingScreen';
import SalonsListScreen from './src/screens/SalonsListScreen';
import RestaurantsListScreen from './src/screens/RestaurantsListScreen';
import SpasListScreen from './src/screens/SpasListScreen';
import MyBookingsScreen from './src/screens/MyBookingsScreen';

import { COLORS } from './src/utils/constants';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Main Tab Navigator
function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: COLORS.primary,
                tabBarInactiveTintColor: COLORS.gray,
                tabBarStyle: {
                    paddingBottom: 8,
                    paddingTop: 8,
                    height: 60,
                },
                headerShown: false,
            }}
        >
            <Tab.Screen
                name="HomeTab"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => <span style={{ fontSize: 24 }}>🏠</span>,
                }}
            />
            <Tab.Screen
                name="BookingsTab"
                component={MyBookingsScreen}
                options={{
                    tabBarLabel: 'My Bookings',
                    tabBarIcon: ({ color }) => <span style={{ fontSize: 24 }}>📋</span>,
                }}
            />
        </Tab.Navigator>
    );
}

export default function App() {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: COLORS.primary,
                        },
                        headerTintColor: COLORS.white,
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                >
                    <Stack.Screen
                        name="Home"
                        component={TabNavigator}
                        options={{ headerShown: false }}
                    />

                    {/* Hotels Flow */}
                    <Stack.Screen
                        name="HotelsList"
                        component={HotelsListScreen}
                        options={{ title: 'Hotels' }}
                    />
                    <Stack.Screen
                        name="HotelDetails"
                        component={HotelDetailsScreen}
                        options={{ title: 'Hotel Details' }}
                    />
                    <Stack.Screen
                        name="HotelBooking"
                        component={HotelBookingScreen}
                        options={{ title: 'Book Hotel' }}
                    />

                    {/* Salons Flow */}
                    <Stack.Screen
                        name="SalonsList"
                        component={SalonsListScreen}
                        options={{ title: 'Salons' }}
                    />

                    {/* Restaurants Flow */}
                    <Stack.Screen
                        name="RestaurantsList"
                        component={RestaurantsListScreen}
                        options={{ title: 'Restaurants' }}
                    />

                    {/* Spas Flow */}
                    <Stack.Screen
                        name="SpasList"
                        component={SpasListScreen}
                        options={{ title: 'Spas' }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}