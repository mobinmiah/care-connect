# 🏥 CareConnect - Caregiver Platform

A modern, responsive web application connecting families with trusted caregivers. Built with Next.js 14, React 18, and Tailwind CSS.

## 🌐 Live Demo

**[View Live Demo](https://care-connect-red.vercel.app)**

## ✨ Features

- 🏠 **Landing Page** - Hero section, services showcase, top caregivers, how it works, and FAQ
- 👥 **Caregiver Listings** - Browse all caregivers with search and skill-based filtering
- 👤 **Caregiver Profiles** - Detailed profiles with bio, skills, ratings, and reviews
- 📝 **Signup Form** - Interactive caregiver registration with skill selection
- 📅 **Bookings Management** - View upcoming and past bookings
- 👨‍💼 **User Profile** - Profile management and settings
- 📱 **Mobile Navigation** - Bottom navigation bar for mobile devices
- 🎨 **Responsive Design** - Mobile-first approach with Tailwind CSS
- 🔍 **Search & Filter** - Find caregivers by name, location, or skills
- ⭐ **Ratings & Reviews** - Display caregiver ratings and client feedback

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **UI Library:** [React 18](https://react.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Google Material Symbols](https://fonts.google.com/icons)
- **Font:** [Inter](https://fonts.google.com/specimen/Inter)
- **Deployment:** [Vercel](https://vercel.com/)

## 📁 Project Structure

```
care-giver/
├── src/
│   ├── app/
│   │   ├── bookings/          # Bookings page
│   │   ├── caregivers/        # Caregiver listing & profiles
│   │   │   └── [id]/          # Dynamic caregiver profile
│   │   ├── profile/           # User profile page
│   │   ├── signup/            # Caregiver signup form
│   │   ├── globals.css        # Global styles
│   │   ├── layout.jsx         # Root layout
│   │   └── page.jsx           # Home page
│   ├── components/
│   │   ├── CaregiverCard.jsx  # Caregiver card component
│   │   ├── Footer.jsx         # Footer component
│   │   ├── Header.jsx         # Header/navigation
│   │   ├── MobileNav.jsx      # Mobile bottom navigation
│   │   └── ServiceCard.jsx    # Service card component
│   └── data/
│       └── caregivers.js      # Caregiver data & services
├── public/                    # Static assets
├── .gitignore
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd care-giver
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Design Features

### Color Palette
- **Primary:** `#13ecec` (Cyan)
- **Background Light:** `#f6f8f8`
- **Background Dark:** `#102222`

### Typography
- **Font Family:** Inter (Google Fonts)
- **Icons:** Material Symbols Outlined

### Key Components

#### Header
- Sticky navigation with logo and CTA button
- Backdrop blur effect for modern look

#### Hero Section
- Full-width background image with gradient overlay
- Call-to-action buttons for finding caregivers and signing up

#### Services Section
- Grid layout showcasing 6 specialized services
- Icon-based cards with hover effects

#### Caregiver Cards
- Profile image, name, role, experience
- Star ratings and location
- View profile button

#### Mobile Navigation
- Fixed bottom navigation bar
- Active state indicators
- Icon-based navigation

## 🔍 Pages Overview

### Home (`/`)
- Hero section with CTA
- Services showcase
- Top-rated caregivers
- How it works timeline
- FAQ section
- Join caregiver CTA

### Caregivers (`/caregivers`)
- Search bar for name/location
- Skill-based filter chips
- List of all caregivers
- Results count

### Caregiver Profile (`/caregivers/[id]`)
- Profile header with image and rating
- About section
- Skills display
- Hourly rate
- Reviews section
- Book now button

### Signup (`/signup`)
- Full name and email inputs
- Multi-select skill chips
- Years of experience input
- Form validation
- Responsive mobile design

### Bookings (`/bookings`)
- Upcoming and completed bookings
- Booking details (date, time, service)
- Status indicators

### Profile (`/profile`)
- User information
- Menu items (bookings, favorites, payments, settings)
- Logout option

## 🌟 Key Features Implementation

### Interactive Skill Selection
The signup form includes an interactive skill selection system where users can:
- Click to toggle skills on/off
- Selected skills show with primary color
- Visual feedback with hover states

### Search & Filter
The caregivers page includes:
- Real-time search by name or location
- Filter by specialized skills
- Dynamic results count

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Bottom navigation for mobile
- Adaptive layouts

## 📱 Mobile Optimization

- Touch-friendly interface
- Bottom navigation bar
- Optimized images
- Fast page loads
- Smooth transitions

## 🔒 Best Practices

- ✅ Component-based architecture
- ✅ Reusable components
- ✅ Clean code structure
- ✅ Semantic HTML
- ✅ Accessible design
- ✅ SEO-friendly
- ✅ Performance optimized

## 🚢 Deployment

The application is deployed on Vercel. To deploy your own instance:

1. Push your code to GitHub
2. Import the project in Vercel
3. Configure build settings (auto-detected for Next.js)
4. Deploy

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

Built with ❤️ using Next.js and Tailwind CSS

---

**Live Demo:** [https://care-connect-red.vercel.app](https://care-connect-red.vercel.app)
