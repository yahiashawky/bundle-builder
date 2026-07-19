# Frontend Bundle Builder

A React implementation of the Bundle Builder take-home assignment.

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- Zustand
- JavaScript (ES6)

## Features

- Multi-step accordion bundle builder
- Data-driven UI using a local JSON file
- Product variant selection
- Variant-specific quantity management
- Live review panel
- Dynamic price calculation
- Savings calculation
- Responsive design (Desktop, Tablet, Mobile)
- LocalStorage persistence ("Save my system for later")

## Project Structure

```
src/
 ├── components/
 │   ├── accordion/
 │   ├── product/
 │   ├── review/
 │   └── BundleBuilder/
 ├── data/
 ├── store/
 ├── utils/
 └── App.jsx
```

## Getting Started

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open:

```
http://localhost:5173
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## State Management

The application uses Zustand to manage:

- Product quantities
- Selected variants
- Bundle state
- Local persistence

## Data

All products are rendered from a local JSON file located in:

```
src/data/products.json
```

The application is completely data-driven, allowing products and categories to be modified without changing the UI components.

## Notes

- The review panel updates in real time.
- Each product variant maintains its own quantity.
- The selected bundle can be saved and restored using LocalStorage.
- The UI is responsive across desktop, tablet, and mobile screen sizes.
- I can't undersdant some of structure of design 
- I can make the backend with Supabase, but i don't have enough time beacase i have some another projects i have to do.
- thank you 
