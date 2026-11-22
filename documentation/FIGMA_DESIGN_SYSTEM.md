# Sola Skin — Figma Design System & UI/UX Specification

> **Notice:** This document is a structured, production-ready design system specification created for Figma designers, UI/UX teams, and front-end engineers. It defines all tokens, components, grid systems, wireframes, and responsive layout rules. (It is a comprehensive markdown specification, not a binary `.fig` file).

---

## 1. Brand Philosophy & Aesthetic Direction

- **Brand Name:** Sola Skin (*Never* all-caps "SOLA SKIN", always Title Case "Sola Skin").
- **Logo Hierarchy:** "Sola" displayed prominently in Cormorant Garamond serif with a fine champagne gold arc above it, and "Skin" in clean Montserrat tracked uppercase positioned underneath between two fine golden hairlines.
- **Concept:** "Sola" (Spanish for "alone" or "on her own") — celebrating individuality, confidence, self-care, and personal attention.
- **Visual Direction:** *Quiet Luxury meets Modern Skincare Editorial*.
- **Target Audience:** Romanian modern women seeking authentic, elevated self-care rituals with clean aesthetics.

---

## 2. Design Tokens: Color Palette

| Token Name | Hex Code | RGB | Role / Usage |
| :--- | :--- | :--- | :--- |
| **Obsidian Black** | `#1A1A1A` | `rgb(26, 26, 26)` | Primary contrast, primary CTA buttons, dark footer, headings on light surfaces |
| **Soft Black / Dark Surface** | `#171615` | `rgb(23, 22, 21)` | Footer background, dark overlays, modal backdrops |
| **Warm Ivory** | `#F8F6F1` | `rgb(248, 246, 241)` | Main page background, product card inner tint, soothing aesthetic |
| **Soft White** | `#FFFFFF` | `rgb(255, 255, 255)` | Surface cards, product detail background, crisp contrast |
| **Champagne Gold** | `#D4AF7A` | `rgb(212, 175, 122)` | Fine decorative lines, arc motifs, badges, delicate accents |
| **Champagne Gold Light** | `#F3E5AB` | `rgb(243, 229, 171)` | Metallic highlight gradient stop |
| **Warm Taupe** | `#A89B8A` | `rgb(168, 155, 138)` | Subtitles, editorial tags, secondary borders |
| **Muted Gray / Text** | `#77716B` | `rgb(119, 113, 107)` | Body copy, secondary text, metadata |
| **Light Beige** | `#EDE5DA` | `rgb(237, 229, 218)` | Announcement bar, subtle section backgrounds |
| **Subtle Border** | `#E4DDD3` | `rgb(228, 221, 211)` | Hairline dividers, card outlines, table borders |

---

## 3. Typography Styles & Type Scale

### Primary Serif (Headings & Quotes)
- **Primary:** `Playfair Display` (Google Fonts)
- **Brand Wordmark / Editorial Fallback:** `Cormorant Garamond` (Google Fonts)

### Primary Sans-Serif (Body & Interface)
- **Primary:** `Montserrat` (Google Fonts, Weights: 300, 400, 500, 600)
- **Clean Interface Fallback:** `Inter` or `-apple-system, BlinkMacSystemFont, sans-serif`

### Type Scale (Desktop 1440px)
- **Display 1 (Hero Title):** `64px` (`4rem`) / Line-height: `1.15` / Letter-spacing: `-0.5px` / Serif Regular
- **Heading 1 (Page Title):** `48px` (`3rem`) / Line-height: `1.2` / Letter-spacing: `-0.5px` / Serif Regular
- **Heading 2 (Section Title):** `36px` (`2.25rem`) / Line-height: `1.25` / Letter-spacing: `-0.3px` / Serif Regular
- **Heading 3 (Product Title):** `24px` (`1.5rem`) / Line-height: `1.3` / Letter-spacing: `0px` / Serif Regular
- **Heading 4 (Subsections / Cards):** `18px` (`1.125rem`) / Line-height: `1.4` / Sans-serif SemiBold (`600`)
- **Eyebrow / Overline:** `12px` (`0.75rem`) / Line-height: `1.2` / Letter-spacing: `2.5px` / All-caps / Sans-serif Medium (`500`)
- **Body Large (Lead):** `18px` (`1.125rem`) / Line-height: `1.8` / Sans-serif Regular (`400`)
- **Body Regular:** `15px` (`0.9375rem`) / Line-height: `1.75` / Sans-serif Regular (`400`)
- **Body Small / Captions:** `13px` (`0.8125rem`) / Line-height: `1.6` / Sans-serif Regular (`400`)
- **Button Text:** `13px` (`0.8125rem`) / Line-height: `1.2` / Letter-spacing: `2px` / All-caps / Sans-serif Medium (`500`)

---

## 4. Spacing System & Layout Grids

### 8-Point Spacing Scale
- `space-1`: `4px`
- `space-2`: `8px`
- `space-3`: `12px`
- `space-4`: `16px`
- `space-6`: `24px`
- `space-8`: `32px`
- `space-12`: `48px`
- `space-16`: `64px`
- `space-20`: `80px`
- `space-28`: `110px`
- `space-32`: `130px`

### Layout Grids

#### Desktop (1440px viewport)
- **Container Max Width:** `1360px`
- **Columns:** 12
- **Gutter:** `28px`
- **Side Margins (Padding):** `32px`
- **Header Height:** `84px`

#### Tablet (768px - 1023px viewport)
- **Container Max Width:** `100%`
- **Columns:** 8
- **Gutter:** `20px`
- **Side Margins:** `24px`
- **Header Height:** `74px`

#### Mobile (375px - 767px viewport)
- **Container Max Width:** `100%`
- **Columns:** 4
- **Gutter:** `16px`
- **Side Margins:** `20px`
- **Header Height:** `70px`

---

## 5. UI Components & Variants

### 1. Buttons
- **`btn-primary`:** Solid Obsidian Black (`#1A1A1A`), text Ivory (`#F8F6F1`), padding `15px 36px`, border-radius `3px`. Hover: `#2E2C2A`, subtle box shadow `0 4px 18px rgba(26,26,26,0.12)`.
- **`btn-secondary`:** Transparent background, 1px solid Obsidian Black border, Obsidian Black text. Hover: Solid Obsidian Black with Ivory text.
- **`btn-gold`:** Solid Champagne Gold (`#D4AF7A`), text `#1A1A1A`. Hover: `#C59E65`.
- **`link-editorial`:** Inline flex text with an animated bottom hairline in Champagne Gold that expands on hover.

### 2. Product Card Component
- **Aspect Ratio:** 5:6 portrait (`700 x 840 px`).
- **Surface:** Soft white body, warm ivory media container, 1px hairline border (`#E4DDD3`).
- **Card Elements:**
  1. Product Image (with smooth 1.04x scale transition on hover).
  2. Floating Badge (Top Left): "Bestseller" (Gold badge), "Nou în colecție" (Light beige badge).
  3. Subtitle / Volume: e.g. "Sola Skin · 30 ml".
  4. Product Title: Serif Regular 22px linking to PDP.
  5. Price: Bold 16px formatted in RON currency (e.g. `240,00 RON`).
  6. Action CTA: Dual action — "Adaugă în coș" (Quick Add) and "Vezi detalii" (Outline button).

### 3. Decorative Gold Arc Divider
- Fine golden hairline arc with two horizontal lines and a central gold dot (`#D4AF7A`), reflecting the arch atop the Sola Skin brand wordmark.

### 4. Slide-out Cart Drawer
- **Width:** `440px` (or 100% on mobile).
- **Position:** Fixed right, sliding in with ease `cubic-bezier(0.25, 1, 0.5, 1)`.
- **Backdrop:** 50% opacity Obsidian Black with 4px backdrop blur.
- **Sections:** Header (Title + Close icon), Scrollable Items list (thumbnail, title, price, quantity stepper `[-] 1 [+]`, remove button), Footer (Subtotal, Romanian taxes note, Checkout CTA).

---

## 6. Page Layout Specifications

### A. Homepage Wireframe Flow
1. **Announcement Bar (40px):** Light Beige background, "Descoperă noua colecție Sola Skin".
2. **Sticky Header (84px):** Navigation Left, Sola Skin Logo Centered, Search & Cart Icons Right.
3. **Hero Section (760px):** 2-column editorial split. Left: Eyebrow + Serif Headline "Frumusețea începe cu grija pentru tine." + Supporting copy + Primary & Secondary CTAs. Right: Luxury product family composition on travertine pedestal.
4. **Brand Intro Section (600px):** 2-column split. Left: Lifestyle photography with satin drapery & botanical shadow play. Right: "Un moment doar pentru tine." + Narrative text + Brand story link.
5. **Featured Products Section (850px):** Centered title + 3-column product card grid displaying:
   - Serum pentru față (30 ml)
   - Cremă hidratantă (50 ml)
   - Gel de curățare delicat (100 ml)
   - "Vezi toate produsele" secondary CTA.
6. **Routine 3-Step Guide (520px):** 3-card horizontal grid (01. Curățare delicată, 02. Revitalizare profundă, 03. Hidratare de durată).
7. **Editorial Image & Quote (480px):** Centered frosted glass overlay card featuring: *„Frumusețea stă în simplitate.”*
8. **Brand Values (340px):** 4-column icon grid (Grijă pentru tine, Simplitate, Eleganță, Ritualuri zilnice) with minimalist line icons.
9. **Newsletter Section (380px):** Centered box with input field "Adresa ta de e-mail" and "Abonează-mă" button.
10. **Footer (460px):** Obsidian Black background, Sola Skin reversed ivory logo, "Sola Skin — Beauty. Care. You.", Navigation, Customer care links, Romanian contact info, Legal links, Copyright.

### B. Product Detail Page (PDP) Flow
1. **Gallery (Left 55%):** Sticky gallery container with high-res 1:1.1 main image + 3 thumbnails underneath.
2. **Information Panel (Right 45%):**
   - Category / Eyebrow: "Ritual 01 · Revitalizare"
   - Product Title: 42px Serif
   - Price: 24px Bold (`240,00 RON`)
   - Description Paragraph: Quiet luxury tone
   - Quantity selector + Primary "Adaugă în coș" CTA
   - Accordion Disclosure Widgets:
     1. Descriere
     2. Mod de utilizare
     3. Detalii produs (volum, ambalaj)
     4. Ingrediente (INCI placeholder)
     5. Livrare și retur (1-3 zile, 14 zile retur)
3. **Cross-Sell Recommendations:** 2-product grid ("Completează-ți rutina").

---

## 7. Romanian Localization Strings Reference

| Key | Romanian Text |
| :--- | :--- |
| Navigation Home | `Acasă` |
| Navigation Products | `Produse` |
| Navigation About | `Despre noi` |
| Navigation Routine | `Rutina ta` |
| Navigation Contact | `Contact` |
| Add to Cart | `Adaugă în coș` |
| View Details | `Vezi detalii` |
| Cart Title | `Coșul tău` |
| Cart Empty | `Coșul tău este gol` |
| Checkout | `Finalizează comanda` |
| Continue Shopping | `Continuă cumpărăturile` |
| Subtotal | `Subtotal` |
| Newsletter Title | `Rămâi aproape de Sola Skin.` |
| Newsletter Placeholder | `Adresa ta de e-mail` |
| Newsletter Button | `Abonează-mă` |
| Product 1 Title | `Serum pentru față` (30 ml) |
| Product 2 Title | `Cremă hidratantă` (50 ml) |
| Product 3 Title | `Gel de curățare delicat` (100 ml) |
