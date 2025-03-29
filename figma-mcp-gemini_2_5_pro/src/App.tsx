import { useState } from 'react'; // Import useState
import './App.css';
import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/MainScreen'; // Import MainScreen

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  // Callback function to be passed to LoginScreen
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  // Conditionally render LoginScreen or MainScreen based on isLoggedIn state
  return (
    <>
      {isLoggedIn ? (
        <MainScreen />
      ) : (
        <LoginScreen onLoginSuccess={handleLoginSuccess} /> // Pass callback
      )}

      {/* Original Vite template content commented out
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      */}
    </>
  )
}

export default App
