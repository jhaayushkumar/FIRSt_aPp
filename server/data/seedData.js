require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('../config/db');
const Hotel = require('../models/Hotel');
const Salon = require('../models/Salon');
const Restaurant = require('../models/Restaurant');
const Spa = require('../models/Spa');

// Sample data
const hotels = [
    {
        name: 'Grand Plaza Hotel',
        location: 'Mumbai, Maharashtra',
        rating: 4.5,
        price: 3500,
        amenities: ['WiFi', 'Pool', 'Gym', 'Restaurant', 'Room Service', 'Parking'],
        images: ['https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800'],
        description: 'Luxurious 5-star hotel in the heart of Mumbai with world-class amenities.',
        rooms: 150,
        availability: true,
        roomTypes: [
            { type: 'Standard', price: 3500, available: true },
            { type: 'Deluxe', price: 5500, available: true },
            { type: 'Suite', price: 8500, available: true }
        ]
    },
    {
        name: 'Royal Residency',
        location: 'Delhi, NCR',
        rating: 4.3,
        price: 4000,
        amenities: ['WiFi', 'Spa', 'Restaurant', 'Bar', 'Gym', 'Conference Room'],
        images: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800'],
        description: 'Premier hotel offering exceptional service and modern amenities in Delhi.',
        rooms: 120,
        availability: true,
        roomTypes: [
            { type: 'Standard', price: 4000, available: true },
            { type: 'Deluxe', price: 6000, available: true },
            { type: 'Presidential', price: 12000, available: true }
        ]
    },
    {
        name: 'Beach Paradise Resort',
        location: 'Goa',
        rating: 4.7,
        price: 5000,
        amenities: ['Beach Access', 'Pool', 'Water Sports', 'Restaurant', 'Spa', 'WiFi'],
        images: ['https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800'],
        description: 'Beachfront resort with stunning ocean views and water activities.',
        rooms: 80,
        availability: true,
        roomTypes: [
            { type: 'Standard', price: 5000, available: true },
            { type: 'Suite', price: 9000, available: true }
        ]
    }
];

const salons = [
    {
        name: 'Glamour Studio',
        location: 'Mumbai, Maharashtra',
        rating: 4.6,
        services: [
            { name: 'Haircut & Styling', price: 500, duration: 60 },
            { name: 'Hair Color', price: 2000, duration: 120 },
            { name: 'Facial', price: 1500, duration: 90 },
            { name: 'Manicure & Pedicure', price: 800, duration: 60 },
            { name: 'Makeup', price: 2500, duration: 90 }
        ],
        images: ['https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800'],
        description: 'Premium salon offering complete beauty services with expert stylists.',
        stylists: [
            { name: 'Priya Sharma', specialization: 'Hair Styling' },
            { name: 'Rahul Mehta', specialization: 'Hair Coloring' }
        ],
        availability: true
    },
    {
        name: 'Style Hub',
        location: 'Bangalore, Karnataka',
        rating: 4.4,
        services: [
            { name: 'Mens Haircut', price: 400, duration: 45 },
            { name: 'Beard Styling', price: 300, duration: 30 },
            { name: 'Hair Spa', price: 1200, duration: 75 },
            { name: 'Bridal Makeup', price: 5000, duration: 120 }
        ],
        images: ['https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800'],
        description: 'Modern unisex salon with experienced professionals.',
        stylists: [
            { name: 'Anjali Verma', specialization: 'Bridal Makeup' },
            { name: 'Vikram Singh', specialization: 'Mens Grooming' }
        ],
        availability: true
    }
];

const restaurants = [
    {
        name: 'Spice Garden',
        location: 'Mumbai, Maharashtra',
        cuisine: 'Indian',
        rating: 4.5,
        priceRange: '₹₹₹',
        images: ['https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800'],
        description: 'Fine dining restaurant serving authentic Indian cuisine.',
        menu: [
            { name: 'Butter Chicken', price: 450, category: 'Main Course' },
            { name: 'Paneer Tikka', price: 350, category: 'Starter' },
            { name: 'Biryani', price: 400, category: 'Main Course' },
            { name: 'Naan', price: 60, category: 'Bread' }
        ],
        tables: 25,
        availability: true
    },
    {
        name: 'The Italian Corner',
        location: 'Delhi, NCR',
        cuisine: 'Italian',
        rating: 4.6,
        priceRange: '₹₹₹₹',
        images: ['https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800'],
        description: 'Elegant Italian restaurant with authentic pasta and pizza.',
        menu: [
            { name: 'Margherita Pizza', price: 500, category: 'Pizza' },
            { name: 'Pasta Carbonara', price: 550, category: 'Pasta' },
            { name: 'Tiramisu', price: 300, category: 'Dessert' },
            { name: 'Bruschetta', price: 350, category: 'Starter' }
        ],
        tables: 20,
        availability: true
    },
    {
        name: 'Seafood Delights',
        location: 'Goa',
        cuisine: 'Seafood',
        rating: 4.7,
        priceRange: '₹₹₹',
        images: ['https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800'],
        description: 'Fresh seafood restaurant with ocean view.',
        menu: [
            { name: 'Grilled Fish', price: 600, category: 'Main Course' },
            { name: 'Prawn Curry', price: 550, category: 'Main Course' },
            { name: 'Crab Masala', price: 700, category: 'Main Course' },
            { name: 'Fish Fry', price: 400, category: 'Starter' }
        ],
        tables: 15,
        availability: true
    }
];

const spas = [
    {
        name: 'Serenity Spa',
        location: 'Mumbai, Maharashtra',
        rating: 4.8,
        treatments: [
            { name: 'Swedish Massage', price: 2500, duration: 60, description: 'Relaxing full body massage' },
            { name: 'Deep Tissue Massage', price: 3000, duration: 75, description: 'Intense therapeutic massage' },
            { name: 'Aromatherapy', price: 2800, duration: 60, description: 'Massage with essential oils' },
            { name: 'Hot Stone Therapy', price: 3500, duration: 90, description: 'Massage with heated stones' }
        ],
        images: ['https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800'],
        description: 'Luxury spa offering rejuvenating treatments and therapies.',
        therapists: [
            { name: 'Maya Patel', specialization: 'Swedish Massage' },
            { name: 'Ravi Kumar', specialization: 'Deep Tissue' }
        ],
        availability: true
    },
    {
        name: 'Wellness Center',
        location: 'Bangalore, Karnataka',
        rating: 4.5,
        treatments: [
            { name: 'Thai Massage', price: 2800, duration: 90, description: 'Traditional Thai stretching massage' },
            { name: 'Couple Massage', price: 5000, duration: 60, description: 'Relaxing massage for couples' },
            { name: 'Foot Reflexology', price: 1500, duration: 45, description: 'Therapeutic foot massage' },
            { name: 'Body Scrub', price: 2000, duration: 60, description: 'Exfoliating body treatment' }
        ],
        images: ['https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800'],
        description: 'Holistic wellness center for mind and body relaxation.',
        therapists: [
            { name: 'Neha Reddy', specialization: 'Thai Massage' },
            { name: 'Arjun Nair', specialization: 'Reflexology' }
        ],
        availability: true
    }
];

// Seed function
const seedDatabase = async () => {
    try {
        await connectDB();

        console.log('🗑️  Clearing existing data...');
        await Hotel.deleteMany();
        await Salon.deleteMany();
        await Restaurant.deleteMany();
        await Spa.deleteMany();

        console.log('🌱 Seeding hotels...');
        await Hotel.insertMany(hotels);
        console.log(`✅ ${hotels.length} hotels added`);

        console.log('🌱 Seeding salons...');
        await Salon.insertMany(salons);
        console.log(`✅ ${salons.length} salons added`);

        console.log('🌱 Seeding restaurants...');
        await Restaurant.insertMany(restaurants);
        console.log(`✅ ${restaurants.length} restaurants added`);

        console.log('🌱 Seeding spas...');
        await Spa.insertMany(spas);
        console.log(`✅ ${spas.length} spas added`);

        console.log('\n✨ Database seeded successfully!\n');
        process.exit(0);
    } catch (error) {
        console.error('❌ Error seeding database:', error);
        process.exit(1);
    }
};

// Run seeding
seedDatabase();
