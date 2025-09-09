# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is "Agnni Predictions" - a React-based spiritual consultation website for Dr. Pranjal D. Sharma's services. The site features celestial themes, mystical elements, and comprehensive information about tarot, astrology, numerology, and other spiritual services.

## Common Commands
```bash
# Development
npm run dev          # Start development server (Vite)
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint

# No test command is currently configured
```

## Architecture & Structure

### Tech Stack
- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **Routing**: React Router DOM v6
- **Animations**: AOS (Animate On Scroll)
- **Icons**: Lucide React
- **Sliders**: Swiper

### Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── CursorEffects.tsx    # Sparkle cursor effects
│   ├── Footer.tsx           # Site footer
│   ├── LoadingScreen.tsx    # Initial loading animation
│   ├── Navbar.tsx          # Main navigation
│   └── *Slider.tsx         # Various content sliders
├── pages/              # Route components
│   ├── About.tsx           # About Agnni Predictions
│   ├── Contact.tsx         # Contact information
│   ├── Consultation.tsx    # Services listing
│   ├── Courses.tsx         # Educational content (temp removed)
│   ├── Guidance.tsx        # Additional guidance content
│   ├── Home.tsx           # Landing page
│   └── Shop.tsx           # Spiritual products
├── assets/            # Static assets
│   ├── images/            # Organized by category
│   │   ├── backgrounds/   # Background images
│   │   ├── crystals/      # Product images
│   │   ├── logos/         # Brand assets
│   │   ├── misc/          # Miscellaneous images
│   │   └── services/      # Service-related images
│   └── videos/            # Video assets
├── types/             # TypeScript definitions
└── main.tsx          # Application entry point
```

### Key Components & Features
- **LoadingScreen**: Custom video-based loading animation
- **CursorEffects**: Interactive sparkle effects on cursor movement
- **Navigation**: Fixed navbar with mobile responsive menu
- **Routing**: All pages use consistent URL patterns (some capitalized: /Consultation, /Courses, /Shop)
- **Styling**: Purple and white theme with mystical/celestial aesthetics

### Asset Management
Assets are organized by category in `src/assets/`:
- Images are WebP format for optimization
- Videos include promotional content and loading animations
- All spiritual/mystical themed content (tarot, crystals, angels, etc.)

### Configuration Files
- **Vite**: Basic React setup with lucide-react excluded from optimization
- **TailwindCSS**: Standard configuration
- **ESLint**: TypeScript + React configuration with hooks and refresh plugins
- **TypeScript**: Standard React app configuration

### Requirements & Context
This project implements a comprehensive spiritual consultation website based on detailed requirements in `REQUIREMENTS.md`. Key features include:
- Multi-service consultation booking (₹1299 pricing)
- Product shop for spiritual items (black salt, crystals)
- Mystical animations and cursor effects
- Mobile-responsive design
- Professional spiritual branding

### Development Notes
- The codebase follows standard React/TypeScript patterns
- Uses modern ESM modules throughout
- Implements custom loading states and animations
- Asset paths reference organized directory structure
- Some routes use capitalized paths for consistency with existing URLs