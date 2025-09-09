### **Project: Agnni Predictions - Phase 2: Premium Page Consistency & Animation Refinement**

**Objective:** Elevate every single page of the website to the same premium standard as the homepage, creating a seamless, luxurious, and highly usable journey. The goal is to fix critical UX failures, implement world-class animation choreography, and ensure every interaction feels intentional, polished, and divine.

**Core Principle:** **Consistency is King.** The design language, animation philosophy, and user experience must be uniform across all pages to build a trustworthy and high-value brand identity.

---

### **1. Critical UX & Usability Fixes (The Non-Negotiables)**

*   **Modal & Accessibility Disaster:** The product card modal is completely broken.
    *   **Fix:** The modal must be a true, focus-trapped modal. **The cursor must be contained within it.** The background must be dimmed with a semi-transparent overlay (`particle-overlay.webp` could work here tastefully). The modal must be closable via a prominent "X" button, the ESC key, and by clicking outside of it. This is priority zero.
*   **Logo Visibility:** The current logo is ineffective.
    *   **Fix:** Implement a **context-aware logo system**. Use the provided `agnni-logo-stacked.webp` but create two versions:
        1.  A **light version** for dark backgrounds (e.g., hero sections with dark videos).
        2.  A **dark version** (or a version with a subtle white stroke/shadow) for light backgrounds.
    The logo must always have strong contrast against its immediate background.
*   **Form Usability:** All forms (Contact, Consultation Booking) are currently subpar.
    *   **Fix:** Redesign all forms from the ground up using the requirements in `requirements.md`. They must have:
        *   Elegant, minimalistic labels with smooth float-label animation on focus.
        *   Subtle, purposeful hover and focus states (e.g., a soft purple glow).
        *   Clearly defined error states and validation messages.
        *   A polished, high-contrast submit button.

---

### **2. Global Animation & Scrolling Overhaul**

The current animations are present but lack sophistication and control.

*   **Animation Choreography:** **Sections must animate sequentially.** Implement a system using `GSAP ScrollTrigger` and `Anime.js` where a section's animations (text fade-up, image parallax, element transitions) **must complete** before the next section begins its entrance sequence. This creates a narrative, chapter-by-chapter feel, not a chaotic free-for-all.
*   **Scroll Behavior:** Smooth scrolling is mandatory. The scroll speed should feel weighty and intentional, not light and flimsy.

---

### **3. Page-by-Page Premium Enhancement Plan**

#### **A. Homepage Refinement (The Foundation)**
*   **Hero Section:** The single video background is good but not extraordinary.
    *   **Action:** Replace it with a **premium, auto-rotating carousel**. This is the main event. Each slide should be a high-impact, full-screen visual:
        *   **Slide 1:** A subtly looped, muted video (`angel-healing.mp4` or `fairy.mp4`) with a text overlay.
        *   **Slide 2:** A stunning, high-resolution photograph (`tarot-altar.webp` or `candlelit-tarot.webp`) with a delicate, CSS-animated particle effect over it.
        *   **Slide 3:** A dynamic background using the `astrology-zodiac.webp` or `horoscope.mp4` video with a slow, mesmerizing zoom pan.
    *   The transition between slides should be a seamless, crossfade animation. No cheap sliding.
*   **Section Audit:** **Remove the FAQ section from the homepage** as per the client's latest instruction. Add any missing sections mandated by the `requirements.md` (e.g., ensure "Why Choose Us" is present and beautifully designed).

#### **B. Services / Consultation Page (This is the Product)**
*   **Current State:** Terrible. This is a core revenue page and must be flawless.
*   **Vision:** Each service should be a masterpiece. **Use the `horoscope.mp4` video as a full-section background** for the Astrology service block. Use `glowing-healing-hands.webp` for Crystal Healing. Match the asset to the service for an immersive experience.
*   **Layout:** Move away from a simple list. Use a dynamic layout: perhaps an elegant grid on one side and a sticky, detailed service description on the other that updates as the user hovers or scrolls through options.
*   **Interaction:** Hovering over a service name should trigger a gentle, related animation in the background (e.g., hovering over "Angel Reading" makes a faint, ethereal light pass through the section).

#### **C. About Us Page**
*   **Current State:** Lacks the emotional connection and premium feel.
*   **Vision:** This is Dr. Pranjal's story. It should feel reverent and established.
    *   Use a layered design with a large, elegant portrait photo.
    *   Implement a timeline or milestone counter for her "30+ Years of Experience" using a subtle counting animation.
    *   Text should be broken into easily digestible blocks with ample spacing. Use serif fonts to convey authority and tradition.

#### **D. Products / Shop Page**
*   **Current State:** Uninspired and non-functional.
*   **Vision:** A luxury e-commerce gallery. Display the crystal bracelets against clean, dark backgrounds (use `amethyst-crystals.webp` as a textural backdrop). Each product must have:
    *   A high-res image that can be zoomed.
    *   A beautifully typeset description.
    *   The "Add to Sacred Cart" button must be a premium CTA.
*   **The Sacred Cart:** The cart itself must be a modal or slide-in panel that reflects the site's mystical theme (e.g., a dark overlay with a soft purple glow).

#### **E. Contact Us Page**
*   **Current State:** Generic.
*   **Vision:** Integrate the consultation timings and address into the design elegantly. Don't just list them; style them. Perhaps use an icon system. The form is the centerpiece here and must be the premium form described earlier.

---

### **Directive for the Developer/Designer:**

You are moving from the "foundation" to the "finishings." Your focus is now on **consistency, polish, and flawless interaction.**

1.  **Audit Every Page:** Go through the site page-by-page and ruthlessly align every element (spacing, fonts, button styles, card styles) with the refined homepage.
2.  **Choreograph, Don't Animate:** Think of yourself as a director. Each scroll is a scene change. Each hover is a actor's cue. The animations must tell a story and guide the user's eye.
3.  **Pixel-Perfect Polish:** The difference between good and premium is in the details: a 1px border, a 0.2s longer easing function, a perfectly balanced gradient. Obsess over the details.
4.  **Test Relentlessly:** Especially the fixed modal and form interactions. The site must feel robust and professional on all devices.

This phase is about proving that every page can be as extraordinary as the homepage aims to be. Make it seamless. Make it premium.