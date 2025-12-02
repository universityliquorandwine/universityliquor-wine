# University Liquor & Wine - Premium Website

A sophisticated, production-grade luxury website for University Liquor & Wine, a high-end liquor store in Murfreesboro, Tennessee. This website features an elegant, timeless design with premium aesthetics inspired by high-end wine publications and luxury retail.

## 🎨 Design Philosophy

**Tone:** Luxury/Refined + Editorial/Magazine

- High-end wine publication aesthetic (think Decanter, sophisticated hotel bars)
- Elegant, timeless, and sophisticated without being pretentious
- Professional yet approachable
- Every detail feels intentional and premium

## 📁 Project Structure

```
university-liquor-wine/
├── index.html              # Home page (main landing page)
├── liquor-collections.html  # Liquor collections catalog page
├── about.html             # About us page
├── services.html          # Services page
├── contact.html           # Contact & FAQ page
├── css/
│   ├── style.css          # Main stylesheet with design system
│   ├── responsive.css     # Responsive design rules
│   └── animations.css     # Animation utilities
├── js/
│   ├── main.js            # Main JavaScript functionality
│   ├── animations.js      # Scroll animations & effects
│   └── age-verification.js # Age verification popup
└── README.md              # This file
```

## 🎨 Design System

### Typography

**Fonts Used:**
- **Display/Headings:** Playfair Display (elegant serif)
- **Body Text:** Montserrat (refined sans-serif)
- **Accent:** Cinzel (for special callouts)

**Typography Guidelines:**
- Large, bold headings (48px-72px on hero)
- Generous line height (1.6-1.8 for body)
- Letter spacing on headings (+0.05em to +0.1em)
- Font weights: 300 (light), 400 (regular), 600 (semibold), 700 (bold)

### Color Palette

```css
/* Primary Colors */
--primary-navy: #0A1628
--primary-gold: #D4AF37
--primary-burgundy: #800020

/* Neutral Colors */
--cream: #F8F6F0
--off-white: #FAFAF8
--light-gray: #E8E6E0

/* Text Colors */
--text-dark: #2C2C2C
--text-medium: #5A5A5A
--text-light: #8A8A8A
```

### Spacing System

- Generous white space (luxury = breathing room)
- Section padding: 100px-150px on desktop, 60px-80px on mobile
- Consistent spacing scale using CSS variables

## 🚀 Features

### Core Functionality

1. **Age Verification Popup**
   - Cookie-based verification (localStorage)
   - Elegant modal with blur background
   - Appears on first visit only

2. **Sticky Navigation**
   - Fixed header with backdrop blur
   - Smooth scroll navigation
   - Mobile hamburger menu

3. **Scroll Animations**
   - Fade-in on scroll using Intersection Observer
   - Staggered animations for product cards
   - Parallax effects on hero section

4. **Product Showcase**
   - Category filtering
   - Search functionality
   - Elegant product cards with hover effects

5. **Responsive Design**
   - Mobile-first approach
   - Breakpoints: 375px, 768px, 1024px, 1440px
   - Touch-friendly interface

6. **Performance Optimizations**
   - Lazy loading images
   - Optimized animations
   - Efficient CSS organization

## 📄 Pages Overview

### 1. Home Page (index.html)
- Full-height hero section
- Featured collections carousel
- Why Choose Us (4 feature boxes)
- Product categories grid
- Testimonials slider
- Instagram feed section
- Newsletter signup
- Comprehensive footer

### 2. Liquor Collections Page (liquor-collections.html)
- Category filter tabs
- Product search functionality
- Product grid with cards
- CTA section

### 3. About Page (about.html)
- Store story section
- Mission & values
- What makes us different
- CTA section

### 4. Services Page (services.html)
- Service cards grid
- Process explanation
- CTA section

### 5. Contact Page (contact.html)
- Contact form
- Contact information
- FAQ accordion

## 🛠️ Technical Details

### Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom design system, no frameworks
- **Vanilla JavaScript** - No jQuery or frameworks
- **Google Fonts** - Playfair Display, Montserrat, Cinzel

### Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design for all screen sizes
- Graceful degradation for older browsers

### Performance

- Optimized images (use WebP with fallbacks)
- Lazy loading for below-fold content
- Minified CSS/JS (recommended for production)
- Critical CSS inline (can be implemented)

## 📝 Customization Guide

### Replacing Images

All images currently use Unsplash placeholders. To replace with actual store photos:

1. **Hero Background Images:**
   - Location: `<section class="hero">` in each HTML file
   - Replace: `background-image: url('...')` in `.hero-background`
   - Recommended: 1920x1080px, optimized for web

2. **Product Images:**
   - Location: `<img src="...">` in product cards
   - Recommended: 600x400px, WebP format preferred
   - Maintain aspect ratios

3. **Collection Images:**
   - Location: Collection cards in featured sections
   - Recommended: 800x600px

### Updating Content

1. **Business Information:**
   - Update in footer (all pages)
   - Update in contact page
   - Update in location page

2. **Store Hours:**
   - Update in footer
   - Update in location page
   - Update in contact page

3. **Product Information:**
   - Update product cards in liquor-collections.html
   - Update featured collections in index.html

### Adding New Products

To add new products to the products page:

```html
<div class="product-card fade-in-on-scroll" data-category="wine">
  <div class="product-image">
    <img src="path/to/image.jpg" alt="Product Name">
    <div class="product-overlay">
      <button class="btn-inquire">Inquire</button>
    </div>
  </div>
  <div class="product-info">
    <h3 class="product-name">Product Name</h3>
    <p class="product-description">Product description</p>
    <div class="product-meta">
      <span class="product-origin">Origin</span>
      <span class="product-type">Type</span>
    </div>
  </div>
</div>
```

### Customizing Colors

All colors are defined in CSS variables in `css/style.css`. Update the `:root` variables to change the color scheme:

```css
:root {
  --primary-navy: #0A1628;  /* Change this */
  --primary-gold: #D4AF37;  /* Change this */
  /* etc. */
}
```

## 🚀 Deployment

### Pre-Deployment Checklist

1. **Replace Placeholder Images**
   - Replace all Unsplash images with actual store photos
   - Optimize images for web (compress, use WebP)

2. **Update Business Information**
   - Verify all contact information
   - Update store hours if needed
   - Verify Google Maps embed coordinates

3. **Test Functionality**
   - Test age verification popup
   - Test contact form (connect to backend)
   - Test all navigation links
   - Test responsive design on multiple devices

4. **SEO Optimization**
   - Verify all meta descriptions
   - Add alt text to all images
   - Test page load speeds
   - Submit sitemap to search engines

5. **Performance**
   - Minify CSS and JavaScript
   - Optimize images
   - Enable browser caching
   - Consider CDN for assets

### Hosting Recommendations

- **Static Hosting:** Netlify, Vercel, GitHub Pages
- **Traditional Hosting:** Any web host supporting static files
- **CDN:** Cloudflare for improved performance

## 📧 Contact Form Integration

The contact form currently uses client-side validation. To make it functional:

1. **Backend Integration:**
   - Connect form to email service (e.g., Formspree, EmailJS)
   - Or integrate with your backend API

2. **Example with EmailJS:**
   ```javascript
   // Add EmailJS script
   // Update form submission handler in main.js
   ```

## 🎯 Future Enhancements

Potential features to add:

1. **E-commerce Integration** (if needed)
   - Product inventory system
   - Shopping cart
   - Checkout process

2. **Blog Section**
   - Wine/spirit education articles
   - Staff picks
   - Event announcements

3. **Loyalty Program**
   - Customer accounts
   - Rewards system
   - Special offers

4. **Online Reservations**
   - Special order requests
   - Event consultation booking
   - Gift basket orders

## 📱 Mobile Optimization

The website is fully responsive with:
- Mobile-first CSS approach
- Touch-friendly navigation
- Optimized images for mobile
- Fast loading times

## 🔒 Security Considerations

- Age verification (legal compliance)
- Form validation
- HTTPS recommended for production
- Input sanitization (implement on backend)

## 📞 Support

For questions or issues:
- Review code comments in files
- Check browser console for errors
- Validate HTML/CSS
- Test in multiple browsers

## 📄 License

This website is created for University Liquor & Wine. All rights reserved.

---

## 🎨 Design Notes

### What Makes This Design Premium

1. **Typography Hierarchy:** Large, elegant headings with refined body text
2. **Color Palette:** Sophisticated navy, gold, and burgundy combination
3. **Spacing:** Generous white space creates luxury feel
4. **Animations:** Smooth, subtle animations enhance user experience
5. **Details:** Gold accents, elegant shadows, premium hover effects
6. **Consistency:** Unified design system across all pages

### Avoiding Generic Templates

- Custom design system (no Bootstrap/Tailwind)
- Distinctive typography (not Inter/Roboto)
- Unique color palette
- Custom animations
- Editorial layout approach

---

**Built with attention to detail and a focus on creating an unforgettable first impression.**

