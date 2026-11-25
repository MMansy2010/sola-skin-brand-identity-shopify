# Sola Skin — Documentație Tehnică & Ghid de Implementare Shopify 2.0

Acest proiect reprezintă pachetul complet de identitate vizuală de lux și tema oficială Shopify 2.0 pentru brandul românesc de îngrijire a pielii **Sola Skin**.

---

## 1. Structura Pachetului de Livrabile

```
sola-skin-brand-identity-shopify/
├── sola-skin-shopify-theme.zip       <-- Arhiva gata pentru import direct în Shopify Admin
├── FIGMA_DESIGN_SYSTEM.md            <-- Specificație completă Figma & sistem de design UI/UX
├── DOCUMENTATION.md                  <-- Ghid complet de instalare și configurare
│
├── shopify-theme/                    <-- Codul sursă complet al temei Shopify 2.0
│   ├── assets/                       <-- Stiluri CSS, scripturi JS, logo-uri SVG și fotografii de produs
│   │   ├── base.css                  <-- Sistemul de stiluri de lux
│   │   ├── theme.js                  <-- Funcționalități AJAX coș, drawer, navigație, galerii
│   │   ├── sola-skin-logo-light.svg  <-- Logo principal fundal deschis (transparent)
│   │   ├── sola-skin-logo-dark.svg   <-- Logo inversat pentru footer/dark mode (transparent)
│   │   ├── sola-skin-monogram.svg    <-- Monograma "S" de lux
│   │   ├── favicon.svg               <-- Favicon optimizat
│   │   ├── product-serum.jpg         <-- Fotografie de produs: Serum pentru față (30 ml)
│   │   ├── product-cream.jpg         <-- Fotografie de produs: Cremă hidratantă (50 ml)
│   │   ├── product-cleanser.jpg      <-- Fotografie de produs: Gel de curățare delicat (100 ml)
│   │   ├── product-sunscreen.jpg     <-- Fotografie de produs: Protecție solară SPF 50+ (50 ml)
│   │   ├── hero-skincare.jpg         <-- Hero cinematic colecție completă de lux
│   │   ├── collection-editorial.jpg  <-- Compoziție colecție editorială
│   │   └── lifestyle-editorial.jpg   <-- Grafică editorială lifestyle
│   ├── config/
│   │   ├── settings_schema.json      <-- Schema de setări globale Theme Editor
│   │   └── settings_data.json        <-- Preset implicit culori, tipografie și opțiuni
│   ├── layout/
│   │   └── theme.liquid              <-- Structura HTML5 principală a magazinului
│   ├── locales/
│   │   ├── ro.json                   <-- Fișier complet de localizare în limba Română
│   │   └── en.default.json           <-- Fișier de rezervă în limba Engleză
│   ├── sections/                     <-- 19 Secțiuni modulare Online Store 2.0
│   │   ├── announcement-bar.liquid   <-- Bară subțire de anunțuri
│   │   ├── header.liquid             <-- Antet elegant sticky cu meniu mobil & desktop
│   │   ├── hero.liquid               <-- Erou cinematic editorial cu arc auriu
│   │   ├── brand-intro.liquid        <-- Introducere brand (layout pe 2 coloane)
│   │   ├── featured-products.liquid  <-- Grilă produse recomandate cu adăugare rapidă
│   │   ├── routine-guide.liquid      <-- Ghid pentru rutina zilnică
│   │   ├── main-routine.liquid       <-- Pagină dedicată Rutina Zilnică în 4 pași (OS 2.0)
│   │   ├── editorial-image.liquid    <-- Citat editorial pe card din sticlă mată
│   │   ├── brand-values.liquid       <-- 4 blocuri de valori cu iconițe liniare
│   │   ├── newsletter.liquid         <-- Formular nativ abonare newsletter
│   │   ├── footer.liquid             <-- Subsol Obsidian Black cu meniu și declarație brand
│   │   ├── main-product.liquid       <-- Pagină detaliu produs (PDP) cu acordeoane
│   │   ├── product-recommendations.liquid <-- Recomandări cross-sell
│   │   ├── main-collection.liquid    <-- Pagină colecție (PLP) cu sortare și număr produse
│   │   ├── main-cart.liquid          <-- Pagină dedicată de coș de cumpărături
│   │   ├── main-page.liquid          <-- Pagină standard de conținut
│   │   ├── contact-form.liquid       <-- Formular de contact
│   │   ├── main-search.liquid        <-- Căutare dedicată în magazin
│   │   └── main-404.liquid           <-- Pagină 404 în limba Română
│   ├── snippets/                     <-- 10 Componente reutilizabile Liquid
│   │   ├── product-card.liquid       <-- Card produs de lux cu preț în RON și quick-add
│   │   ├── price.liquid              <-- Formatare preț în moneda magazinului (RON / lei)
│   │   ├── cart-drawer.liquid        <-- Sertar lateral glisant (Slide-out AJAX Cart)
│   │   ├── routine-content.liquid    <-- Conținut complet de rezervă pentru Rutina Zilnică
│   │   ├── contact-form.liquid       <-- Formular de contact inclus în snippet
│   │   ├── icon-search.liquid        <-- Iconiță minimalistă căutare
│   │   ├── icon-cart.liquid          <-- Iconiță sacoșă cumpărături cu contor
│   │   ├── icon-menu.liquid          <-- Iconiță meniu mobil hamburger
│   │   ├── icon-close.liquid         <-- Iconiță închidere
│   │   └── icon-chevron.liquid       <-- Iconiță săgeată pentru acordeoane
│   └── templates/                    <-- 10 Șabloane JSON Online Store 2.0
│       ├── index.json                <-- Șablon Pagina Principală
│       ├── product.json              <-- Șablon Pagina Produs
│       ├── collection.json           <-- Șablon Pagina Colecție
│       ├── cart.json                 <-- Șablon Pagina Coș
│       ├── page.json                 <-- Șablon Pagină Despre Noi / Conținut
│       ├── page.routine.json         <-- Șablon Pagină Rutina Zilnică (4 pași)
│       ├── page.contact.json         <-- Șablon Pagină Contact
│       ├── search.json               <-- Șablon Căutare
│       ├── 404.json                  <-- Șablon 404
│       └── list-collections.json     <-- Șablon Listă Colecții
│
└── preview/                          <-- Previzualizare & capturi de ecran ale magazinului
    └── screenshots/                  <-- Capturi de înaltă rezoluție (desktop & mobil)
```

---

## 2. Cum se testează Previzualizarea Interactivă în Browser

Puteți deschide și naviga întregul magazin imediat, fără a fi nevoie de un server de dezvoltare sau de un cont Shopify activ:

1. Deschideți fișierul `preview/index.html` în orice browser modern (Chrome, Edge, Safari, Firefox).
2. Puteți testa:
   - Adăugarea produselor în coș prin butonul „Adaugă în coș” (se deschide automat sertarul lateral **Cart Drawer**).
   - Modificarea cantităților `[+]` și `[-]` sau eliminarea produselor din coș.
   - Comutarea între cele 3 produse pe pagina de produs (`product.html?id=serum`, `?id=cream`, `?id=cleanser`).
   - Schimbarea imaginilor mari la click pe miniaturi (Thumbnails).
   - Deschiderea și închiderea acordeoanelor de detalii produs (Descriere, Mod de utilizare, Detalii, Ingrediente, Livrare).
   - Meniul mobil receptiv la rezoluții sub 768px.
   - Bara rapidă de navigare din partea de jos pentru comutare instantanee între pagini.

---

## 3. Instalarea Temei în Shopify Admin

Pentru a publica tema pe magazinul dumneavoastră Shopify:

1. Autentificați-vă în panoul de administrare Shopify (`your-store.myshopify.com/admin`).
2. Navigați în meniul lateral la: **Magazin online (Online Store) -> Teme (Themes)**.
3. În secțiunea *Biblioteca de teme (Theme library)*, faceți click pe **Adaugă o temă (Add theme) -> Încarcă fișierul zip (Upload zip file)**.
4. Selectați fișierul din rădăcina acestui proiect: `sola-skin-shopify-theme.zip`.
5. Shopify va extrage automat tema și va valida structura Online Store 2.0.
6. Faceți click pe **Personalizează (Customize)** pentru a deschide Shopify Theme Editor, sau **Publică (Publish)** atunci când doriți ca tema să devină activă pentru clienți.

---

## 4. Configurarea Limbii Române în Shopify

Tema este redactată nativ în limba română în `locales/ro.json`. Pentru a seta limba română ca limbă implicită a magazinului:

1. În Shopify Admin, accesați **Setări (Settings) -> Limbi (Languages)**.
2. Dacă limba Română nu este activată, faceți click pe **Adăugați o limbă (Add a language)** și alegeți **Română (Romanian)**.
3. Setați limba Română ca **Limbă implicită (Default language)**.
4. În **Setări -> Monedă magazin (Store currency)**, alegeți **RON (Leu românesc)**. Formatul de afișare va fi automat `{{ amount }} RON` sau `{{ amount }} lei`.

---

## 5. Adăugarea Produselor Conceptuale în Shopify

În Shopify Admin -> **Produse (Products) -> Adăugați un produs (Add product)**:

### Produsul 1:
- **Titlu:** `Gel de curățare delicat` (Pasul 1 în rutină)
- **Descriere:** `Un început delicat pentru rutina ta de îngrijire. Curăță impuritățile menținând bariera naturală de hidratare și conferind o senzație plăcută de prospețime.`
- **Preț:** `140,00 RON`
- **Volum:** `100 ml`
- **Imagine:** Încărcați `shopify-theme/assets/product-cleanser.jpg`.

### Produsul 2:
- **Titlu:** `Serum pentru față` (Pasul 2 în rutină)
- **Descriere:** `Un pas delicat în rutina ta zilnică de îngrijire. Creat pentru a oferi o senzație de confort și echilibru, îmbogățind ritualul de dimineață sau seară cu o textură fină și catifelată.`
- **Preț:** `240,00 RON`
- **Volum:** `30 ml`
- **Imagine:** Încărcați `shopify-theme/assets/product-serum.jpg`.

### Produsul 3:
- **Titlu:** `Cremă hidratantă` (Pasul 3 în rutină)
- **Descriere:** `Un moment de răsfăț pentru pielea ta, zi de zi. O cremă mătăsoasă ce oferă o hidratare profundă și o barieră protectoare confortabilă împotriva factorilor de mediu.`
- **Preț:** `190,00 RON`
- **Volum:** `50 ml`
- **Imagine:** Încărcați `shopify-theme/assets/product-cream.jpg`.

### Produsul 4:
- **Titlu:** `Cremă protecție solară SPF 50+` (Pasul 4 în rutină)
- **Descriere:** `Protecție solară zilnică avansată cu spectru larg SPF 50+. O formulă lejeră și catifelată ce oferă un scut invizibil împotriva radiațiilor UVA/UVB, completând perfect ritualul de dimineață.`
- **Preț:** `175,00 RON`
- **Volum:** `50 ml`
- **Imagine:** Încărcați `shopify-theme/assets/product-sunscreen.jpg`.

---

## 6. Lista de Date Reale ce Urmează a fi Completate de Fondator

Următoarele elemente sunt pregătite ca spații rezervate (placeholders) editabile și trebuie completate înainte de lansarea comercială oficială:

1. **Lista completă de ingrediente (INCI):** După finalizarea notificării CPNP (Cosmetic Products Notification Portal) la nivel european.
2. **Datele fiscale ale companiei:** CUI, Număr Registrul Comerțului, adresă sediu social în footer și pe pagina de contact.
3. **Conturile reale de social media:** Înlocuirea link-urilor din setările temei cu handle-urile oficiale Instagram/Facebook/TikTok ale Sola Skin.
4. **Metodele de plată și curierat:** Activarea procesatorului de plăți cu cardul (ex. Netopia Payments / Stripe) și a integrării de curierat (ex. Sameday, Fan Courier, DPD) prin aplicațiile dedicate din Shopify App Store.
5. **Politica de confidențialitate (GDPR) și Termenii de utilizare:** Adaptate la entitatea juridică română care operează magazinul.
