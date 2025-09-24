# Dr. Robert Love - Professional Medical Website

A modern, responsive website for Associate Professor Robert Love, FRACS - Plastic & Reconstructive Surgeon specializing in hand surgery, breast surgery, body contouring, and skin cancer surgery.

## 🏥 Features

### Interactive Surgical Animations
- **Hand Surgery**: Animated demonstrations of hand procedures including carpal tunnel and reconstructive surgery
- **Breast Surgery**: Visual guides for breast reconstruction and augmentation procedures
- **Body Contouring**: Liposuction and body lift procedure animations
- **Skin Cancer Surgery**: Lesion removal and reconstruction techniques
- **Reconstructive Surgery**: Complex tissue transfer and microsurgical procedures

### Professional Information
- Comprehensive qualifications and achievements
- 20+ years of surgical experience
- Fellowship qualifications (FRACS)
- Multiple hospital affiliations
- Professional memberships and awards

### Modern Design
- Fully responsive design for all devices
- Professional medical aesthetic
- Smooth animations and interactions
- SEO optimized
- Accessibility compliant

## 🚀 Technology Stack

- **Frontend**: Pure HTML5, CSS3, JavaScript (ES6+)
- **Hosting**: Firebase Hosting
- **CI/CD**: GitHub Actions
- **Animations**: Custom CSS animations and JavaScript interactions
- **Icons**: Font Awesome 6
- **Typography**: System fonts for optimal performance

## 📁 Project Structure

```
Rob_love/
├── public/                 # Firebase hosting directory
│   ├── index.html         # Main website file
│   ├── styles.css         # Main stylesheet
│   ├── animations.css     # Surgical animation styles
│   └── animations.js      # Interactive functionality
├── .github/workflows/     # GitHub Actions CI/CD
│   └── firebase-hosting.yml
├── firebase.json          # Firebase configuration
├── package.json          # Project dependencies
└── README.md             # Project documentation
```

## 🔧 Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/0scarTheCoder/Rob_love.git
   cd Rob_love
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the website

## 🚀 Deployment

### Automatic Deployment
The website automatically deploys to Firebase Hosting when changes are pushed to the `main` branch via GitHub Actions.

### Manual Deployment
1. **Login to Firebase**
   ```bash
   firebase login
   ```

2. **Initialize Firebase project** (one-time setup)
   ```bash
   firebase init hosting
   ```

3. **Deploy to Firebase**
   ```bash
   npm run deploy
   ```

## 🔐 Environment Setup

### Firebase Configuration
Add these secrets to your GitHub repository:

1. `FIREBASE_PROJECT_ID`: Your Firebase project ID
2. `FIREBASE_SERVICE_ACCOUNT`: Firebase service account JSON (base64 encoded)

### Local Firebase Setup
1. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Hosting
3. Install Firebase CLI: `npm install -g firebase-tools`
4. Login: `firebase login`
5. Initialize: `firebase init hosting`

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: 1200px+ (full layout with side-by-side content)
- **Tablet**: 768px-1199px (adjusted grid layouts)
- **Mobile**: 320px-767px (stacked layout, hamburger menu)

## 🎨 Design Features

### Color Scheme
- **Primary Blue**: #1e3a8a (medical professional)
- **Secondary Blue**: #3b82f6 (interactive elements)
- **Accent Gold**: #fbbf24 (highlights and stats)
- **Text**: #374151 (high contrast reading)
- **Background**: #f8f9fa (clean, clinical)

### Typography
- **Headings**: Segoe UI (professional, clean)
- **Body**: System fonts for optimal performance
- **Sizes**: Responsive scaling from 14px (mobile) to 18px (desktop)

## 🔍 SEO Optimization

- Semantic HTML5 structure
- Meta tags for search engines
- Open Graph tags for social sharing
- Structured data for medical professionals
- Fast loading times (<3 seconds)
- Mobile-first responsive design

## ♿ Accessibility Features

- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader optimization
- High contrast ratios
- Focus indicators
- Alt text for all images

## 🧪 Testing

### Browser Compatibility
- Chrome 90+
- Firefox 90+
- Safari 14+
- Edge 90+

### Device Testing
- iOS Safari (iPhone/iPad)
- Android Chrome
- Desktop browsers
- Various screen sizes (320px to 4K)

## 🚀 Performance

### Optimization Features
- Minified CSS and JavaScript
- Optimized images
- Efficient animations (60fps)
- Lazy loading where appropriate
- CDN delivery via Firebase Hosting

### Performance Metrics
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1
- **Time to Interactive**: <3.5s

## 🔒 Security

- HTTPS enforced
- Content Security Policy headers
- No sensitive information exposed
- Secure contact form handling
- Regular dependency updates

## 📞 Contact Information

**Associate Professor Robert Love, FRACS**
- **Address**: 17 Richardson Street, West Perth WA 6005
- **Phone**: 08 9321 3344
- **Fax**: 08 9321 3355  
- **Email**: drrobertloveplasticsurgeon@gmail.com
- **EDI**: robllove

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

This is a professional medical website. For suggestions or improvements, please contact the development team.

---

**Built with ❤️ for exceptional patient education and professional medical presentation.**
