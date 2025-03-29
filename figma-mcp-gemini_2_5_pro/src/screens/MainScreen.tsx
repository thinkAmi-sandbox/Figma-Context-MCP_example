import React from 'react';
import AppBar from '../components/AppBar'; // Import the AppBar component

const MainScreen: React.FC = () => {
  // Basic Main Screen structure based on Figma data
  // Styling will be added later
  const handleMenuClick = () => {
    console.log('Menu button clicked');
    // Add menu logic here
  };

  const handleActionClick = () => {
    console.log('Action button clicked');
    // Add action logic here
  };

  // Styles based on Figma frame (8610:4989)
  const screenStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh', // Take full viewport height
    backgroundColor: '#FFFFFF', // fill_HTG678
  };

  const contentStyle: React.CSSProperties = {
    padding: '20px', // Add some padding for content below AppBar
    flexGrow: 1, // Allow content to take remaining space
  };

  return (
    <div style={screenStyle}>
      <AppBar
        title="Hello World" // Title from Figma AppBar instance
        onMenuClick={handleMenuClick}
        onActionClick={handleActionClick} // Action icon from Figma AppBar instance
      />
      {/* Add other main screen content here */}
      <div style={contentStyle}>
        <p>Main Screen Content Goes Here</p>
      </div>
    </div>
  );
};

export default MainScreen;
