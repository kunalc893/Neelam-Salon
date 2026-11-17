# Neelam Classic Salon & Academy

Git-ready, responsive website project built with Vite. Includes five pages, supplied salon/rate-card images, mobile navigation, searchable service prices, and a clickable rate-card gallery.

## Run in VS Code
1. Install Node.js 20.19 or newer if it is not already installed. Then extract the ZIP and open the extracted `neelam-classic-salon` folder in VS Code (**File → Open Folder**).
2. Open **Terminal → New Terminal**. Make sure the terminal path is this project folder (the one containing `package.json`).
3. Run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL Vite prints in the terminal (usually `http://localhost:5173`). Keep the terminal running while viewing the site; press `Ctrl+C` to stop it.

Use `npm run build` to create an optimized production build in `dist/`.

## Push to GitHub
Create an empty GitHub repository, then run these commands in the project terminal (replace the URL with your repository URL):

```bash
git init
git add .
git commit -m "Add Neelam Classic Salon website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

You can also use VS Code's Source Control panel to initialize Git, commit and publish the project.

## Pages
- `index.html` — Home
- `about.html` — About
- `services.html` — Services
- `pricing.html` — Service charges and bridal packages
- `contact.html` — Contact and directions

This is a front-end website. Booking actions call the salon, and there is no server/database or online booking storage. Pricing was transcribed from the supplied rate-card photos; please confirm rates with the salon.

"# Neelam-Salon" 
