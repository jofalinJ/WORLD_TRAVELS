# WORLD TRAVELS — Journeys Beyond Reality

Cinematic Smart Travel Planner for Experiment 8.

## Run

This is a zero-build static website.

Open `index.html` directly in a browser, or use a simple local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Project structure

```text
WORLD_TRAVELS/
├── index.html
├── style.css
├── script.js
└── CREDITS.md
```

## Included features

- JavaScript destination/world objects
- Dynamic destination cards
- Live world switching
- Movie-world sub-scenery switching
- Travel dates and traveller count
- Date-object trip-duration calculation
- Days-until-departure countdown
- Fictional world currencies
- Math-based trip-cost estimate
- Journey-type selection
- Form validation
- Dynamic journey ticket
- World passport saved with localStorage
- Image preview modal
- Responsive CSS Grid/Flexbox
- Ambient particles
- Cursor glow
- Moving world ticker
- Cinematic image transitions
- World-specific accent colors
- Live world indicator
- Hover/transition/animation effects

## Important image rule

The app intentionally does **not** use Unsplash, Pexels, stock photography, or generic landscape placeholders. Image URLs in `script.js` point to recognizable franchise/movie-world imagery or official franchise-location imagery. Each active sub-scenery has its own image reference.

Some external image hosts may change URLs, rate-limit hotlinking, or apply their own usage restrictions. Review the source terms before public/commercial deployment and replace the remote URLs with properly licensed local assets when needed.
