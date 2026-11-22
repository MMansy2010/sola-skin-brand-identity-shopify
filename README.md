# Sola Skin — Brand Identity & Shopify 2.0 Theme

> **Quiet Luxury Skincare Brand Identity & Production-Ready Shopify 2.0 Theme**  
> *"Beauty. Care. You."*

---

## 1. Project Overview

**Sola Skin** is a premium skincare brand concept positioned at the intersection of **Quiet Luxury** and minimalist daily wellness rituals. The brand aesthetic pairs clean, editorial composition with warm tactile tones—warm ivory, obsidian black, champagne gold, and taupe.

This repository contains the complete brand assets, design specifications, presentation materials, and an Online Store 2.0 theme built natively for Shopify.

---

## 2. Repository Structure

```text
sola-skin-brand-identity-shopify/
│
├── README.md                          # Project documentation & installation guide
├── .gitignore                         # Standard git ignore rules (zero secrets, zero logs)
│
├── shopify-theme/                     # Production Shopify 2.0 Theme Source
│   ├── assets/                        # CSS, JS, SVG brandmarks, WebP/JPG editorial imagery
│   ├── config/                        # Theme settings schema & default settings data
│   ├── layout/                        # Base HTML shell (theme.liquid)
│   ├── locales/                       # Translations (Romanian ro.json, English en.default.json)
│   ├── sections/                      # 18 modular Liquid sections (hero, product, etc.)
│   ├── snippets/                      # Reusable components (cart drawer, price, icons)
│   └── templates/                     # 13 JSON template architectures (OS 2.0 standard)
│
├── brand-identity/                    # Core Brand Design Deliverables
│   ├── logos/                         # Vector SVG brandmarks (Light, Dark, Monogram, Icons)
│   ├── favicon/                       # Browser favicon (SVG)
│   └── brand-identity-board.pdf       # High-resolution 6-board brand presentation PDF
│
├── documentation/                     # Technical & Design Specifications
│   ├── DOCUMENTATION.md               # Theme technical architecture & Liquid documentation
│   └── FIGMA_DESIGN_SYSTEM.md         # Design tokens, typography hierarchy, and UI guidelines
│
└── preview/                           # Visual Previews & High-Resolution Mockups
    └── screenshots/                   # Storefront page captures and presentation boards
```

---

## 3. Brand Identity System

### Color Palette
- **Obsidian Black (`#1A1A1A`):** Primary wordmark, high-contrast headings, active states.
- **Ivory Cream (`#F8F6F1`):** Canvas background, section backgrounds, calm whitespace.
- **Champagne Gold (`#D4AF7A`):** Geometric emblem, accent dividers, hover states.
- **Warm Taupe (`#A89B8A`):** Secondary metadata, sub-labels, subtle framing.
- **Subtle Sand (`#EDE5DA`):** Borders, input framing, card dividers.

### Typography Hierarchy
- **Primary Serif:** *Playfair Display* & *Cormorant Garamond* (Headings, editorial quotes, brandmark)
- **Primary Sans:** *Montserrat* (Body copy, product specs, UI navigation, buttons)

### Deliverables in `brand-identity/`
- `brand-identity-board.pdf`: Complete 6-slide presentation covering Brand Essence, Brandmarks, Visual Standards, Product Concepts, Visual Mood, and Digital Execution.
- `logos/`: Scalable SVG vectors for light and dark backgrounds, minimal monogram, and app icons.

---

## 4. Shopify 2.0 Theme Architecture

The theme in `shopify-theme/` is built specifically for **Shopify Online Store 2.0**:

- **Native Ajax Cart API Integration:**
  Mutations use official endpoints (`/cart.js`, `/cart/add.js`, `/cart/change.js`). Includes race-condition locking to prevent quantity collisions and supports Shopify Dynamic Accelerated Checkout (Shop Pay, Apple Pay, Google Pay).
- **Dynamic Product Options & Variant Matching:**
  Reads option selections, synchronizes live prices, updates the active URL query parameter (`?variant=id`), switches gallery images, and disables out-of-stock variants safely without layout shifts.
- **JSON Templates & Section Modularity:**
  All storefront templates are JSON-based, giving merchants full drag-and-drop customization across pages.
- **Accessibility (a11y):**
  Includes a skip-to-content link, global `:focus-visible` golden focus indicators, ARIA modal dialog markup on drawers, and descriptive image `alt` attributes.
- **Zero Errors on Shopify Theme Check:**
  Clean, linted Liquid code with zero syntax errors.

---

## 5. Important Notice: Demo & Conceptual Data

> **IMPORTANT DISCLAIMER FOR STORE MERCHANTS:**  
> The products, prices, descriptions, store policies, business hours, and contact details included in this repository are **conceptual demo placeholders** created for design demonstration and contest submission purposes:
>
> 1. **Products & Inventory:** Product names (*Serum pentru față*, *Cremă hidratantă*, *Gel de curățare delicat*), sample prices, and image mockups must be replaced with the merchant's actual catalog, real SKUs, barcodes, and live inventory.
> 2. **Contact Details:** The contact email (`contact@solaskin.ro`), address (`București, România`), and hours (`Luni – Vineri: 09:00 – 17:00`) are sample placeholders and must be updated to the merchant's real business contact channels in Shopify Admin.
> 3. **Legal Policies:** Footer links point to Shopify's standard policy routes (`/policies/shipping-policy`, `/policies/refund-policy`, `/policies/terms-of-service`, `/policies/privacy-policy`). Actual legal copy must be configured under `Shopify Admin > Settings > Policies`.
> 4. **No Fictional Medical/Ingredient Claims:** The theme intentionally avoids making unverified chemical, SPF, or clinical claims; product informational accordions remain hidden until real data is supplied by the store owner.

---

## 6. Installation & Setup Guide

### Method 1: Upload via Shopify Admin
1. Archive the contents of `shopify-theme/` directly into a ZIP file (or use `sola-skin-shopify-theme.zip`). Ensure theme folders (`assets/`, `templates/`, etc.) reside at the root of the ZIP.
2. In your Shopify Admin, navigate to **Online Store > Themes**.
3. Under the **Theme library** section, click **Add theme > Upload zip file**.
4. Upload the theme ZIP. Once processed, click **Customize** to open the Shopify Theme Editor or **Publish** to make it active.

### Method 2: Development via Shopify CLI
```bash
# Navigate to the theme directory
cd sola-skin-brand-identity-shopify/shopify-theme

# Authenticate and run local development server
shopify theme dev --store your-store-subdomain.myshopify.com
```

---

## 7. Security & Cleanliness Checklist

- [x] **Zero Credentials & Secrets:** No API keys, private tokens, or passwords are stored in this repository.
- [x] **No `.env` files:** Environment files and private configs are excluded.
- [x] **No `node_modules` or Build Bloat:** Only production-ready source files, assets, and documentation are included.
- [x] **Forward-Slash Conformance:** All internal asset paths and references use clean web-standard paths.

---

## License & Credits

- **Design & Theme Development:** Mohamed Mansy (for Sola Skin Brand Identity & Shopify 2.0 Project)
- **Typography:** Cormorant Garamond & Montserrat (Google Fonts, Open Font License)
- **Icons:** Custom SVG & Feather Icons (MIT License)
