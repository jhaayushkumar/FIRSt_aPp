# 🎯 Multi-Service Booking App

A beautiful React Native mobile application for booking hotels, salons, restaurants, and spa services - all in one place!

## ✨ Features

### 🏨 Multi-Service Platform
- **Hotels** - Browse and book luxury hotels and resorts
- **Salons** - Schedule appointments for haircuts, styling, and beauty treatments
- **Restaurants** - Reserve tables at finest dining establishments
- **Spas** - Book relaxing spa and wellness treatments

### 📱 User Experience
- **Beautiful UI** - Modern, clean interface with smooth animations
- **Easy Navigation** - Bottom tab navigation for quick access
- **Detailed Views** - Comprehensive service information with images
- **Smart Booking** - Intuitive booking forms with validation
- **My Bookings** - Track all your reservations in one place
- **Quick Actions** - Cancel bookings with a single tap

## 🛠️ Tech Stack

- **Framework:** React Native + Expo SDK 54
- **Navigation:** React Navigation (Stack + Bottom Tabs)
- **UI Components:** Custom components with React Native core
- **State Management:** React Hooks (useState, useEffect)
- **Styling:** StyleSheet API with custom design system
- **Images:** Remote images from Unsplash
- **Backend:** Mock data (ready for API integration)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Expo Go app (for testing on physical device)
- iOS Simulator or Android Emulator (optional)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/jhaayushkumar/FIRSt_aPp.git
cd FIRSt_aPp-1
```

2. **Install dependencies**
```bash
npm install
```

3. **Start Expo development server**
```bash
npx expo start
```

4. **Run the app**
- **iOS Simulator:** Press `i` in terminal
- **Android Emulator:** Press `a` in terminal
- **Physical Device:** Scan QR code with Expo Go app

## 📂 Project Structure

```
FIRSt_aPp-1/
├── App.js                      # Main app entry with navigation
├── src/
│   ├── components/            # Reusable UI components
│   │   ├── ServiceCard.jsx    # Service listing card
│   │   ├── BookingCard.jsx    # Booking display card
│   │   ├── CustomButton.jsx   # Styled button component
│   │   ├── LoadingSpinner.jsx # Loading indicator
│   │   └── CategoryCard.jsx   # Home category card
│   ├── screens/               # App screens
│   │   ├── HomeScreen.jsx     # Main landing screen
│   │   ├── HotelsListScreen.jsx
│   │   ├── HotelDetailsScreen.jsx
│   │   ├── HotelBookingScreen.jsx
│   │   ├── SalonsListScreen.jsx
│   │   ├── RestaurantsListScreen.jsx
│   │   ├── SpasListScreen.jsx
│   │   └── MyBookingsScreen.jsx
│   └── utils/                 # Utilities and constants
│       ├── constants.js       # Colors, sizes, API config
│       └── api.js            # API configuration
├── assets/                    # Images and icons
├── server/                    # Backend (Node.js + Express + MongoDB)
└── package.json              # Dependencies
```

## 🎨 Design System

The app uses a custom design system with:
- **Primary Color:** `#6C63FF` (Purple)
- **Secondary Color:** `#FF6584` (Pink)
- **Accent Color:** `#4ECDC4` (Teal)
- **Typography:** System fonts with defined size scale
- **Spacing:** Consistent 16px base unit
- **Shadows:** Subtle elevation for depth

## 📋 Current Features & Data

### Available Services

**Hotels (4 properties)**
- The Grand Plaza Hotel - ₹15,000/night
- Seaside Resort & Spa - ₹12,000/night
- Mountain View Lodge - ₹8,000/night
- Business Center Hotel - ₹9,000/night

**Salons (3 locations)**
- Glamour Studio - ₹1,500
- The Style Lounge - ₹2,000
- Natural Beauty Spa - ₹1,800

**Restaurants (3 venues)**
- Taj Fine Dining - ₹2,500/person
- The Italian Kitchen - ₹2,000/person
- Sushi Zen - ₹3,000/person

**Spas (3 centers)**
- Serenity Day Spa - ₹3,500
- Ayurvedic Wellness Center - ₹4,000
- The Healing Touch Spa - ₹3,000

### Sample Bookings
The app includes 3 sample bookings to demonstrate the My Bookings feature:
- Hotel reservation (confirmed)
- Salon appointment (confirmed)
- Restaurant reservation (pending)

## 🔄 Booking Flow

1. **Browse** → Select a service category from home
2. **Explore** → View list of available services with details
3. **Details** → Tap on service to see full information
4. **Book** → Fill booking form with your details
5. **Confirm** → Review and submit booking
6. **Success** → Get confirmation and return to home
7. **Manage** → View all bookings in "My Bookings" tab

## 🔌 Backend Integration (Optional)

The app is currently using mock data for demonstration. To integrate with the backend:

1. **Start MongoDB**
```bash
mongod
```

2. **Configure backend**
```bash
cd server
npm install
```

3. **Start server**
```bash
npm start
# Server runs on http://localhost:5000
```

4. **Update API URL**
   - Edit `src/utils/constants.js`
   - Change `API_URL` to your server IP
   - Replace `localhost` with machine IP for mobile testing

5. **Restore API calls**
   - Uncomment API calls in booking screens
   - Remove mock data from list screens

## 🐛 Bug Fixes & Improvements

Recent updates:
- ✅ Fixed React Native Text component errors in navigation
- ✅ Updated Expo to SDK 54 for compatibility
- ✅ Added mock data for all service categories
- ✅ Implemented complete booking flow without backend
- ✅ Fixed image data structure (image → images array)
- ✅ Added sample bookings to demonstrate My Bookings screen
- ✅ Removed API dependencies for easier testing

## 🚧 Future Enhancements

- [ ] User authentication (login/register)
- [ ] Real-time availability checking
- [ ] Payment gateway integration
- [ ] Push notifications for booking confirmations
- [ ] Reviews and ratings system
- [ ] Favorite services
- [ ] Search and filters
- [ ] Map integration for locations
- [ ] Dark mode support
- [ ] Multiple language support

## 📱 Screenshots

Screenshots will be added soon!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Ayush Kumar Jha**
- GitHub: [@jhaayushkumar](https://github.com/jhaayushkumar)

## 🙏 Acknowledgments

- Images from [Unsplash](https://unsplash.com)
- Icons and emojis from Unicode standard
- React Native and Expo communities

---

Made with ❤️ using React Native + Expo
