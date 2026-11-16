# Hoichoi Cafe (হৈচৈ ক্যাফে) — Multi-Page Website ☕✨

A complete, modern, and responsive **6-page website** built for **Hoichoi Cafe**, Howrah's beloved neighborhood hangout located at **Chatterjeehut, 710 Shibpur Rd, Shibpur, Howrah, West Bengal 711104**.

---

## 🌟 Highlights & Key Features

- **🌐 Complete 6-Page Multi-Page Architecture**:
  - **1. Home (`/` or `index.html`)**: Hero banner, café introduction, featured signature dishes, best sellers, special offers & combos, real Google reviews summary (4.1 ★ with 126 reviews), opening hours, and clear call-to-actions.
  - **2. Menu (`/menu` or `menu.html`)**: 20+ dishes categorized (Handcrafted Momos, 6" Pizzas, Crispy Bites, Mocktails & Coffee, Value Combos), live real-time search, dietary filters (Non-Veg, Veg, Chef's Special), customization modal (spice level, chutneys, extra molten cheese), and "Add to Cart" functionality.
  - **3. About Us (`/about` or `about.html`)**: The cultural meaning of "Hoichoi" (cheerful celebration & banter in Bengali), our story in Shibpur, our 4 guiding pillars & values, culinary specialities showcase, and cozy intimate café ambiance.
  - **4. Gallery (`/gallery` or `gallery.html`)**: Category filterable image gallery (Momos, Pizzas, Mocktails & Brews, Interior Ambiance) with full-screen interactive Lightbox modal (keyboard & touch navigation).
  - **5. Reservations (`/reservations` or `reservations.html`)**: Instant table booking form with validation (Date, Time slot, Guest count, Seating preference, Occasion notes), generating an official verified Booking Confirmation Ticket (`#HC-XXXX`) with a 1-click Print/Save receipt option.
  - **6. Contact (`/contact` or `contact.html`)**: Full physical address, clickable phone (`091236 17586`), embedded interactive Google Map, navigation landmarks from Howrah Station & Mandirtala, popular visiting hours chart (12 PM quiet hours, evening peak), and validated inquiry form.

- **🛍️ Unified Slide-Out Cart Drawer Across All Pages**:
  - Dynamic cart drawer accessible from the navigation bar on every single page.
  - Persistent cart state across page reloads and navigation (`localStorage`).
  - Supports 10% discount promo code **`HOICHOI10`**.
  - Tip selector (0%, 5%, 10%), order type selector (Takeaway / Dine-in / Delivery), and order confirmation modal with unique order tracking reference (e.g. `#HC-5421`).

- **⏱️ Real-Time Dynamic Café Operating Status**:
  - Automatically calculates whether Hoichoi Cafe is currently **Open** or **Closed** based on current local time (Daily 11:00 AM – 11:00 PM).
  - Automatically highlights today's schedule in the business hours list.

- **🎨 Premium Visual Identity & Theme Switcher**:
  - Default **Dark Roast** theme with deep espresso browns and amber/caramel accents (`#d49a55`).
  - One-click toggle to **Warm Cream Daylight** mode with persistence.
  - Typography: *Playfair Display*, *Plus Jakarta Sans*, & *Outfit*.

- **🎧 Ambient Cafe Soundscape (Web Audio API)**:
  - Zero external MP3 files needed! Synthesizes warm, subtle coffee shop ambient audio using the browser's built-in Web Audio API with a toggle button in the header.

---

## 🍽️ Actual Café Information

- **Name**: Hoichoi Cafe (হৈচৈ ক্যাফে)
- **Rating**: 4.1 ★ (126 Google Reviews)
- **Average Spend**: ₹200–400 per person
- **Address**: Chatterjeehut, 710, Shibpur Rd, Naora, Shibpur, Howrah, West Bengal 711104
- **Phone**: 091236 17586 / +91 91236 17586
- **Hours**: Open Daily, 11:00 AM – 11:00 PM
- **Description**: Cozy cafe offering flavorful momos and varied food options at reasonable prices.

### Featured Menu Items:
1. Chicken Fried Momos 6 Pieces
2. Veg Chicken Royal BBQ Momo
3. Cheese Chicken Baked Momo
4. Chicken Steamed Momos 6 Pieces
5. Hoichoi Chicken Chef Special Pizza 6 Inches
6. Chicken Margherita Pizza 6 Inches
7. Chicken BBQ Pizza
8. Chicken Peri Peri Pizza
9. Fish Fingers 4 Pieces
10. Chicken Popcorn Large
11. Crishpy Chiken
12. Chick Fry
13. Blue Heaven Mocktail
14. Hoichoi Cold Coffee
15. Hoichoi Cold N Cold Velvet with Jelly
16. Chinese Combo
17. Pizza French Fries Moektail Combo
18. Cappuccino, Hot Chocolate & Special Tea

---

## 🚀 How to Run & View

### Option 1: Direct in Any Web Browser
Simply double-click `index.html` or drag it into Google Chrome, Microsoft Edge, Mozilla Firefox, or Safari. All 6 pages navigate seamlessly via standard relative links.

### Option 2: Local Web Server (Optional)
```bash
# Using Python:
python -m http.server 8000

# Using Node.js:
npx serve .
```
Then visit `http://localhost:8000/`.

---

## 📁 File Structure

```
cafe website/
├── index.html        # Page 1: Home
├── menu.html         # Page 2: Full Menu & Ordering
├── about.html        # Page 3: About Us & Story
├── gallery.html      # Page 4: Photo Gallery & Lightbox
├── reservations.html # Page 5: Table Reservations & Booking Ticket
├── contact.html      # Page 6: Contact, Map & Popular Times
├── styles.css        # Unified Design System & Responsive Styles
├── app.js            # Shared State, Menu Database, Cart, Audio & Forms
└── README.md         # Documentation
```
