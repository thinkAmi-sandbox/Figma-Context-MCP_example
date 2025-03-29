import { createRootRoute, Outlet } from '@tanstack/react-router';
import React from 'react';

// Basic root layout component
const RootComponent: React.FC = () => {
  return (
    <>
      {/* Outlet renders the matched child route's component */}
      <Outlet />
      {/* Add common layout elements here if needed, like modals or notifications */}
    </>
  );
};

export const Route = createRootRoute({
  component: RootComponent,
});
