# TravelTrucks

TravelTrucks is a camper rental web application built with Next.js and TypeScript.

The application allows users to browse available campers, filter them by different characteristics, view detailed information and photo galleries, read customer reviews, and submit booking requests.

The project was developed as a frontend technical assignment based on the provided Figma design and REST API.

## Live Demo

[View deployed application](https://evg-travel-trucks.vercel)

## Repository

[GitHub Repository](https://github.com/Evgeshka38/evg-travel-trucks)

## Features

### Home Page

- Responsive hero section
- Navigation between Home and Catalog pages
- Call-to-action button leading to the camper catalog
- Active navigation state

### Camper Catalog

- Camper list loaded from the REST API
- Pagination with **Load more**
- Infinite-query based data fetching
- Existing camper cards remain visible while additional data is loading
- Loading state with custom loader
- Empty search results state
- Responsive catalog layout

### Filtering

Campers can be filtered by:

- Location
- Camper form
- Engine type
- Transmission type

Filtering is performed through API query parameters.

Additional functionality:

- Search by clicking the **Search** button
- Search by pressing **Enter**
- Clear all selected filters
- Reset filters from the empty-results state
- Single selection for each camper characteristic

### Camper Details

Each camper has a dedicated details page containing:

- Camper name
- Price
- Rating
- Location
- Description
- Vehicle characteristics
- Available amenities
- Photo gallery
- Customer reviews
- Booking form

Camper details are opened from the catalog in a new browser tab.

### Image Gallery

The camper gallery is implemented with Swiper and includes:

- Main camper image
- Thumbnail navigation
- Active thumbnail indication
- Responsive thumbnail layout

### Reviews

Customer reviews are loaded from the API and include:

- Reviewer name
- Rating
- Five-star visualization
- Review comment

### Booking Form

Users can submit a booking request directly from the camper details page.

The form includes:

- Name field
- Email field
- Form validation
- Validation error states
- Loading state during submission
- Success and error notifications
- Automatic form reset after successful submission

## Tech Stack

- **Next.js**
- **React**
- **TypeScript**
- **CSS Modules**
- **TanStack Query**
- **Axios**
- **Formik**
- **Yup**
- **Swiper**
- **React Icons**
- **React Hot Toast**

## API

The application uses the TravelTrucks REST API:

`https://campers-api.goit.study`

API documentation:

`https://campers-api.goit.study/docs`

The API is used for:

- Fetching campers
- Filtering campers
- Pagination
- Fetching camper details
- Fetching camper reviews
- Sending booking requests

## Routes

| Route                 | Description                |
| --------------------- | -------------------------- |
| `/`                   | Home page                  |
| `/catalog`            | Camper catalog and filters |
| `/catalog/[camperId]` | Individual camper details  |

## Project Structure

```text
app/
├── catalog/
│   ├── [camperId]/
│   └── page.tsx
├── layout.tsx
└── page.tsx

components/
├── Loader/
├── layout/
└── pages/
    ├── home-page/
    ├── catalog-page/
    └── camper-details-page/

lib/
├── api/
└── providers/

types/
└── camper.ts

public/
└── images/
```

The application follows a component-based structure. Page-specific components are grouped by page, while API logic, providers, and TypeScript types are separated into dedicated modules.

## Data Fetching

TanStack Query is used for client-side server-state management.

The camper catalog uses `useInfiniteQuery` to implement pagination. Each request loads the next group of campers while preserving previously fetched results.

Filters are included in the query key, so changing the active search criteria triggers a new request with the corresponding API parameters.

Camper details and reviews are fetched from their dedicated API endpoints.

## Form Validation

The booking form is implemented with Formik and Yup.

Validation includes:

- Required name
- Valid name format
- Required email
- Valid email format

Validation errors are displayed directly next to the corresponding fields.

## Responsive Design

The application is optimized for desktop and also includes responsive layouts for tablet and mobile devices.

Main responsive breakpoints include:

- Desktop
- Tablet — up to `768px`
- Mobile — up to `375px`

Layouts, image galleries, filters, forms, and navigation adapt to smaller screens.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Evgeshka38/evg-travel-trucks.git
```

### 2. Navigate to the project directory

```bash
cd evg-travel-trucks
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open:

`http://localhost:3000`

in your browser.

## Available Scripts

### Development

```bash
npm run dev
```

Starts the development server.

### Production Build

```bash
npm run build
```

Creates an optimized production build.

### Production Server

```bash
npm run start
```

Starts the production server.

### Linting

```bash
npm run lint
```

Runs ESLint and checks the project for code-quality issues.

## Design

The interface was implemented according to the provided Figma design.

The project uses a consistent design system with reusable colors, typography, spacing, buttons, cards, form controls, and responsive behavior.

## Performance and UX

The project includes several UX improvements:

- Optimized images with Next.js `Image`
- Loading indicators during API requests
- Preserved catalog content during background fetching
- Disabled controls during form submission
- Empty-results feedback
- Responsive image gallery
- Accessible form labels and controls
- Keyboard-friendly filter submission
- Visual hover and focus states
- User feedback through toast notifications

## Author

Developed by **Evgeshka38** as a frontend technical assignment for the TravelTrucks camper rental application.
