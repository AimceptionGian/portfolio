# Status

_Stand: 2026-11-22_

## Ziel
Portfolio (CRA + react-router) modern überarbeiten, Look bleibt: dunkel #282c34, Weiss, Orbitron, Slide-Buttons.

## Entschieden
- Fliesstext in Inter, Orbitron nur für Titel/Buttons (Orbitron 900 als Fliesstext schlecht lesbar)
- Startseite: Name als zwei übereinanderliegende Ebenen mit clip-path an `--split` (responsive statt fester Gradient-Prozente)
- Gemeinsame Komponenten in `src/components/` (Nav, Footer, Reveal); alles CSS in `src/index.css`
- Projekttitel/Tags auf Referenzen aus den bestehenden Texten abgeleitet

## Stand
- Erledigt: Redesign aller 4 Seiten, Commit 041abc2 (gepusht); Build grün (`.claude/checks.json`)
- Ungeprüft: echtes Mobile-Verhalten (Tippen auf Projektbild zeigt Galerie, Kacheln) – `npm start`, im Handy/DevTools-Gerätemodus testen
- Ungeprüft: Hover-Galerie und Scroll-Animationen live – im Browser durchscrollen

## Nächster Schritt
1. Gian schaut die Seite mit `npm start` an und meldet Wünsche

Empfohlenes Modell: sonnet (Feinschliff nach bestehendem Muster)

## Achtung
- `src/App.test.js` ist der CRA-Standardtest („learn react“) und schlägt fehl; nicht angepasst, darum nicht in checks.json
- Headless-Edge rendert mindestens 492 px breit: Mobile-Screenshots mit `--window-size=390` sind abgeschnitten, nicht kaputt
- Bilder gross (PNG bis 1,5 MB); Komprimieren wäre ein eigener Schritt
- Kontakttext „Praktikum im Sommer“ evtl. veraltet (unverändert übernommen)
