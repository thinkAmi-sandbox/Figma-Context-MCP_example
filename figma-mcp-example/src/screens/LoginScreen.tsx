import React from "react";
import { colors, typography } from "../styles/theme";
import Button from "../components/Button";

interface LoginScreenProps {
	onLogin?: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
	const containerStyle: React.CSSProperties = {
		backgroundColor: colors.white,
		minHeight: "100vh",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	};

	const contentStyle: React.CSSProperties = {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		gap: "86px", // From Figma layout
	};

	const headingStyle: React.CSSProperties = {
		fontFamily: typography.heading.fontFamily,
		fontWeight: typography.heading.fontWeight,
		fontSize: typography.heading.fontSize,
		lineHeight: typography.heading.lineHeight,
		color: colors.black,
		margin: 0,
	};

	return (
		<div style={containerStyle}>
			<div style={contentStyle}>
				<h1 style={headingStyle}>Hello World!</h1>
				<Button onClick={onLogin}>ログイン</Button>
			</div>
		</div>
	);
};

export default LoginScreen;
