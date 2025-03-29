import React, { ButtonHTMLAttributes } from "react";
import {
	colors,
	typography,
	effects,
	layout,
	borderRadius,
} from "../styles/theme";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
	children,
	variant = "primary",
	...props
}) => {
	const buttonStyle: React.CSSProperties = {
		backgroundColor: variant === "primary" ? colors.primary : colors.white,
		color: variant === "primary" ? colors.white : colors.primary,
		fontFamily: typography.button.fontFamily,
		fontWeight: typography.button.fontWeight,
		fontSize: typography.button.fontSize,
		lineHeight: typography.button.lineHeight,
		letterSpacing: typography.button.letterSpacing,
		textTransform: typography.button.textTransform as "uppercase",
		padding: layout.button.padding,
		borderRadius: borderRadius.button,
		boxShadow: effects.buttonShadow,
		border: "none",
		cursor: "pointer",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	};

	return (
		<button style={buttonStyle} {...props}>
			{children}
		</button>
	);
};

export default Button;
