import { gsap } from 'gsap';

/**
 * Performance optimization utilities for 60fps animations
 */

// Optimized animation settings for performance
export const PERFORMANCE_CONFIG = {
  // Use will-change for elements that will be animated
  willChange: {
    transform: 'will-change: transform;',
    opacity: 'will-change: opacity;',
    auto: 'will-change: auto;',
  },
  
  // Optimized GSAP settings
  gsapDefaults: {
    force3D: true,
    transformOrigin: "center center",
    ease: "power2.out",
  },

  // Debounce timing for scroll events
  scrollDebounce: 16, // ~60fps
  
  // Intersection Observer settings
  intersectionOptions: {
    rootMargin: '50px',
    threshold: 0.1,
  },
};

/**
 * Optimize GSAP for performance
 */
export const optimizeGSAP = (): void => {
  // Set global GSAP defaults for performance
  gsap.defaults({
    force3D: true,
    transformOrigin: "center center",
  });

  // Configure GSAP ticker for smooth 60fps
  gsap.ticker.fps(60);
  
  // Enable hardware acceleration globally
  gsap.config({
    force3D: true,
    nullTargetWarn: false,
  });
};

/**
 * Apply performance optimizations to an element
 */
export const optimizeElement = (element: HTMLElement): void => {
  if (!element) return;
  
  // Apply GPU acceleration
  element.style.transform = 'translateZ(0)';
  element.style.backfaceVisibility = 'hidden';
  element.style.perspective = '1000px';
  
  // Optimize for animations
  element.style.willChange = 'transform, opacity';
};

/**
 * Clean up performance optimizations
 */
export const cleanupElement = (element: HTMLElement): void => {
  if (!element) return;
  
  element.style.willChange = 'auto';
};

/**
 * Debounced scroll handler for performance
 */
export const createDebouncedScrollHandler = (
  callback: () => void, 
  delay: number = PERFORMANCE_CONFIG.scrollDebounce
): (() => void) => {
  let timeoutId: NodeJS.Timeout;
  let rafId: number;

  return () => {
    clearTimeout(timeoutId);
    cancelAnimationFrame(rafId);

    rafId = requestAnimationFrame(() => {
      timeoutId = setTimeout(callback, delay);
    });
  };
};

/**
 * Intersection Observer for lazy animations
 */
export const createIntersectionObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options = PERFORMANCE_CONFIG.intersectionOptions
): IntersectionObserver => {
  return new IntersectionObserver(callback, options);
};

/**
 * Optimize video performance
 */
export const optimizeVideo = (video: HTMLVideoElement): void => {
  // Set optimal video attributes for performance
  video.setAttribute('webkit-playsinline', 'true');
  video.setAttribute('playsinline', 'true');
  video.setAttribute('preload', 'metadata');
  video.muted = true;
  video.loop = true;
  
  // Add performance styles
  video.style.objectFit = 'cover';
  video.style.transform = 'translateZ(0)';
  video.style.backfaceVisibility = 'hidden';
};

/**
 * Batch DOM updates for performance
 */
export const batchDOMUpdates = (updates: (() => void)[]): void => {
  requestAnimationFrame(() => {
    updates.forEach(update => update());
  });
};

/**
 * Memory cleanup utilities
 */
export const cleanupAnimations = {
  gsapTimelines: [] as gsap.core.Timeline[],
  
  register: (timeline: gsap.core.Timeline) => {
    cleanupAnimations.gsapTimelines.push(timeline);
  },
  
  cleanup: () => {
    cleanupAnimations.gsapTimelines.forEach(timeline => {
      timeline.kill();
    });
    cleanupAnimations.gsapTimelines.length = 0;
  }
};

/**
 * Check if device supports smooth animations
 */
export const supportsHighPerformanceAnimations = (): boolean => {
  // Check for reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return false;
  }
  
  // Check for high refresh rate displays
  const isHighRefreshRate = window.screen?.refreshRate > 60;
  
  // Check for performance indicators
  const hasGoodPerformance = 
    navigator.hardwareConcurrency >= 4 && 
    navigator.deviceMemory >= 4;
  
  return isHighRefreshRate || hasGoodPerformance;
};

/**
 * Initialize performance monitoring
 */
export const initPerformanceMonitoring = (): void => {
  // Monitor frame rate
  if (typeof window !== 'undefined' && 'performance' in window) {
    let lastTime = performance.now();
    let frames = 0;
    
    const checkFPS = () => {
      frames++;
      const currentTime = performance.now();
      
      if (currentTime >= lastTime + 1000) {
        const fps = Math.round((frames * 1000) / (currentTime - lastTime));
        
        // If FPS drops below 50, log warning
        if (fps < 50) {
          console.warn('Low FPS detected:', fps);
        }
        
        frames = 0;
        lastTime = currentTime;
      }
      
      requestAnimationFrame(checkFPS);
    };
    
    requestAnimationFrame(checkFPS);
  }
};

// Initialize optimizations
export const initializePerformanceOptimizations = (): void => {
  optimizeGSAP();
  
  // Only enable performance monitoring in development
  if (process.env.NODE_ENV === 'development') {
    initPerformanceMonitoring();
  }
};

export default {
  PERFORMANCE_CONFIG,
  optimizeGSAP,
  optimizeElement,
  cleanupElement,
  createDebouncedScrollHandler,
  createIntersectionObserver,
  optimizeVideo,
  batchDOMUpdates,
  cleanupAnimations,
  supportsHighPerformanceAnimations,
  initializePerformanceOptimizations,
};