import React, { ButtonHTMLAttributes } from "react";
import { layout, borderRadius } from "../styles/theme";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
}

const IconButton: React.FC<IconButtonProps> = ({ children, ...props }) => {
	const iconButtonStyle: React.CSSProperties = {
		backgroundColor: "transparent",
		padding: layout.iconButton.padding,
		borderRadius: borderRadius.iconButton,
		border: "none",
		cursor: "pointer",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	};

	return (
		<button style={iconButtonStyle} {...props}>
			{children}
		</button>
	);
};

export default IconButton;
