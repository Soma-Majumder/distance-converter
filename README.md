# Roadside Distance Converter

A small, scenic web app that converts distances between kilometers and miles in either direction. It is styled as a vintage car dashboard, complete with a brass-rimmed distance gauge, animated needle, and odometer-style result display.

**Live demo:** [distance-converter-classic.vercel.app](https://distance-converter-classic.vercel.app/)

## Highlights

- Convert kilometers to miles and miles to kilometers.
- Watch the dashboard needle respond to each converted result.
- Enjoy a sunny illustrated road-trip backdrop with trees, mountains, and a winding road.
- Works directly in a modern browser—no build tooling or dependencies needed.

## Usage

1. Enter a distance in the **Trip reading** field.
2. Choose **Kilometers → Miles** or **Miles → Kilometers** from **Conversion route**.
3. Click **Convert distance** to update the odometer and gauge.

## Running locally

```bash
npm start
```

This serves the app at `http://localhost:3000`.

Alternatively, open `index.html` directly in a browser, or serve the folder with any static file server, e.g.:

```bash
python3 -m http.server
```

## Tech

Plain HTML, CSS, and JavaScript — no build step or dependencies.
