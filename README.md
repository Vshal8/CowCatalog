# CowCatalog

A React Native application for managing cows data.

## Project Overview

CowCatalog is a mobile-first cattle management system that allows users to create, view, and manage cow records.

## Technical Approach

### Architecture & State Management

- **Zustand for State Management**: Lightweight state management solution for local storage and global state handling. The store (`src/zustand/store.ts`) manages cow data, CRUD operations, and filtering logic without the complexity of Redux.

### UI & Styling

- **Global Theming System**: Centralized theme management in `src/utils/theme/`:
  - `colors.ts` - Color palette definitions
  - `globalStyles.ts` - Reusable style objects
  - `globalStyleDefinitions.ts` - Common style patterns and utilities
  
  This approach ensures consistent styling across the app and makes theme updates straightforward.

### Performance Optimization

- **Pure Components with React.memo**: Components are optimized using the `memo` hook to prevent unnecessary re-renders, particularly important for list items and frequently updated UI elements.
- **Component Composition**: Modular component structure with focused, single-responsibility components.
- **FlatList Optimization**:
Avoided inline functions and components.
All callbacks are memoized using useCallback.
Render items are extracted into separate memoized components (CowListCard, ListEmptyContainer, etc.).
Key extractors are preserved for smooth scrolling.

### Type Safety

- **TypeScript**: Full TypeScript implementation with strict type checking
- **Type-safe Navigation**: Strongly typed navigation params using React Navigation's TypeScript support

### Navigation

- **React Navigation**: Native stack navigator for iOS/Android with type-safe routing
- **Screen Organization**: Screens organized by feature with dedicated components and utilities

### Project Structure

```
src/
├── components/         # Reusable UI components
├── navigation/         # Navigation configuration and route definitions
├── screens/            # App screens (CowList, CowDetails, CreateCow)
│   ├── CowListScreen/
│   ├── CowDetailsScreen/
│   └── CreateCowScreen/
├── utils/              # Utilities and helpers
│   ├── assets/          # Images, icons, etc.
│   └── schemas/        # Type definitions
│   ├── theme/          # Global theming system
│   └── schemas/  
└── zustand/            # State management store
```

## Getting Started

### Prerequisites

- Node.js >= 20
- React Native development environment setup
- iOS: Xcode and CocoaPods
- Android: Android Studio and SDK

### Installation

```bash
npm install
```

### Running the App

```bash
# Start Metro bundler
npm start

# Run on iOS
npm run ios

# Run on Android
npm run android
```

### Development

```bash
# Lint code
npm run lint

# Run tests
npm run test
```

## Key Features

- Create and manage cow records
- Track cow status (Active, In Treatment, Deceased)
- Record weight and calculate daily gain
- Event tracking system
- Filter and search capabilities
- Type-safe forms with validation

## Tech Stack

- **React Native** 0.82.0
- **TypeScript** 5.8.3
- **Zustand** 5.0.8 - State management
- **React Navigation** 7.x - Navigation
- **Zod** - Schema validation
- **React Hook Form** - Form management
- **Moment.js** - Date handling