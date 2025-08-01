# Wildling Acres Website

A professional, responsive website for Wildling Acres, an organic garlic farm in Salem, Ohio. This site showcases premium hardneck garlic varieties, farming processes, benefits, planting guides, and enables online retail sales with shipping.

## Features

- **Responsive Design**: Optimized for all devices.
- **E-Commerce Store**: Integrated Snipcart for cart, payments, and order fulfillment.
- **Product Showcase**: Detailed cards for garlic varieties with "Add to Cart" buttons.
- **Educational Content**: Sections on benefits and planting to boost engagement and sales.
- **Contact Form**: For inquiries; e-commerce handles orders.
- **Seasonal Messaging**: Dynamic alerts for harvest/planting seasons.
- **SEO Friendly**: Meta tags and keywords for "organic hardneck garlic online Salem Ohio".

## File Structure

```
WildlingAcres/
├── index.html          # Main page with all sections
├── styles.css          # Styles including e-commerce
├── script.js           # Interactivity and seasonal messages
└── README.md           # This guide
```

## Customization Guide

### 1. E-Commerce Setup
- Sign up at snipcart.com.
- Replace `[YOUR_SNIPCART_API_KEY]` in index.html.
- In Snipcart dashboard: Set up shipping rates (e.g., flat $10 US), taxes, and email notifications.
- Update prices, weights, and descriptions in product cards.
- For images: Add an `images/` folder and replace emojis with <img> tags.

### 2. Update Farm Details
- Edit address, email in contact section.
- Adjust varieties, prices in products section.

### 3. Branding
- Change colors in styles.css (e.g., --primary-color).
- Add real photos and alt text for SEO.

### 4. Social Links
- Update footer with your actual URLs.

## Deployment
- Use Netlify/Vercel for free hosting.
- Upload folder; Snipcart works instantly.

## Contact Form
- Current: Alert-based. Integrate with Formspree or Netlify Forms for real emails.

## SEO & Performance
- Add Google Analytics in <head>.
- Optimize images; minify files for faster loads.

## Support
Modify code as needed or consult a developer for advanced features like inventory tracking.

**Note**: Test e-commerce thoroughly. Update prices/availability seasonally. Go live and start shipping organic garlic!
