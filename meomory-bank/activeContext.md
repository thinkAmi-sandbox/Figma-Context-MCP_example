# Active Context - 2025-03-29

## Recent Changes
- Fetched Figma data for node `8608:13648`.
- Downloaded SVG icons (`menu-icon.svg`, `action-icon.svg`).
- Created and styled basic React components (`Button`, `IconButton`, `AppBar`, `LoginScreen`).
- Created `MainScreen` skeleton and applied basic layout styles.
- Added SVG type definitions to `vite-env.d.ts`.
- Attempted TanStack Router implementation (`main.tsx`, `vite.config.ts`, `src/routes/*`).
- Encountered SVG loading errors likely due to router plugin conflict.
- Reverted TanStack Router implementation (`main.tsx`, `vite.config.ts`).
- Commented out unused route file (`src/routes/login.tsx`) to resolve errors (deletion restricted). Route files in `src/routes` are currently unused.
- Implemented screen switching in `App.tsx` using `useState` to toggle between `LoginScreen` and `MainScreen`.
- Updated `LoginScreen` to accept and call `onLoginSuccess` prop.
- Fixed related TypeScript errors.
- Ran Biome formatter on modified files.
- **Debugged screen switching issue:** Confirmed code was correct; issue resolved by restarting the Vite development server (likely an HMR problem). Screen switching now works as expected.

## Current Focus
- Completed initial implementation and styling of core components, Login Screen, and basic Main Screen layout.
- Implemented and confirmed working simple state-based screen switching between Login and Main screens.

## Next Steps
- Add more content and specific styling to `MainScreen.tsx` based on further Figma details or user requirements.
- Implement actual login logic.
- Update `progress.md`.
- Await further instructions from the user.
