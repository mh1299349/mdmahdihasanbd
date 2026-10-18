# Md Mahdi Hasan — Personal Portfolio Website
### Graphic Designer & Video Editor

A premium, editorial personal portfolio website designed for **Md Mahdi Hasan** to showcase creative work, attract freelance clients, and convert visitors into project inquiries.

---

## 🎨 Visual Identity & Palette
- **Canvas:** Off-White (`#F7F7F2`)
- **Typography & High Contrast:** Charcoal (`#20211F`)
- **Action Accent:** Lime Green (`#B7F34A`)
- **Subtle Hairlines & Dividers:** Neutral Warm Grey (`#E5E5DF`)

---

## 🚀 Quick Start (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Create a production build
npm run build

# 4. Preview the production build locally
npm run preview
```

---

## 📁 Content & Asset Customization Guide

All data, text, projects, and contact channels are centralized in a single configuration file:
```
src/data/portfolioData.ts
```

### 1. Adding or Modifying Projects
In `src/data/portfolioData.ts`, each project under `projects` contains:
- `title`: Name of the project
- `category`: 'Brand Identity' | 'Logo Design' | 'Social Media Design' | 'Advertising & Posters' | 'YouTube Thumbnails' | 'Video Editing & Reels'
- `year`: e.g. "2025"
- `shortDescription`: 1–2 sentence summary
- `coverImage`: Path or imported asset
- `aspectRatio`: '16:9' | '4:3' | '3:4' | '1:1'
- `caseStudy`: Detailed objective, creative direction, design process, colors, typography, deliverables, and gallery slides.

### 2. Updating Profile Photo
The official profile photo is configured in `SITE_DATA.personal.profilePhoto` in `src/data/portfolioData.ts`. Currently set to your Cloudinary URL:
`https://res.cloudinary.com/flqltzdw/image/upload/v1791728834/WhatsApp_Image_2026-09-06_at_9.04.41_PM.jpg`

### 3. Updating Showreel Video
In `SITE_DATA.showreel`:
- `videoUrl`: Replace with your own hosted MP4 link, Vimeo URL, or YouTube link.
- `posterImage`: Video poster still.

### 4. Updating Contact Links
In `SITE_DATA.personal`:
- `email`: `mdmahdiofficials@gmail.com`
- `phone`: `+8801718014437`
- `whatsappUrl`: `https://wa.me/8801718014437`
- `facebookUrl`: `https://www.facebook.com/MdMahdiHasan.Official`

---

## 🌐 Free Deployment Guide

### Option 1: Vercel (Fastest & Free SSL)
1. Push this repository to your GitHub account (`git init`, `git add .`, `git commit -m "Initial commit"`, `git push`).
2. Go to [Vercel](https://vercel.com) and click **Add New > Project**.
3. Import your GitHub repository.
4. Framework Preset: **Vite** (auto-detected).
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click **Deploy**. Your portfolio will be live in ~30 seconds with a free `.vercel.app` domain.

### Option 2: Netlify
1. Drag and drop the `dist/` folder into Netlify Drop, or connect your GitHub repository on Netlify.
2. Build command: `npm run build`
3. Publish directory: `dist`

### Connecting a Custom Domain (e.g. `mdmahdihasan.com`)
1. In your Vercel or Netlify dashboard, go to **Settings > Domains**.
2. Add your custom domain (e.g., `mdmahdihasan.com` or `www.mdmahdihasan.com`).
3. Add the DNS records (A Record: `76.76.21.21` or CNAME) in your domain registrar (Namecheap, GoDaddy, Cloudflare, etc.).
4. In `index.html`, update `<link rel="canonical" href="https://yourdomain.com" />`.

---

## 🛠 Tech Stack
- **Framework:** React 19 + TypeScript
- **Bundler:** Vite
- **Styling:** Tailwind CSS v4
- **Typography:** Manrope & Plus Jakarta Sans (Google Fonts)
- **Icons:** Lucide React
