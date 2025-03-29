import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  // Add other props as needed based on Figma data (e.g., variant, color)
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  // Styles based on Figma data (node 8609:4978 and its children)
  const buttonStyle: React.CSSProperties = {
    backgroundColor: '#0288D1', // fill_2WO9PI
    color: '#FFFFFF', // fill_HTG678 (text color)
    padding: '8px 22px', // layout_S4SXW7
    borderRadius: '4px', // borderRadius from instance
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'Roboto, sans-serif', // style_OUMH6R
    fontWeight: 500, // style_OUMH6R
    fontSize: '15px', // style_OUMH6R
    lineHeight: '1.73', // style_OUMH6R (approx)
    letterSpacing: '0.03em', // style_OUMH6R (approx)
    textTransform: 'uppercase', // style_OUMH6R
    boxShadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)', // effect_E0FK2X
    // Add hover/active states later if needed
  };

  return (
    <button onClick={onClick} style={buttonStyle}>
      {children}
    </button>
  );
};

export default Button;
