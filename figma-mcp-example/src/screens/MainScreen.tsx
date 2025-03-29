import React from "react";
import { colors } from "../styles/theme";
import AppBar from "../components/AppBar";

interface MainScreenProps {
	onMenuClick?: () => void;
	onActionClick?: () => void;
}

const MainScreen: React.FC<MainScreenProps> = ({
	onMenuClick,
	onActionClick,
}) => {
	const containerStyle: React.CSSProperties = {
		backgroundColor: colors.white,
		minHeight: "100vh",
		display: "flex",
		flexDirection: "column",
	};

	const contentStyle: React.CSSProperties = {
		padding: "16px",
		flex: 1,
	};

	return (
		<div style={containerStyle}>
			<AppBar
				title="Hello World"
				onMenuClick={onMenuClick}
				onActionClick={onActionClick}
			/>
			<div style={contentStyle}>
				{/* Main content will go here */}
				<p>メイン画面のコンテンツがここに表示されます。</p>
			</div>
		</div>
	);
};

export default MainScreen;
