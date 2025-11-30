# Multi-Service Booking App

Ek complete booking app jismein aap **Hotels**, **Salons**, **Restaurants**, aur **Spas** book kar sakte ho!

## 🚀 Features

- 🏨 **Hotel Booking** - Different room types ke saath hotels book karo
- 💇 **Salon Appointments** - Beauty services aur haircuts book karo
- 🍽️ **Restaurant Reservations** - Table booking karo with special requests
- 💆 **Spa Treatments** - Relaxing spa treatments book karo
- 📋 **My Bookings** - Apne saare bookings ek jagah dekho aur cancel bhi karo
- 🎨 **Beautiful UI** - Modern design with gradients and animations

## 📱 How to Run

### Backend Setup

1. **MongoDB Install karo** (agar nahi hai toh):
   ```bash
   brew tap mongodb/brew
   brew install mongodb-community
   brew services start mongodb-community
   ```

2. **Backend dependencies install karo**:
   ```bash
   cd server
   npm install
   ```

3. **Sample data add karo database mein**:
   ```bash
   npm run seed
   ```

4. **Server start karo**:
   ```bash
   npm start
   ```
   
   Server chalega: `http://localhost:5000`

### Frontend Setup

1. **Frontend dependencies install karo**:
   ```bash
   npm install
   ```

2. **App start karo**:
   ```bash
   npm start
   ```

3. **App run karo**:
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan QR code with Expo Go app on your phone

## 🛠️ Tech Stack

### Frontend
- React Native
- Expo
- React Navigation
- Axios for API calls
- Linear Gradients for beautiful UI

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- Bcrypt for password hashing

## 📂 Project Structure

```
FIRStAPP/
├── src/
│   ├── screens/        # All app screens
│   ├── components/     # Reusable components
│   └── utils/          # API and constants
├── server/
│   ├── models/         # Database models
│   ├── controllers/    # Business logic
│   ├── routes/         # API routes
│   ├── config/         # Database config
│   └── data/           # Seed data
└── App.js             # Main app file
```

## 🎯 Features Details

### Hotels
- View all available hotels
- Check hotel details, amenities, and room types
- Book rooms with check-in/check-out dates
- Different pricing for different room types

### Salons
- Browse salon services
- See pricing and duration for each service
- Book appointments with preferred stylist
- Services include haircut, coloring, facial, etc.

### Restaurants
- Explore restaurants by cuisine
- View menu and pricing
- Book tables with guest count
- Add special requests (dietary, occasion)

### Spas
- Browse spa treatments
- Check treatment duration and pricing
- Book with preferred therapist
- Treatments include massage, aromatherapy, etc.

### My Bookings
- View all your bookings in one place
- See booking status (confirmed, pending, cancelled)
- Cancel bookings if needed
- Track booking history

## 🔑 API Endpoints

### Hotels
- `GET /api/hotels` - All hotels
- `GET /api/hotels/:id` - Hotel details
- `POST /api/hotels/:id/book` - Book hotel

### Salons
- `GET /api/salons` - All salons
- `GET /api/salons/:id` - Salon details
- `POST /api/salons/:id/book` - Book salon

### Restaurants
- `GET /api/restaurants` - All restaurants
- `GET /api/restaurants/:id` - Restaurant details
- `POST /api/restaurants/:id/book` - Book table

### Spas
- `GET /api/spas` - All spas
- `GET /api/spas/:id` - Spa details
- `POST /api/spas/:id/book` - Book spa

### Bookings
- `GET /api/bookings/user/:userId` - User bookings
- `DELETE /api/bookings/:id` - Cancel booking

### Auth
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user

## 💡 Tips

- Backend server ko pehle start karo, phir frontend
- MongoDB running hona chahiye
- API URL change karne ke liye: `src/utils/constants.js` mein update karo
- Sample data automatically seed ho jayega `npm run seed` se

## 🎨 UI Colors

- Primary: Purple gradient
- Hotels: Purple (#667eea - #764ba2)
- Salons: Pink (#f093fb - #f5576c)
- Restaurants: Blue (#4facfe - #00f2fe)
- Spas: Green (#43e97b - #38f9d7)

## 📝 Notes

- Yeh ek complete working app hai with backend aur database
- Saare features fully functional hain
- Beautiful, modern UI with gradients and smooth animations
- Easy to customize and extend

Enjoy booking! 🎉
