import { createFileRoute } from '@tanstack/react-router';
import React from 'react';
import MainScreen from '../screens/MainScreen'; // Import the screen component

export const Route = createFileRoute('/')({
  component: IndexComponent,
});

function IndexComponent() {
  // Add any logic specific to the index route/main screen here if needed
  return <MainScreen />;
}
