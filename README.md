# Glory Duck Restaurant Website Clone

Ein moderner Clone der Glory Duck Restaurant Website mit responsivem Design.

## Features

- ✅ Responsive Design (Mobile, Tablet, Desktop)
- ✅ Hero Slider mit automatischem Wechsel
- ✅ Smooth Scrolling Navigation
- ✅ Animationen beim Scrollen
- ✅ Social Media Integration
- ✅ Back-to-Top Button
- ✅ Mobile-freundliches Menü

## Verwendete Technologien

- **HTML5** - Semantisches Markup
- **CSS3** - Moderne Styles mit Flexbox und Grid
- **JavaScript (ES6+)** - Interaktive Funktionen
- **Bootstrap 5.3** - Responsive Framework
- **Swiper.js** - Touch-fähiger Slider
- **Font Awesome 6** - Icons
- **Google Fonts** - Open Sans Schriftart

## Installation

1. Klonen Sie das Repository oder laden Sie die Dateien herunter
2. Öffnen Sie `index.html` in Ihrem Browser

```bash
# Mit einem lokalen Server (empfohlen)
npx serve
# oder
python -m http.server 8000
```

## Dateistruktur

```
glory-duck-clone/
│
├── index.html          # Hauptseite
├── style.css           # Stylesheet
├── script.js           # JavaScript Funktionen
├── README.md           # Diese Datei
│
└── assets/             # Bilder und Medien (zu erstellen)
    ├── logo.png
    ├── logo-large.png
    ├── hero-1.jpg
    ├── hero-2.jpg
    ├── hero-3.jpg
    ├── about-1.jpg
    ├── about-2.jpg
    ├── menu-bg.jpg
    └── reservation-bg.jpg
```

## Assets benötigt

Erstellen Sie einen `assets` Ordner und fügen Sie folgende Bilder hinzu:

1. **logo.png** - Kleines Logo für Header (ca. 50px Höhe)
2. **logo-large.png** - Großes Logo für Hero Section (ca. 400px Breite)
3. **hero-1.jpg, hero-2.jpg, hero-3.jpg** - Hero Slider Bilder (1920x1080px)
4. **about-1.jpg, about-2.jpg** - Über Uns Bilder (270x400px)
5. **menu-bg.jpg** - Hintergrundbild für Menü Section (1920x1080px)
6. **reservation-bg.jpg** - Hintergrundbild für Reservierung (1920x1080px)

## Anpassungen

### Farben ändern

In `style.css` können Sie die Hauptfarben anpassen:

```css
:root {
    --primary-color: #ef343a;    /* Hauptfarbe (Rot) */
    --secondary-color: #222222;  /* Sekundärfarbe (Dunkelgrau) */
    --bg-dark: #000000;          /* Dunkler Hintergrund */
    --bg-light: #111111;         /* Heller Hintergrund */
}
```

### Inhalte ändern

Bearbeiten Sie `index.html` um Texte, Links und Inhalte anzupassen.

### Navigation

Fügen Sie neue Menüpunkte in der Navigation hinzu:

```html
<li class="nav-item">
    <a class="nav-link" href="#ihre-section">Ihr Link</a>
</li>
```

## Browser-Kompatibilität

- ✅ Chrome (neueste Version)
- ✅ Firefox (neueste Version)
- ✅ Safari (neueste Version)
- ✅ Edge (neueste Version)
- ✅ Mobile Browser (iOS Safari, Chrome Mobile)

## Performance-Tipps

1. Optimieren Sie Bilder (WebP Format, komprimiert)
2. Verwenden Sie Lazy Loading für Bilder
3. Minimieren Sie CSS und JavaScript für Production
4. Nutzen Sie CDN für externe Bibliotheken

## Lizenz

Dieses Projekt ist ein Klon zu Demonstrationszwecken. Alle Rechte am Original-Design liegen bei Glory Duck Restaurant.

## Kontakt

Für Fragen oder Anpassungen kontaktieren Sie bitte den Entwickler.
