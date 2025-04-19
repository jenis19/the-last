# Brewster Village Marketplace Layout

## Structure
The homepage layout consists of:

1. **Custom Header**
   - Logo: "BREWSTER VILLAGE MARKETPLACE"
   - Navigation: Shop, Deli, About, Visit Us, Contact
   - Mobile menu toggle for responsive design

2. **Hero Section**
   - Full-screen background image
   - Overlay to darken image and improve text readability
   - Heading: "Welcome to Brewster Village Marketplace"
   - Subheading: "Your Local Spot for Beer, Wine, Deli & More"
   - Two CTA buttons: "Shop Now" and "View Deli Menu"

3. **Featured Products**
   - Grid display of 4 featured products
   - "View All" link to the full product collection

4. **About Section**
   - Image and text layout
   - Heading: "About Brewster Village Marketplace"
   - Description paragraph
   - "Learn More" CTA button

## Styling
- Modern, clean design
- Font families: 'Playfair Display' for headings, 'Inter' for body text
- Transparent header overlay on the hero image
- Mobile-responsive layout with hamburger menu
- White text on dark backgrounds for contrast and readability
- Hover effects on buttons and navigation links

## Technical Implementation
- Custom CSS file: `brewster-custom.css`
- Custom Liquid section files:
  - `brewster-header.liquid`
  - `brewster-hero.liquid`
- Modified homepage template: `index.json`
- Google Fonts integration for typography 