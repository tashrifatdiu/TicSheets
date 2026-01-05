# TicSheets Website

A stunning one-page scroll website for the TicSheets productivity app, built with React.js and featuring Nothing OS inspired design with smooth animations and mobile responsiveness.

## 🚀 Features

- **One-page scroll design** with smooth animations
- **Nothing OS inspired theme** with geometric precision and minimalist design
- **Fully responsive** for mobile, tablet, and desktop
- **Framer Motion animations** for engaging user experience
- **Appwrite integration** for wishlist functionality
- **Modern React.js** without TypeScript or Tailwind CSS

## 🛠 Setup Instructions

### 1. Install Dependencies

```bash
cd ticsheets-website
npm install
```

### 2. Configure Appwrite

1. Create an account at [Appwrite Cloud](https://cloud.appwrite.io)
2. Create a new project
3. Create a database and collection for the wishlist
4. Update the `.env` file with your Appwrite credentials:

```env
REACT_APP_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
REACT_APP_APPWRITE_PROJECT_ID=your_project_id_here
REACT_APP_APPWRITE_DATABASE_ID=your_database_id_here
REACT_APP_APPWRITE_COLLECTION_ID=your_collection_id_here
```

### 3. Collection Schema

Create a collection in Appwrite with the following attributes:
- `name` (String, required)
- `email` (Email, required)
- `country` (String, required)
- `timestamp` (DateTime, required)

### 4. Run the Development Server

```bash
npm start
```

The website will be available at `http://localhost:3000`

### 5. Build for Production

```bash
npm run build
```

## 📱 Sections

1. **Header** - Fixed navigation with smooth scroll
2. **Hero** - Eye-catching introduction with animated elements
3. **Features** - Comprehensive feature showcase
4. **Screenshots** - Interactive app preview
5. **Tech Stack** - Technical architecture overview
6. **Wishlist** - Appwrite-powered signup form
7. **Footer** - Links and additional information

## 🎨 Design System

### Color Palette
- Primary Background: `#0A0A0A` (Deep Black)
- Text Primary: `#FFFFFF` (Pure White)
- Accent Orange: `#FF6600` (Brand Color)
- Transparent overlays with subtle white borders

### Typography
- Headers: Bold, UPPERCASE, Letter-spaced
- Body: Regular with subtle letter-spacing
- Monospace for technical elements

### Animations
- Framer Motion for smooth transitions
- Intersection Observer for scroll-triggered animations
- Hover effects and micro-interactions

## 📦 Dependencies

- `react` - UI library
- `framer-motion` - Animation library
- `react-intersection-observer` - Scroll-triggered animations
- `appwrite` - Backend services for wishlist

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📱 Mobile Responsiveness

The website is fully responsive with breakpoints at:
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: 320px - 767px

## 🚀 Deployment

The website can be deployed to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront

## 📄 License

This project is created for the TicSheets productivity app showcase.