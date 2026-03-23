# Vue Portfolio Website

A minimalistic, professional portfolio website built with **Vue.js 3** and **Tailwind CSS**.

## Features

✨ **Minimalistic Design** - Clean, no AI gradients, just pure elegance
- Black background with white text
- Emerald green accent color for interactions
- Maximum 3 colors throughout
- Professional, responsive layout

🎨 **Components**
- **Liquid Glass Navigation** - Frosted glass effect with backdrop blur
- **Home Page** - Striking headline with introduction
- **Projects Page** - Showcase of projects with images, descriptions, and skill tags
- **Contact Page** - Professional contact form
- **Mobile Responsive** - Works seamlessly on all screen sizes

## Tech Stack

- **Vue.js 3** - Progressive JavaScript framework
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Lightning-fast build tool
- **Font** - Inter (minimalistic and clean)

## Color Scheme

- **Primary**: Black (`#000000`) - Background
- **Secondary**: White (`#FFFFFF`) - Text
- **Accent**: Emerald Green (`#10b981`) - Hover effects, buttons, highlights

## Installation

1. **Clone or navigate to the project directory**
```bash
cd vuePortfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```
The site will automatically open at `http://localhost:5173`

4. **Build for production**
```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Navigation.vue      # Liquid glass navigation bar
│   └── ProjectCard.vue     # Individual project card component
├── pages/
│   ├── Home.vue            # Welcome/home page
│   ├── Projects.vue        # Projects showcase
│   └── Contact.vue         # Contact form page
├── App.vue                 # Main app component with routing logic
├── main.js                 # Vue app initialization
└── style.css               # Tailwind imports and globals
```

## Customization

### Update Your Information
- **Home.vue**: Change the heading and introduction text
- **Projects.vue**: Add/remove projects from the `projects` array
- **Navigation**: Update the "Portfolio" logo text
- **Contact**: Integrate with your email service

### Add Projects
Edit `src/pages/Projects.vue` and add to the `projects` array:
```javascript
{
  id: 5,
  title: 'Your Project',
  description: 'Project description here',
  image: 'image-url',
  skills: ['Skill1', 'Skill2']
}
```

### Colors
To change colors globally, edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#000000',      // Background
  secondary: '#ffffff',    // Text
  accent: '#10b981'        // Hover/buttons
}
```

## Features Implemented

✅ Liquid glass navigation with responsive mobile menu
✅ Clean minimalistic design with only 3 colors
✅ Fully responsive on mobile, tablet, and desktop
✅ Smooth transitions and hover effects
✅ Professional typography with Inter font
✅ Project showcase with skill tags
✅ Contact form with basic validation
✅ No AI gradients - pure, clean design

## License

Free to use and modify as needed.

---

Made with Vue.js & Tailwind CSS
