# Complete GitHub Setup Instructions for Portfolio Website

## 📋 Prerequisites

Before starting, make sure you have:
- Node.js (v18 or higher) installed on your computer
- Git installed
- A GitHub account
- A code editor (VS Code recommended)

## 🚀 Step-by-Step GitHub Setup

### 1. Create a New GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" button in the top right corner
3. Select "New repository"
4. Repository name: `portfolio-website` (or your preferred name)
5. Description: "Modern tech-themed portfolio website showcasing full-stack development experience"
6. Set to **Public** (so it can be deployed later)
7. **DO NOT** initialize with README, .gitignore, or license (we have these files ready)
8. Click "Create repository"

### 2. Upload All Project Files to GitHub

#### Option A: Using Git Command Line (Recommended)

1. Open terminal/command prompt on your computer
2. Navigate to where you want to store the project:
   ```bash
   cd Desktop  # or your preferred location
   ```

3. Clone this repository structure or create the project folder:
   ```bash
   mkdir portfolio-website
   cd portfolio-website
   ```

4. Initialize Git and connect to your GitHub repository:
   ```bash
   git init
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
   ```
   Replace `YOUR_USERNAME` and `YOUR_REPOSITORY_NAME` with your actual GitHub username and repository name.

5. Copy all the files I've created into this folder (see file structure below)

6. Add, commit, and push all files:
   ```bash
   git add .
   git commit -m "Initial commit: Complete portfolio website setup"
   git branch -M main
   git push -u origin main
   ```

#### Option B: Using GitHub Web Interface

1. In your new GitHub repository, click "uploading an existing file"
2. Drag and drop all the project files into the upload area
3. Commit the files with message: "Initial commit: Complete portfolio website setup"

### 3. Complete File Structure to Upload

Make sure you have all these files in your project folder:

```
portfolio-website/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/
│   │   │   │   ├── button.tsx
│   │   │   │   ├── card.tsx
│   │   │   │   ├── input.tsx
│   │   │   │   ├── label.tsx
│   │   │   │   ├── sheet.tsx
│   │   │   │   ├── textarea.tsx
│   │   │   │   ├── toast.tsx
│   │   │   │   ├── toaster.tsx
│   │   │   │   └── tooltip.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   ├── EducationSection.tsx
│   │   │   ├── ExperienceSection.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── Navigation.tsx
│   │   │   ├── Portfolio.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   └── SkillsSection.tsx
│   │   ├── hooks/
│   │   │   └── use-toast.ts
│   │   ├── lib/
│   │   │   ├── queryClient.ts
│   │   │   └── utils.ts
│   │   ├── pages/
│   │   │   └── not-found.tsx
│   │   ├── App.tsx
│   │   ├── index.css
│   │   └── main.tsx
│   └── index.html
├── server/
│   ├── index.ts
│   ├── routes.ts
│   ├── storage.ts
│   └── vite.ts (existing)
├── shared/
│   └── schema.ts
├── assets/
│   └── (place your resume PDF here as 'Revanth_Resume_DataEng.pdf')
├── .gitignore
├── README.md
├── SETUP_INSTRUCTIONS.md (this file)
├── components.json
├── drizzle.config.ts (existing)
├── package.json (existing)
├── postcss.config.js (existing)
├── tailwind.config.ts (existing)
├── tsconfig.json (existing)
└── vite.config.ts (existing)
```

# Setup Instructions (Client-Only)

This project is now frontend-only. All server-side setup steps have been removed.

## Running the Client

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

The app will be available at the local address shown in your terminal.

## 🎨 Customization Options

### Update Personal Information

1. **Contact Details**: Edit `client/src/components/ContactSection.tsx`
2. **About Me**: Edit `client/src/components/AboutSection.tsx`
3. **Experience**: Edit `client/src/components/ExperienceSection.tsx`
4. **Education**: Edit `client/src/components/EducationSection.tsx`
5. **Projects**: Edit `client/src/components/ProjectsSection.tsx`
6. **Skills**: Edit `client/src/components/SkillsSection.tsx`

### Add Your Profile Photo

Replace the placeholder image URL in `client/src/components/HeroSection.tsx`:
```tsx
// Find this line and replace with your photo URL
src="YOUR_PHOTO_URL_HERE"
```

### Update Project Links

In `client/src/components/ProjectsSection.tsx`, update the `links` object for each project:
```tsx
links: {
  demo: "https://your-live-demo-url.com",
  github: "https://github.com/your-username/your-project"
}
```

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Sign up with your GitHub account
3. Click "Import Project"
4. Select your portfolio repository
5. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Deploy!

### Option 2: Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign up with your GitHub account
3. Click "New site from Git"
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Deploy!

### Option 3: GitHub Pages

1. In your GitHub repository, go to Settings
2. Scroll to "Pages" section
3. Select source: "GitHub Actions"
4. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## 📱 Features Included

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark tech theme with blue-greenish colors
- ✅ Smooth scrolling navigation
- ✅ Animated skill progress bars
- ✅ Hover effects and transitions
- ✅ Contact form with email integration
- ✅ Resume download functionality
- ✅ Social media links
- ✅ SEO optimized
- ✅ Modern tech stack (React, TypeScript, Tailwind CSS)

## 🔧 Technology Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express
- **Icons**: Font Awesome
- **Fonts**: Inter, Roboto, Poppins
- **Build Tool**: Vite
- **Styling**: Custom CSS animations + Tailwind

## 📞 Support

If you encounter any issues:

1. Make sure all files are in the correct locations
2. Run `npm install` to ensure all dependencies are installed
3. Check that Node.js version is 18 or higher
4. Ensure your resume PDF is named correctly and placed in the `assets` folder

## 🎯 Next Steps After Setup

1. Customize all content with your personal information
2. Add your actual profile photo
3. Update project links to your real repositories
4. Test the contact form
5. Deploy to your preferred hosting platform
6. Share your portfolio URL!

Your portfolio website is now ready to showcase your skills and experience professionally!