# TenaBea

A modern short-term rental property discovery and booking platform built with Angular.

## Overview

TenaBea is a demo application showcasing a clean, user-friendly interface for browsing and exploring short-term rental properties. The platform displays curated property listings with detailed information including pricing, location, and amenities.

## Features

- **Property Listings**: Browse a collection of rental properties with high-quality images
- **Property Details**: View comprehensive information including title, location, price per night, and property tags
- **Responsive Design**: Mobile-first responsive layout that adapts to all screen sizes
- **Modern UI**: Clean and intuitive interface with consistent styling

## Tech Stack

- **Frontend Framework**: Angular 21
- **Language**: TypeScript 5.9
- **Styling**: CSS with CSS variables for theming
- **Package Manager**: npm 9.2.0
- **Build Tool**: Angular CLI 21

## Project Structure

```
ShortTermRentalApp/
├── front-end/
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   │   └── snippets/
│   │   │   │       ├── body/          # Property card listing component
│   │   │   │       ├── header/        # Navigation header
│   │   │   │       └── footer/        # Footer component
│   │   │   ├── shared/
│   │   │   │   ├── models/
│   │   │   │   │   └── property.ts    # Property data model
│   │   │   │   └── db/
│   │   │   │       └── properties.json # Sample property data
│   │   │   ├── app.ts                 # Root component
│   │   │   ├── app.routes.ts          # Route configuration
│   │   │   ├── app.css                # Global styles
│   │   │   └── app.config.ts          # App configuration
│   │   ├── main.ts                    # Application entry point
│   │   ├── index.html                 # HTML template
│   │   └── styles.css                 # Global stylesheet
│   ├── package.json
│   ├── angular.json
│   └── tsconfig.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm (v9.2.0+)

### Installation

1. Navigate to the front-end directory:
```bash
cd front-end
```

2. Install dependencies:
```bash
npm install
```

### Running the Application

Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:4200`

### Building for Production

Create an optimized production build:
```bash
npm run build
```

Output files will be in the `dist/` directory.

## Available Scripts

- `npm start` - Start development server with live reload
- `npm run build` - Create production build
- `npm run watch` - Build in watch mode for development
- `npm test` - Run unit tests

## Styling & Theme

The application uses CSS custom properties (variables) for theming:

- `--primary-text`: #423E2A (main text color)
- `--bg-clean`: #FBFFFB (background color)
- `--accent-green`: #95BA7D (accent color)
- `--accent-tan`: #CCA57B (secondary accent)
- `--btn-brown`: #6C4C2B (button color)

## Data Model

### Property

```typescript
class Property {
  id: number;
  title: string;
  tags: string[];
  description: string;
  pricePerNight: number;
  location: string;
  imageUrl: string;
}
```

## Sample Data

Sample property listings are loaded from `src/app/shared/db/properties.json`. Each property includes:
- ID and title
- Location and pricing information
- High-quality image URLs
- Tags for quick categorization
- Detailed descriptions

## Development

### Code Style

The project uses TypeScript with strict mode enabled and follows Angular best practices.

### Testing

Run the test suite:
```bash
npm test
```

## License

N/A

## Support

For issues or questions, please create an issue in the repository.
