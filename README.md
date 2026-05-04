# new_siciliainfamiglia_claude-kimi_OFFICAL#

Landing page ottimizzata per conversioni — versione 5.0 con fix critici, conversion boost e strategia.

## 📁 Struttura del Progetto

```
sicilia-in-famiglia-v2/
├── index.html              # Pagina principale (completa, v5.0)
├── css/
│   └── style.css           # Stili completi (responsive, fix contrasto)
├── js/
│   └── main.js             # Interattività, carousel, FAQ, calcolatore
├── images/
│   ├── destinations/       # 7 destinazioni
│   │   ├── palermo.jpg
│   │   ├── agrigento.jpg
│   │   ├── cefalu.jpg
│   │   ├── taormina.jpg
│   │   ├── catania.jpg
│   │   ├── siracusa.jpg
│   │   └── isole-eolie.jpg
│   ├── hero/
│   │   └── hero-main.jpg
│   ├── icons/
│   │   ├── favicon.png
│   │   ├── logo-gb-viaggi.png
│   │   └── logo-sicilia-famiglia.png
│   ├── testimonials/
│   │   ├── avatar-1.jpg
│   │   ├── avatar-2.jpg
│   │   └── avatar-3.jpg
│   └── og-image.jpg        # 1200x630 per sharing (da creare)
└── README.md
```

## 🚀 Deploy su GitHub Pages

1. Crea un nuovo repository su GitHub (es. `sicilia-in-famiglia-v2`)
2. Carica tutti i file mantenendo la struttura delle cartelle
3. Vai su **Settings > Pages**
4. Seleziona il branch `main` e cartella `/ (root)`
5. Il sito sarà disponibile su `https://tuousername.github.io/sicilia-in-famiglia-v2/`

**IMPORTANTE:** Ricordati di aggiornare l'URL nell'OG meta tag in `index.html`:
```html
<meta property="og:url" content="https://TUO-USERNAME.github.io/sicilia-in-famiglia-v2/">
```

## 🎯 Novità v5.0 (rispetto a v4.1)

### Livello 1 — Fix Critici ✅
- **Contrasto hero fixato**: overlay scuro 88% → testo bianco puro, WCAG AA compliant
- **Lazy-load fixato**: card destinazioni e "Come funziona" sempre visibili anche senza JS
- **Micro-copy prezzo**: "a persona al giorno, colazione inclusa" — chiude ambiguità
- **CTA hero**: "Ricevi 3 proposte su misura" + subline con garanzie
- **Trust badges spostati sopra CTA** nella hero
- **Meta OG** completo (title, description, image 1200x630)
- **Footer legale**: P.IVA, privacy, cookie, dati GB Viaggi

### Livello 2 — Conversion Boost 🚀
- **Form fallback email** accanto a WhatsApp: nome, email, telefono, bambini, età, periodo, destinazione, note
- **8 testimonianze in carousel** con foto, età bambini, destinazione, periodo
- **Sezione FAQ** con 8 domande (bambini, culla, cancellazione, rateale, animali, volo, allergie, distanza mare)
- **Urgenza onesta**: "Più di 50 famiglie hanno prenotato con noi quest'anno"
- **Scarcity badge** sulle destinazioni: "Più richiesta", "Solo 2 strutture", "Esclusivo"
- **3 pacchetti predefiniti**: Sicilia Mare Famiglia (7n), Tour Culturale Kids (5n), Lowcost 3 Notti
- **Headline segmentata**: "PER FAMIGLIE CON BAMBINI"
- **Nav CTA desktop**: "Chiedi preventivo" visibile in header

### Livello 3 — Strategia 📈
- **Calcolatore prezzo interattivo**: stima indicativa con disclaimer bambini
- **Garanzia forte closing**: "Se in 24h non trovi nulla che ti convince, niente impegno, niente costi"
- **Copy posizionamento**: "consigliamo" invece di "selezioniamo" — chiaro ruolo di consulenza
- **Footer GB Viaggi**: dati legali completi del tour operator partner

## 📸 IMMAGINI DA CARICARE

### OBBLIGATORIE (mantieni i nomi esatti!)

| Cartella | Nome File | Contenuto |
|----------|-----------|-----------|
| `images/hero/` | `hero-main.jpg` | Vista panoramica Sicilia, famiglia al tramonto |
| `images/destinations/` | `palermo.jpg` | Palermo |
| `images/destinations/` | `agrigento.jpg` | Agrigento/Valle Templi |
| `images/destinations/` | `cefalu.jpg` | Cefalù |
| `images/destinations/` | `taormina.jpg` | Taormina |
| `images/destinations/` | `catania.jpg` | Catania/Etna |
| `images/destinations/` | `siracusa.jpg` | Siracusa/Ortigia |
| `images/destinations/` | `isole-eolie.jpg` | Isole Eolie |
| `images/testimonials/` | `avatar-1.jpg` | Foto testimonial 1 |
| `images/testimonials/` | `avatar-2.jpg` | Foto testimonial 2 |
| `images/testimonials/` | `avatar-3.jpg` | Foto testimonial 3 |
| `images/icons/` | `favicon.png` | Favicon |
| `images/icons/` | `logo-gb-viaggi.png` | Logo GB Viaggi |
| `images/icons/` | `logo-sicilia-famiglia.png` | Logo Sicilia in Famiglia |

### DA CREARE

| Cartella | Nome File | Dimensione | Contenuto |
|----------|-----------|------------|-----------|
| `images/` | `og-image.jpg` | 1200x630 | Headline + prezzo + foto Sicilia per sharing |

## 📱 Responsive

- **Desktop**: 1200px+ (4 colonne destinazioni, 3 testimonianze visibili)
- **Tablet**: 768px-1199px (3 colonne destinazioni, 2 testimonianze)
- **Mobile**: <768px (1-2 colonne, form full width, carousel swipe)

## ⚡ Performance

- Lazy loading immagini (tranne hero)
- Animazioni con Intersection Observer (con fallback visibile)
- CSS ottimizzato
- Font Google Fonts con preconnect
- SVG inline per icone
- Reduced motion support

## 📄 Note Legali

- P.IVA: "in fase di registrazione" (da aggiornare quando disponibile)
- Privacy/Cookie/Condizioni: link placeholder (da creare pagine separate)
- GB Viaggi: dati presi da privacy policy ufficiale (Be Hotels S.r.l., Via Giuseppe Pisanelli 1, Roma)

## 💡 Prossimi Step Suggeriti

1. Creare `og-image.jpg` 1200x630
2. Aggiornare URL OG meta con username GitHub reale
3. Aggiungere P.IVA reale quando disponibile
4. Creare pagine privacy/cookie/condizioni
5. Aggiungere Google Analytics 4 + Hotjar
6. Configurare WhatsApp Business API + chatbot
7. Creare lead magnet PDF "Sicilia con Bambini: 10 errori da evitare"

---

© 2026 Sicilia in Famiglia
