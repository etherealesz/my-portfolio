# Enardo Stefanus - Portfolio Website

A modern, responsive portfolio website built with React, Three.js, and Tailwind CSS featuring a stunning 3D interactive hero section.

## 🚀 Features

- **3D Interactive Hero Section**: Full-screen Three.js canvas with animated geometric shapes and particle effects
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **Dark Theme**: Modern dark color scheme with smooth animations
- **Smooth Scrolling**: Navigation with smooth scroll-to-section functionality
- **Contact Form**: Interactive contact form with validation
- **Project Showcase**: Detailed project cards with technology tags
- **Skills Section**: Visual representation of technical skills

## 🛠️ Technologies Used

- **Frontend**: React 18 with functional components and hooks
- **3D Graphics**: Three.js with React Three Fiber
- **Styling**: Tailwind CSS with custom animations
- **Build Tool**: Vite for fast development and building
- **Icons**: Custom emoji icons for a clean, modern look

## 📦 Installation & Setup

### Prerequisites

Make sure you have Node.js (version 16 or higher) installed on your system:
- Download from [nodejs.org](https://nodejs.org/)
- Verify installation: `node --version` and `npm --version`

### Step 1: Clone or Download the Project

If you haven't already, download or clone this project to your local machine.

### Step 2: Install Dependencies

Open your terminal/command prompt and navigate to the project directory:

```bash
cd "\Portfolio Website"
```

Install all required dependencies:

```bash
npm install
```

This will install:
- React and React DOM
- Three.js and React Three Fiber
- Tailwind CSS and PostCSS
- Vite build tool
- All other necessary dependencies

### Step 3: Start the Development Server

Run the development server:

```bash
npm run dev
```

The website will be available at `http://localhost:3000` and should automatically open in your browser.

### Step 4: Build for Production (Optional)

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` folder, ready for deployment.

## 🎨 Customization

### Personal Information

Edit the following in `src/App.jsx`:

1. **Name and Title**: Update the hero section text
2. **About Section**: Modify the biography and professional background
3. **Skills**: Add or remove skills in the skills array
4. **Projects**: Update project information, images, and links
5. **Contact**: Update email, location, and social media links

### Styling

- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Fonts**: Change fonts in `index.css` and `tailwind.config.js`
- **Animations**: Adjust animation timings in `tailwind.config.js`

### 3D Scene

The Three.js scene can be customized in the `Scene` component:
- Modify `AnimatedSphere` for different shapes
- Adjust `Particles` for different particle effects
- Change colors and materials in the components

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Troubleshooting

### Common Issues

1. **Port already in use**: Change the port in `vite.config.js`
2. **Three.js not loading**: Ensure all dependencies are installed
3. **Styling issues**: Check if Tailwind CSS is properly configured
4. **Build errors**: Clear node_modules and reinstall dependencies

### Performance Optimization

- The 3D scene is optimized for performance
- Images are loaded from Unsplash (replace with your own)
- Animations use CSS transforms for better performance

## 📄 Project Structure

```
Portfolio Website/
├── src/
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles and Tailwind imports
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── README.md           # This file
```

## 🎯 Key Features Explained

### 3D Hero Section
- Uses React Three Fiber for React integration with Three.js
- Animated sphere with distortion material
- Particle system for visual effects
- Mouse interaction with OrbitControls

### Navigation
- Sticky navigation bar with active section highlighting
- Smooth scrolling between sections
- Mobile-responsive hamburger menu

### Projects Section
- Responsive grid layout
- Project cards with hover effects
- Technology tags for each project
- Links to live demos and GitHub repositories

### Contact Form
- Form validation
- State management with React hooks
- Responsive design
- Social media integration

## 🤝 Contributing

Feel free to fork this project and submit pull requests for improvements.

## 📞 Support

If you encounter any issues or have questions, please create an issue in the repository or contact me directly.

---

**Built with ❤️ by Enardo Stefanus**
