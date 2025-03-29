import { useState } from "react";
import "./App.css";
import LoginScreen from "./screens/LoginScreen";
import MainScreen from "./screens/MainScreen";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const handleLogin = () => {
		setIsLoggedIn(true);
	};

	const handleLogout = () => {
		setIsLoggedIn(false);
	};

	return (
		<>
			{isLoggedIn ? (
				<MainScreen
					onMenuClick={() => console.log("Menu clicked")}
					onActionClick={handleLogout}
				/>
			) : (
				<LoginScreen onLogin={handleLogin} />
			)}
		</>
	);
}

export default App;
