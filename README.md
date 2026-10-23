# Femina Beauty Parlour 🌸✨

> **Feel Beautiful. Be Confident.**  
> A complete, professional, responsive website for **Femina Beauty Parlour**, located near Indian Bank (Allahabad Bank), Raniganj Bazar, Uttar Pradesh 277208.

---

## 🌟 Overview & Highlights

- **Pure Frontend Architecture:** Built with semantic **HTML5**, modern **CSS3**, and clean **Vanilla JavaScript**. No frameworks, no external runtime dependencies, no backend, and no paid API keys required.
- **Premium Beauty Aesthetic:** Styled in blush pink, delicate cream, pure white, and subtle warm gold accents.
- **Pure CSS & Vector Visuals (Zero Photo/Video Dependencies):** Designed using CSS shapes, geometric art frames, delicate borders, and inline resolution-independent SVG icons.
- **Interactive WhatsApp Integration:** Fully encoded direct-chat WhatsApp links for all services, courses, and inquiries with pre-formatted messages.
- **Mobile-First Responsive Design:** Seamless user experience across mobile phones, tablets, and desktop displays with sticky glassmorphism navigation.
- **Accessible & SEO Optimized:** Semantic landmarks, ARIA attributes, skip link, high color contrast, and meta tags for search engines.

---

## 📁 Project Structure

```text
femina-beauty-parlour/
│
├── index.html        # Main semantic markup & content structure
├── style.css         # Custom responsive styling & design tokens
├── script.js         # Navigation, dynamic WhatsApp links & copyright year
└── README.md         # Documentation & deployment guide
```

---

## 🏢 Business Details

- **Business Name:** Femina Beauty Parlour
- **Address:** Femina Beauty Parlour, near INDIAN BANK (Allahabad Bank), Raniganj Bazar, Uttar Pradesh 277208
- **Google Maps:** [Open in Google Maps](https://share.google/3h52yfz905pQsJLbH)
- **WhatsApp:** [+91 7565911484](https://wa.me/917565911484)
- **Instagram:** [@femina.parlour_](https://www.instagram.com/femina.parlour_?dlrf=MW1qOTFjeWRoajU2Yw==)

---

## 🚀 Free Deployment Guide

### Option 1: Deploy with Vercel (Recommended)

1. **Push your code to GitHub:**
   - Create a new repository on [GitHub](https://github.com/new) named `femina-beauty-parlour`.
   - Run the following commands in this directory:
     ```bash
     git init
     git add .
     git commit -m "Initial commit: Femina Beauty Parlour website"
     git branch -M main
     git remote add origin https://github.com/YOUR_USERNAME/femina-beauty-parlour.git
     git push -u origin main
     ```

2. **Import into Vercel:**
   - Log in to [Vercel](https://vercel.com) (sign up for free using your GitHub account).
   - Click **"Add New..."** &rarr; **"Project"**.
   - Select your `femina-beauty-parlour` repository and click **"Import"**.

3. **Configure Settings:**
   - **Framework Preset:** `Other`
   - **Root Directory:** `./`
   - **Build Command:** *(Leave empty)*
   - **Output Directory:** `.` *(or leave default)*
   - Click **"Deploy"**.

4. **Verify Your Website:**
   - Vercel will generate an instant live URL (e.g., `https://femina-beauty-parlour.vercel.app`).
   - Test navigation, WhatsApp links, and mobile responsiveness.

---

### Option 2: Deploy with GitHub Pages

1. In your GitHub repository, navigate to **Settings** &rarr; **Pages**.
2. Under **Build and deployment** &rarr; **Source**, select **Deploy from a branch**.
3. Choose the `main` branch and `/ (root)` folder, then click **Save**.
4. Within 1-2 minutes, your website will be live at `https://YOUR_USERNAME.github.io/femina-beauty-parlour/`.

---

## ✏️ Maintenance & Customization

- **Updating Services:** In `index.html`, locate the `<section class="section services-section" id="services">` and edit titles or descriptions in any `<article class="service-card">`.
- **Updating WhatsApp Number:** In `script.js`, change the `waNumber` property in `BUSINESS_CONFIG` (format: country code without `+` or spaces, e.g., `917565911484`).
- **Updating Palette / Colors:** In `style.css`, modify the CSS variables in the `:root` block.

---

## 📄 License
Created for **Femina Beauty Parlour**. All rights reserved.
