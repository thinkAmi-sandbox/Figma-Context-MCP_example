# Progress - 2025-03-29

## What Works
- Basic React components (`Button`, `IconButton`, `AppBar`) created and styled based on Figma data.
- `LoginScreen` component created and styled based on Figma data.
- `MainScreen` component skeleton created with basic layout styles.
- SVG icons downloaded and integrated into `AppBar` using `<img>` tags.
- Simple screen switching between `LoginScreen` and `MainScreen` implemented in `App.tsx` using `useState`. Clicking the login button now correctly switches to the `MainScreen`.
- Vite development server runs and displays the application correctly after restart (resolved HMR issue).

## What's Left to Build
- Apply detailed styles and add content to `MainScreen.tsx` based on Figma data or further requirements.
- Implement actual login logic (currently simulates success on button click).
- Potentially revisit routing implementation later if needed and if the SVG conflict can be resolved.

## Current Status
- Core components and basic screen structure with styling are complete.
- Simple login simulation and screen switching are functional and confirmed working.
- Application is stable.

## Known Issues
- TanStack Router plugin (`@tanstack/router-vite-plugin`) caused conflicts with SVG loading. Routing implementation was reverted. Unused route files remain in `src/routes` due to deletion restrictions.
- Screen switching initially failed due to a likely Vite HMR issue, resolved by restarting the dev server.
