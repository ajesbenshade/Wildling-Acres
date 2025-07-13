# Locust Grove Farms Website

A professional, responsive website for Locust Grove Farms garlic business. This website showcases your premium garlic varieties, farming process, and provides contact information for customers.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Product Showcase**: Dedicated sections for different garlic varieties
- **Growing Process**: Educational content about your farming methods
- **Contact Form**: Interactive form for customer inquiries
- **Seasonal Messaging**: Dynamic content based on the time of year
- **SEO Friendly**: Optimized for search engines

## File Structure

```
/tmp/LocustGrove/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript for interactivity
└── README.md           # This file
```

## Customization Guide

### 1. Update Contact Information

Edit the contact section in `index.html`:

```html
<!-- Around line 150-160 -->
<div class="contact-item">
    <strong>📍 Address:</strong>
    <p>Locust Grove Farms<br>
    [Your Address]<br>
    [City, State ZIP]</p>
</div>
<div class="contact-item">
    <strong>📞 Phone:</strong>
    <p>(555) 123-4567</p>
</div>
<div class="contact-item">
    <strong>📧 Email:</strong>
    <p>info@locustgrovefarms.com</p>
</div>
```

### 2. Customize Garlic Varieties

Update the product cards in `index.html` (around line 80-130) to match your actual garlic varieties:

```html
<div class="product-card">
    <div class="product-image">🧄</div>
    <h3>Your Garlic Variety</h3>
    <p>Description of your garlic variety...</p>
    <ul>
        <li>Feature 1</li>
        <li>Feature 2</li>
        <li>Feature 3</li>
    </ul>
    <button class="product-btn">Learn More</button>
</div>
```

### 3. Update Farm Information

Modify the about section (around line 50-70) with your farm's actual story and statistics.

### 4. Add Real Images

Replace the emoji placeholders with actual photos:

1. Create an `images` folder
2. Add your photos (garlic-hero.jpg, farm-photo.jpg, garlic-varieties.jpg, etc.)
3. Update the CSS and HTML to use real images:

```css
.hero {
    background-image: url('images/garlic-field.jpg');
    background-size: cover;
    background-position: center;
}
```

### 5. Colors and Branding

Update the color scheme in `styles.css` by changing the CSS variables:

```css
:root {
    --primary-color: #2d5016;    /* Your brand green */
    --secondary-color: #1a2e0a;  /* Darker green */
    --text-color: #333;          /* Main text color */
    --light-bg: #f8f9fa;         /* Light background */
}
```

### 6. Social Media Links

Update the footer social links (around line 180 in index.html):

```html
<div class="social-links">
    <a href="https://facebook.com/yourpage">Facebook</a>
    <a href="https://instagram.com/yourpage">Instagram</a>
    <a href="https://twitter.com/yourpage">Twitter</a>
</div>
```

## Deployment Options

### Option 1: Static Hosting (Recommended)

1. **Netlify** (Free):
   - Drag and drop your folder to netlify.com
   - Automatic HTTPS and custom domain support

2. **Vercel** (Free):
   - Connect your GitHub repository
   - Automatic deployments

3. **GitHub Pages** (Free):
   - Upload files to a GitHub repository
   - Enable GitHub Pages in settings

### Option 2: Traditional Web Hosting

1. Upload all files to your web hosting provider
2. Ensure index.html is in the root directory
3. Configure your domain to point to the hosting

### Option 3: Local Development

To test locally:

1. Open `index.html` in a web browser
2. Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   ```

## Contact Form Integration

The contact form currently shows an alert. To make it functional:

### Option 1: Netlify Forms (Easiest)
Add `netlify` attribute to the form tag:
```html
<form netlify>
```

### Option 2: Formspree
1. Sign up at formspree.io
2. Update form action:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 3: EmailJS
1. Sign up at emailjs.com
2. Add EmailJS script and configure in script.js

## SEO Optimization

1. Add meta description in the `<head>`:
```html
<meta name="description" content="Premium garlic from Locust Grove Farms. Sustainably grown, hand-harvested garlic varieties with exceptional flavor.">
```

2. Add structured data for local business
3. Create a sitemap.xml
4. Add Google Analytics tracking

## Performance Tips

1. Optimize images (use WebP format when possible)
2. Minify CSS and JavaScript for production
3. Enable gzip compression on your server
4. Use a CDN for faster loading

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## License

This website template is created for Locust Grove Farms. Feel free to modify and use as needed.

## Support

For questions about customizing this website, you can:
1. Modify the code directly
2. Consult web development documentation
3. Hire a web developer for advanced modifications

---

**Note**: Remember to replace placeholder content with your actual farm information, add real photos, and test the contact form before going live!
