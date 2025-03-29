import React from 'react';
import IconButton from './IconButton';
// Import icons as URLs (Vite default)
import menuIconUrl from '../assets/icons/menu-icon.svg';
import actionIconUrl from '../assets/icons/action-icon.svg';

interface AppBarProps {
  title: string;
  onMenuClick?: () => void;
  onActionClick?: () => void;
  // Add other props as needed based on Figma data
}

const AppBar: React.FC<AppBarProps> = ({ title, onMenuClick, onActionClick }) => {
  // Styles based on Figma data (node 8610:5601 and its children)
  const headerStyle: React.CSSProperties = {
    backgroundColor: '#1976D2', // fill_XD5MKA
    color: '#FFFFFF', // fill_HTG678 (default text/icon color)
    boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)', // effect_O1LQHO
    padding: '0 16px', // layout_BA6NJ9
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between', // To push action icon to the right
    minHeight: '64px', // Common AppBar height, adjust as needed
  };

  const leftSideStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '24px', // layout_4JAQL2
  };

  const titleStyle: React.CSSProperties = {
    fontFamily: 'Roboto, sans-serif', // style_7MK3GN
    fontWeight: 500, // style_7MK3GN
    fontSize: '20px', // style_7MK3GN
    lineHeight: '1.6', // style_7MK3GN
    letterSpacing: '0.0075em', // style_7MK3GN (approx)
    margin: 0, // Reset default h1 margin
  };

  // Style for the icon image
  const iconImgStyle: React.CSSProperties = {
    width: '24px', // Default icon size
    height: '24px',
    // Icons from Figma seem to be white, let's ensure they are visible on the blue background
    // If the SVG fill is correctly set to white, this might not be needed,
    // but filter can help force it if needed.
    // filter: 'brightness(0) invert(1)', // Uncomment if icons aren't white
  };


  return (
    <header style={headerStyle}>
      <div style={leftSideStyle}>
        {onMenuClick && (
          <IconButton onClick={onMenuClick}>
            <img src={menuIconUrl} alt="Menu" style={iconImgStyle} />
          </IconButton>
        )}
        <h1 style={titleStyle}>{title}</h1>
      </div>
      <div>
        {onActionClick && (
          <IconButton onClick={onActionClick}>
             <img src={actionIconUrl} alt="Action" style={iconImgStyle} />
          </IconButton>
        )}
      </div>
    </header>
  );
};

export default AppBar;
