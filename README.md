# DynamicWeb - İT Profil

Dynamický webový profil, který načítá data z JSON souboru pomocí JavaScriptu.

## 📋 Popis projektu

Tento projekt demonstruje vytvoření moderního webového profilu s dynamickým načítáním dat. Obsah se nenačítá z HTML, ale ze souboru `profile.json` pomocí Fetch API.

## 🚀 Technologie

- HTML5
- CSS3 (Grid, Flexbox, responzivní design)
- JavaScript (Fetch API, DOM API)
- JSON
- Git & GitHub Pages

## 📁 Struktura projektu

```
DynamicWeb/
├── index.html      # HTML struktura s prázdnými prvky
├── style.css       # Moderní styling a responsivní design
├── app.js          # JavaScript logika s fetch funkcionalitou
├── profile.json    # Data profilu (jméno, dovednosti, zájmy, projekty)
├── .gitignore      # Git ignore soubor
└── README.md       # Tento soubor
```

## 📝 profile.json struktura

```json
{
  "name": "Samuel Developer",
  "skills": ["HTML", "CSS", "JavaScript", "Git"],
  "interests": ["Web Development", "Open Source"],
  "projects": ["DynamicWeb Portfolio"]
}
```

## 🔧 Funkčnost app.js

- **loadProfile()** - Načítá `profile.json` pomocí Fetch API
- **renderProfile()** - Vkládá data do HTML prvků
- **displayError()** - Zobrazuje chybové zprávy při selhání
- Obsahuje **.catch()** pro ošetření chyb

## 📱 Responsivní design

Web je plně responsive a přizpůsuje se všem velikostem obrazovky.

## 🌐 GitHub Pages

Projekt je nasazen na GitHub Pages a lze ho zobrazit na: `https://samuel198745.github.io/DynamicWeb/`

## 📚 Jak spustit

1. Klonujte repozitář
2. Otevřete `index.html` v prohlížeči

## 📜 Git Historie

Projekt obsahuje čistou git historii s Conventional Commits:
- `feat(data)` - Přidání profile.json
- `feat(html)` - Vytvoření HTML struktury
- `style(css)` - Přidání CSS stylů
- `feat(js)` - Implementace JavaScript logiky
- `chore` - Údržba projektu
- `docs` - Dokumentace

---
*Projekt vytvořen v souladu s pokyny školního úkolu na vytvoření dynamického webu.*