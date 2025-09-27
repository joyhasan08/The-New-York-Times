# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a React news website project mimicking The New York Times interface. It's built using Vite, React 18, TailwindCSS, and DaisyUI for styling. The application displays news articles from static JSON data and features a responsive layout with multiple sections.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Lint and fix issues automatically
npm run lint -- --fix
```

## Project Architecture

### Core Technology Stack
- **Frontend Framework**: React 18 with Vite as the build tool
- **Routing**: React Router DOM v6 with browser router
- **Styling**: TailwindCSS + DaisyUI component library
- **Date Handling**: Moment.js for date formatting
- **Icons**: React Icons library
- **Data Storage**: Static JSON files in `/public` directory

### Application Structure

**Layout Pattern**: The app uses a nested routing structure where `App.jsx` serves as the root layout with a sticky header and `<Outlet>` for child routes.

**Component Architecture**:
- **Layouts**: `NavbarTop`, `NavbarSecondary` for navigation
- **Pages**: Each route corresponds to a page component (`Home`, `LoginPage`, `RegisterPage`)
- **Content Sections**: Three-column layout with `SidebarLeft`, `NewsFeed` (main content), `SidebarRight`
- **Reusable Components**: `NewsCard`, `Marquee`, `FindUsOn`, `AdBord`

### Data Flow
- News data is fetched from `/public/news.json` in the `NewsFeed` component
- Categories are defined in `/public/categories.json`
- Each news article has properties: `_id`, `title`, `details`, `author`, `thumbnail_url`, `image_url`, `rating`, `total_view`, `category_id`

### File Organization
```
src/
├── App.jsx               # Root component with layout
├── main.jsx             # App entry point
├── Router/
│   └── Rourter.jsx      # Route definitions
├── layouts/
│   └── Navbar/          # Navigation components
├── pages/
│   ├── Home/            # Home page layout
│   ├── Login/           # Authentication pages
│   ├── MainContent/     # News feed and cards
│   └── Sidebar/         # Left and right sidebars
├── component/           # Reusable UI components
└── util/                # Utility functions and contexts
```

## Development Guidelines

### Component Development
- All components use functional components with hooks
- Props are destructured in component parameters
- Components follow PascalCase naming convention
- Use `prop-types` for type checking (already configured)

### Styling Approach
- Uses utility-first approach with TailwindCSS
- DaisyUI components for consistent UI elements (cards, buttons, etc.)
- Responsive design with `md:` breakpoint prefixes
- Theme is set to "light" in `index.html`

### Data Management
- Currently uses `fetch()` for loading static JSON data
- No global state management (React Context is set up but not implemented)
- Local component state with `useState` for data handling

### Routing Structure
```
/ (App layout)
├── / → Home component
├── /login → LoginPage component
└── /reg → RegisterPage component
```

## Common Development Tasks

### Adding New Routes
1. Define route in `src/Router/Rourter.jsx`
2. Create page component in appropriate `pages/` subdirectory
3. Import and configure route with proper element

### Creating News Components
- Follow the pattern established in `NewsCard.jsx`
- Include author information, publication date, title, image, and excerpt
- Use DaisyUI card classes for consistent styling
- Handle missing data gracefully (some author dates are null)

### Working with Static Data
- News articles: Modify `/public/news.json`
- Categories: Update `/public/categories.json`
- Images are hosted on external URLs (i.ibb.co, images.unsplash.com)

### Styling Guidelines
- Use DaisyUI component classes: `card`, `btn`, `card-bordered`
- Follow responsive design patterns with `grid grid-cols-1 md:grid-cols-4`
- Maintain consistent spacing with Tailwind utilities

## Code Quality

### ESLint Configuration
- Uses React recommended rules plus React hooks plugin
- Configured for ES2020 with browser and node environments
- React refresh plugin for hot reloading during development

### File Naming
- Components: PascalCase (e.g., `NewsCard.jsx`)
- Route file has typo: `Rourter.jsx` should be `Router.jsx`
- Directories: camelCase or PascalCase

## Known Issues & Areas for Improvement

1. **Router file naming**: `Rourter.jsx` contains a typo
2. **Missing prop validation**: Several components have empty PropTypes
3. **Unused NewsDataContext**: Context is created but not implemented
4. **Console logging**: `NewsCard` component logs props to console
5. **Error handling**: No error states for failed data fetching
6. **Accessibility**: Missing alt texts and ARIA labels in some components

## Asset Management
- Static assets are served from `/public` directory
- Logo image referenced in `NavbarTop.jsx` as `newWork.png`
- External image URLs used for news article images and author avatars