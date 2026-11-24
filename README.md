# Freelancer Platform - Login, Dashboard, Profile, Settings & 404 Error

Pixel-perfect implementation of the Figma design (`ckVb2kOPWbiyInxrFrhohH`) for all 5 pages:
1. **Login Page** (`Desktop - 41`, Node `325:137`)
2. **Dashboard - My Applications** (`Desktop - 29`, Node `122:613`)
3. **Candidate Profile View for HRD** (`Desktop - 2`, Node `215:192`)
4. **Notification Settings** (`Desktop - 44`, Node `502:259`)
5. **404 Error Page** (`Desktop - 3`, Node `165:534`)

---

## Live Browser Links

- 🚫 **404 Error Page:** [http://localhost:5000/error.html](http://localhost:5000/error.html)
- ⚙️ **Notification Settings:** [http://localhost:5000/settings.html](http://localhost:5000/settings.html)
- 👤 **HRD Profile View:** [http://localhost:5000/profile.html](http://localhost:5000/profile.html)
- 📊 **Dashboard:** [http://localhost:5000/dashboard.html](http://localhost:5000/dashboard.html)
- 🔑 **Login Page:** [http://localhost:5000/index.html](http://localhost:5000/index.html)

---

## File Structure

```text
login-page/
├── index.html                 # Login page (HTML5 + CSS + JS)
├── dashboard.html             # Dashboard page (HTML5 + CSS + JS)
├── profile.html               # HRD Profile View page (HTML5 + CSS + JS)
├── settings.html              # Notification Settings page (HTML5 + CSS + JS)
├── error.html                 # 404 Error page (HTML5 + CSS + JS)
├── LoginPage.jsx              # React Login component (Tailwind CSS)
├── DashboardPage.jsx          # React Dashboard component (Tailwind CSS)
├── ProfilePage.jsx            # React Profile component (Tailwind CSS)
├── SettingsPage.jsx           # React Settings component (Tailwind CSS)
├── ErrorPage.jsx              # React 404 Error component (Tailwind CSS)
├── App.jsx                    # Root React wrapper with page switcher
├── server.ps1                 # Local HTTP server (port 5000)
├── README.md
└── assets/
    ├── background.png
    ├── mouse-pointer.svg
    ├── eye-closed.svg
    ├── google.svg
    ├── facebook.svg
    ├── dashboard/             # All 22 dashboard icons & assets
    ├── profile/               # All 17 profile banner, avatar, mockups & tool logos
    ├── settings/              # Settings icons & illustrations
    └── error/                 # 404 floating question mark SVGs
        ├── help-1.svg
        ├── help-2.svg
        └── help-3.svg
```
        ├── star-filled.svg    # Yellow star
        ├── star-empty.svg     # Gray star
        ├── mail.svg           # Email icon
        ├── phone.svg          # Phone icon
        ├── linkedin.svg       # LinkedIn link icon
        ├── work.svg           # Briefcase icon
        ├── clock.svg          # Clock icon
        ├── globe.svg          # Globe icon
        ├── link.svg           # Remote link icon
        └── arrow-forward.svg  # See more arrow
```
