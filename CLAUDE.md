# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
**TRANSFORMED**: "Agnni Predictions" - A premium, cinematic React-based spiritual consultation website for Dr. Pranjal D. Sharma's services. The site now features industry-leading luxury design, sophisticated animations, and a breathtaking user experience that embodies divine elegance and mysticism.

**Key Achievement**: Complete transformation from amateur implementation to industry-leading digital experience serving as a benchmark for premium spiritual services websites.

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
- **Styling**: TailwindCSS + Premium Design System
- **Routing**: React Router DOM v6
- **Animations**: GSAP (Professional), Framer Motion, Lenis Smooth Scroll
- **3D/Interactive**: Three.js, Google Model Viewer
- **Icons**: Lucide React
- **Typography**: Google Fonts (Cinzel, Inter, Playfair Display)
- **Performance**: Custom optimization utilities for 60fps animations

### Project Structure
```
src/
├── components/          # Premium UI components
│   ├── CursorEffects.tsx           # Sophisticated sparkle cursor with interactions
│   ├── LoadingScreen.tsx           # Cinematic video preloader (loader.mp4)
│   ├── SmoothScrollProvider.tsx    # GSAP + Lenis smooth scrolling system
│   ├── StrategicBackgroundVideo.tsx # Context-aware video backgrounds
│   ├── PremiumServiceCard.tsx      # Luxury service cards with GSAP animations
│   ├── LuxuryTestimonialCarousel.tsx # Premium testimonial carousel
│   ├── InteractiveCrystalGallery.tsx # 3D-style product gallery with modals
│   ├── Navbar.tsx                  # Enhanced navigation
│   ├── Footer.tsx                  # Site footer
│   └── *Slider.tsx                 # Legacy sliders
├── pages/              # Route components
│   ├── PremiumHome.tsx     # Transformed landing page with all premium features
│   ├── Home.tsx           # Original landing page (preserved)
│   ├── Consultation.tsx    # Premium services with enhanced cards
│   ├── About.tsx           # About Agnni Predictions
│   ├── Contact.tsx         # Contact information
│   ├── Courses.tsx         # Educational content (temp removed)
│   ├── Guidance.tsx        # Additional guidance content
│   └── Shop.tsx           # Spiritual products
├── utils/              # Utility functions
│   └── performanceOptimizer.ts # 60fps animation optimizations
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