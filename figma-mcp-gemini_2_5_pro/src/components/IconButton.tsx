import React from 'react';

interface IconButtonProps {
  children: React.ReactNode; // Typically an SVG icon
  onClick?: () => void;
  // Add other props as needed based on Figma data (e.g., size, color)
}

const IconButton: React.FC<IconButtonProps> = ({ children, onClick }) => {
  // Styles based on Figma data (node I8610:5601;...;8170:87872)
  const iconButtonStyle: React.CSSProperties = {
    padding: '8px', // layout_9OHTX1
    borderRadius: '50%', // layout_9OHTX1 specifies 100px, using 50% for perfect circle
    border: 'none',
    backgroundColor: 'transparent', // Default, can add hover effect later
    cursor: 'pointer',
    display: 'inline-flex', // To center the icon
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 0, // Prevent extra space around icon
  };

  // Assuming the child is an SVG icon, we might want to control its color via props later
  // For now, the SVG fill from Figma should apply if imported correctly

  return (
    <button onClick={onClick} style={iconButtonStyle}>
      {children}
    </button>
  );
};

export default IconButton;
