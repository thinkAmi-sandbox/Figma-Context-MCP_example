import React from 'react';
import Button from '../components/Button';

// Define props interface to accept the callback
interface LoginScreenProps {
  onLoginSuccess: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLoginSuccess }) => {

  const handleLoginClick = () => {
    console.log('Login button clicked');
    // Simulate successful login and call the callback
    // Replace with actual login logic later
    onLoginSuccess();
  };

  // Styles based on Figma frame (8609:2843) and children
  const screenStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center', // Center content vertically and horizontally
    minHeight: '100vh', // Take full viewport height
    backgroundColor: '#FFFFFF', // fill_HTG678
    gap: '86px', // layout_Z3VCI4 (gap between text and button)
    padding: '20px', // Add some padding
  };

  const textStyle: React.CSSProperties = {
    color: '#000000', // fill_9V4MIL
    fontFamily: 'Inter, sans-serif', // style_Z5CIDB
    fontWeight: 400, // style_Z5CIDB
    fontSize: '24px', // style_Z5CIDB
    lineHeight: '1.21', // style_Z5CIDB
    textAlign: 'left', // style_Z5CIDB
    margin: 0, // Reset default h1 margin
  };


  return (
    <div style={screenStyle}>
      <h1 style={textStyle}>Hello World!</h1>
      <Button onClick={handleLoginClick}>
        ログイン
      </Button>
    </div>
  );
};

export default LoginScreen;
