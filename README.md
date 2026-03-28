<div align="center">

<br/>

```
███╗   ███╗███████╗██████╗ ██╗ ██████╗ █████╗ ██████╗ ███████╗
████╗ ████║██╔════╝██╔══██╗██║██╔════╝██╔══██╗██╔══██╗██╔════╝
██╔████╔██║█████╗  ██║  ██║██║██║     ███████║██████╔╝█████╗  
██║╚██╔╝██║██╔══╝  ██║  ██║██║██║     ██╔══██║██╔══██╗██╔══╝  
██║ ╚═╝ ██║███████╗██████╔╝██║╚██████╗██║  ██║██║  ██║███████╗
╚═╝     ╚═╝╚══════╝╚═════╝ ╚═╝ ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝
```

# MediCare — Advanced Healthcare & Appointment Booking

**A fully responsive, production-grade hospital website built with pure HTML, CSS and JavaScript.**  
Zero frameworks. Zero dependencies. Open directly in any browser.

Demo Link : "https://medicare-smart.netlify.app"


<br/>

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-✓-0a7c7c?style=for-the-badge)
![No Dependencies](https://img.shields.io/badge/Dependencies-None-success?style=for-the-badge)

<br/>

> **Designed & Built by [Bhargavi N](mailto:care@medicare.in)**  
> NABH Accredited · ISO 9001:2015 · Serving 50,000+ patients across Tamil Nadu

<br/>

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Live Preview](#-live-preview)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Pages](#-pages)
- [Design System](#-design-system)
- [JavaScript Architecture](#-javascript-architecture)
- [Getting Started](#-getting-started)
- [Responsive Breakpoints](#-responsive-breakpoints)
- [Browser Support](#-browser-support)
- [Credits](#-credits)

---

## 🏥 Overview

MediCare is a complete, multi-page hospital website with a real appointment booking system, doctor directory with live filtering, contact form with validation, and a fully animated UI — all built without any frameworks or external libraries beyond Google Fonts.

The site is designed for a fictional hospital network with three campuses across Tamil Nadu, featuring 200+ specialist doctors across 18 departments. Every button, link, and form on every page is fully functional.

---

## 🌐 Live Preview

To run the website locally:

```bash
# Option 1 — Just open the file (works for most browsers)
open index.html

# Option 2 — Use a local server (recommended for full feature support)
npx serve .
# or
python3 -m http.server 8080
# then visit http://localhost:8080
```

> **Note:** The site works when opened directly as a `file://` URL — no server required.

---

## ✨ Features

### 🔖 Booking System
- **4-step guided appointment flow** — Doctor → Date & Time → Patient Details → Confirm
- Real-time slot availability (pre-filled booked slots shown as disabled)
- Department filter to narrow doctor selection
- URL parameter support (`?doctor=1`, `?dept=Cardiology`) for deep linking
- Live booking summary sidebar that updates with every selection
- Unique appointment ID generated on confirmation (`MC-XXXXXX`)
- Session storage to persist bookings within the tab
- Full form validation with inline error messages

### 👨‍⚕️ Doctor Directory
- 16 verified specialist profiles across 7 departments
- Live search by name, speciality, or condition tags
- Multi-filter: Department checkboxes + Max Fee slider + Rating + Availability
- Sortable by: Recommended / Highest Rated / Fee (Low–High) / Most Experienced
- URL param support (`?dept=Cardiology&name=Ramesh`) from the homepage quick search
- "No results" state with reset option

### 📬 Contact Form
- 6 enquiry type pills (General / Appointment / Billing / Medical Records / Feedback / Other)
- Full field validation: required fields, email format, 10-digit phone, minimum message length
- Animated submit button: loading → success state with toast notification
- Auto-reset after submission
- FAQ accordion with smooth open/close toggle

### 🎨 UI & Animations
- Scroll-triggered animations (`animate-up`, `animate-fade`, `animate-left`, `animate-right`)
- Staggered delays via utility classes (`.s1` → `.s5`)
- Animated counter numbers in stats sections
- Floating hero cards with `@keyframes floatCard`
- Live pulse dot animation for availability badge
- Toast notification system (success/error)
- Navbar scroll shadow effect
- Hamburger menu for mobile with animated X transform

### 📱 Fully Responsive
- Mobile-first layout using CSS Grid and Flexbox
- Hamburger navigation on screens ≤ 900px
- Stacked single-column layouts on mobile
- All grids adapt: 4-col → 2-col → 1-col

---

## 📁 Project Structure

```
medicare/
│
├── index.html                  ← Homepage
│
├── css/
│   ├── style.css               ← Global design system (shared across all pages)
│   └── home.css                ← Homepage-specific styles (hero, blog, departments…)
│
├── js/
│   ├── app.js                  ← Root-level shared JS (navbar, footer, toast, validation)
│   └── home.js                 ← Homepage JS (doctor cards, blog, quick search)
│
└── pages/
    ├── app.js                  ← Pages-level shared JS (same as root but with ../index.html paths)
    ├── about.html              ← About Us — mission, team, timeline, accreditations
    ├── booking.html            ← Book Appointment — 4-step wizard
    ├── contact.html            ← Contact — form, locations, FAQ
    ├── doctors.html            ← Doctor Directory — search, filter, sort
    └── services.html           ← Services — specialities, health packages, emergency CTA
```

> **Why two `app.js` files?**  
> `js/app.js` (root level) uses paths like `pages/booking.html`.  
> `pages/app.js` uses paths like `booking.html` and `../index.html`.  
> This eliminates the need for server-side routing and makes the site work perfectly when opened as a local `file://` URL.

---

## 📄 Pages

| Page | File | Description |
|------|------|-------------|
| **Home** | `index.html` | Hero section, quick doctor search, department grid, stats, how-it-works, featured doctors, testimonials, blog cards, CTA, emergency banner |
| **Doctors** | `pages/doctors.html` | Full doctor directory with live search + filters + sorting |
| **Book Appointment** | `pages/booking.html` | 4-step booking wizard with validation and session storage |
| **Services** | `pages/services.html` | 9 service cards, why-choose section, 3 health packages, emergency CTA |
| **About** | `pages/about.html` | Mission, core values, stats, 8-doctor leadership team, timeline (1998–2024), accreditations |
| **Contact** | `pages/contact.html` | Contact info panel, enquiry form, 3 branch locations, 6-item FAQ accordion |

---

## 🎨 Design System

All design tokens are defined as CSS custom properties in `css/style.css`.

### Colour Palette

```css
--white:        #ffffff
--snow:         #f5f9f9    /* Page background */
--mist:         #eaf3f3    /* Section backgrounds */
--teal:         #0a7c7c    /* Primary brand colour */
--teal-light:   #12a8a8    /* Hover / accent states */
--teal-dark:    #065a5a    /* Dark variant */
--teal-glow:    rgba(10,124,124,0.10)
--navy:         #081523    /* Headings / dark sections */
--navy-mid:     #0f2035
--slate:        #3d5a70    /* Body text */
--muted:        #6e8898    /* Secondary text */
--border:       #d4e5e5    /* Default borders */
--accent:       #d4891a    /* Star ratings / warnings */
--danger:       #b83232    /* Errors / emergency */
--success:      #167a4a    /* Confirmations */
```

### Typography

| Role | Font | Weight |
|------|------|--------|
| Display / Headings | Playfair Display | 700, 900 |
| Body / UI | DM Sans | 300, 400, 500, 600, 700 |
| Monospace / Labels | DM Mono | 400, 500 |

### Shadows

```css
--shadow-sm:   0 1px 6px rgba(8,21,35,0.07)
--shadow-md:   0 6px 28px rgba(8,21,35,0.10)
--shadow-lg:   0 20px 60px rgba(8,21,35,0.14)
--shadow-teal: 0 8px 32px rgba(10,124,124,0.25)
```

### Spacing & Radius

```css
--radius:    8px     /* Inputs, small cards */
--radius-lg: 18px    /* Cards */
--radius-xl: 28px    /* Modals, large panels */
```

### Button Variants

| Class | Usage |
|-------|-------|
| `.btn-primary` | Main CTA — teal gradient |
| `.btn-outline` | Secondary — teal border |
| `.btn-white` | On dark backgrounds |
| `.btn-ghost` | Subtle / transparent |
| `.btn-accent` | Highlights / warnings |
| `.btn-sm` | Compact actions |
| `.btn-lg` | Hero / section CTAs |

### Animation Classes

Apply to any element to trigger on scroll:

```html
<div class="animate-up s2">...</div>
```

| Class | Effect |
|-------|--------|
| `animate-up` | Fade in + slide up |
| `animate-fade` | Fade in only |
| `animate-left` | Fade in + slide from left |
| `animate-right` | Fade in + slide from right |
| `s1` → `s5` | Stagger delay (0.1s → 0.5s) |

---

## ⚙️ JavaScript Architecture

### Shared Utilities (`app.js` / `pages/app.js`)

| Function | Description |
|----------|-------------|
| `injectNavbar()` | Dynamically renders the full navbar with active link detection |
| `injectFooter()` | Dynamically renders the full footer with correct relative paths |
| `initScrollAnimations()` | IntersectionObserver to add `.visible` on scroll |
| `initCounters()` | Animates number counters with easing on scroll into view |
| `showToast(msg, type)` | Shows a bottom-right toast notification (success / error) |
| `validateForm(form)` | Validates all `[data-required]` inputs — email, phone, length |
| `Bookings` object | `sessionStorage`-backed booking store with `add()` method |

### Booking Page (`booking.html`)

| Function | Description |
|----------|-------------|
| `goToStep(n)` | Validates current step and navigates forward/backward |
| `updateProgress(n)` | Updates the step indicator circles and connector lines |
| `renderDoctorOptions()` | Renders filtered doctor option cards |
| `filterDoctorOptions()` | Filters doctors by selected department |
| `selectDoctor(id)` | Selects a doctor, updates sidebar |
| `renderSlots()` | Renders time slot buttons with booked/selected state |
| `selectSlot(slot)` | Selects a time slot, updates sidebar |
| `buildConfirmSummary()` | Populates the Step 4 review table |
| `updateSidebarSummary()` | Updates the sticky sidebar with current selections |
| `submitBooking()` | Validates consent, calls `Bookings.add()`, shows success screen |

### Doctor Directory (`doctors.html`)

| Function | Description |
|----------|-------------|
| `applyFilters()` | Reads all filter inputs and re-renders the doctor list |
| `renderDoctors()` | Renders filtered + sorted doctor cards |
| `clearFilters()` | Resets all filters and shows all doctors |
| `updateFeeLabel()` | Syncs the fee range slider label |

### Contact Page (`contact.html`)

| Function | Description |
|----------|-------------|
| `selectPill(btn)` | Activates selected enquiry type pill |
| `toggleFaq(item)` | Opens/closes FAQ accordion items |
| Submit handler | Validates, shows loading, shows success, resets form |

---

## 🚀 Getting Started

### Prerequisites

- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No Node.js, no npm, no build tools required

### Running Locally

```bash
# 1. Extract the ZIP file
unzip medicare_final.zip
cd medicare2/

# 2a. Open directly (works in most browsers)
open index.html          # macOS
start index.html         # Windows
xdg-open index.html      # Linux

# 2b. Or serve with a local server (recommended)
npx serve .              # Node.js
python3 -m http.server   # Python
php -S localhost:8080    # PHP
```

### Customisation

**To change the hospital name/brand:**  
Edit the `nav-logo` text and footer brand text in `js/app.js` and `pages/app.js`.

**To add a doctor:**  
Add an entry to the `ALL_DOCTORS` array in `pages/doctors.html` and the `DOCTORS` array in `pages/booking.html`.

**To change colours:**  
Edit the CSS custom properties at the top of `css/style.css`.

**To add a new department:**  
Add a department card to `index.html`, add filter checkboxes to `pages/doctors.html`, and add a service card to `pages/services.html`.

---

## 📐 Responsive Breakpoints

| Breakpoint | Layout Changes |
|------------|----------------|
| `> 1100px` | Full desktop — 4-column grids |
| `≤ 1100px` | Departments: 3-col, Why-grid: 2-col |
| `≤ 900px` | Hamburger nav, hero stacks, all grids go 1-col |
| `≤ 600px` | Single column everything, compact padding |

---

## 🌍 Browser Support

| Browser | Support |
|---------|---------|
| Chrome 90+ | ✅ Full |
| Firefox 88+ | ✅ Full |
| Safari 14+ | ✅ Full |
| Edge 90+ | ✅ Full |
| Opera 76+ | ✅ Full |
| IE 11 | ❌ Not supported |

---

## 🏗️ Tech Stack

```
Frontend
├── HTML5          — Semantic markup, accessibility-aware structure
├── CSS3           — Custom properties, Grid, Flexbox, keyframe animations
└── Vanilla JS     — ES6+, IntersectionObserver, sessionStorage, URLSearchParams

Fonts (Google Fonts CDN)
├── Playfair Display  — Display / headings
├── DM Sans           — Body text / UI
└── DM Mono           — Labels / monospace

No external JS libraries. No CSS frameworks. No build pipeline.
```

---

## 📞 Hospital Information (Demo Data)

| Detail | Value |
|--------|-------|
| Helpline | 1800-123-456 (Toll Free) |
| Direct | +91 44 2800 1234 |
| Emergency | +91 44 2800 1111 (24×7) |
| Email | care@medicare.in |
| Chennai HQ | 12 Anna Salai, Teynampet, Chennai – 600 018 |
| Madurai | 88 Bypass Road, SS Colony, Madurai – 625 010 |
| Coimbatore | 21 Avinashi Road, Peelamedu, Coimbatore – 641 004 |
| OPD Hours | Mon–Sat 8am–8pm · Sun 9am–2pm |
| Emergency | 24×7 all locations |

> All contact details, doctor profiles, appointment IDs, and patient data are **fictional** and used for demonstration purposes only.

---

## 🏆 Highlights

- ✅ **Zero external JS dependencies** — everything built from scratch
- ✅ **Works offline** — open `index.html` directly, no server needed
- ✅ **All 6 pages fully functional** — every button, link, and form works
- ✅ **Live search + multi-filter** on the doctors directory
- ✅ **Complete booking wizard** with session-persisted confirmation
- ✅ **Animated counters, scroll reveals, floating cards** — all CSS/JS native
- ✅ **Accessible markup** — semantic HTML5, label associations, ARIA labels on hamburger
- ✅ **Mobile-first responsive** — tested across all breakpoints
- ✅ **Deep linking support** — `?doctor=1`, `?dept=Cardiology`, `?name=Ramesh`

---

## 📜 License

This project is created for educational and portfolio demonstration purposes.  
All medical data, doctor profiles, and patient information are entirely fictional.

---

<div align="center">

<br/>

**Designed & built with ❤️ by Bhargavi N**

*MediCare Hospital · NABH Accredited · ISO 9001:2015 · Est. 1998*

<br/>

```
"Compassionate healthcare, expertly delivered."
```

</div>
