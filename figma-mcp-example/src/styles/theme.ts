// Theme extracted from Figma design

// Colors
export const colors = {
	white: "#FFFFFF",
	black: "#000000",
	primary: "#0288D1",
	primaryDark: "#1976D2",
	transparent: "rgba(0, 0, 0, 0)",
};

// Typography
export const typography = {
	heading: {
		fontFamily: "Inter, sans-serif",
		fontWeight: 400,
		fontSize: "24px",
		lineHeight: 1.21,
	},
	button: {
		fontFamily: "Roboto, sans-serif",
		fontWeight: 500,
		fontSize: "15px",
		lineHeight: 1.73,
		letterSpacing: "0.03em",
		textTransform: "uppercase",
	},
	title: {
		fontFamily: "Roboto, sans-serif",
		fontWeight: 500,
		fontSize: "20px",
		lineHeight: 1.6,
		letterSpacing: "0.0075em",
	},
};

// Effects
export const effects = {
	buttonShadow:
		"0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
	appBarShadow:
		"0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
};

// Layout
export const layout = {
	spacing: {
		xs: "8px",
		sm: "16px",
		md: "24px",
		lg: "32px",
		xl: "48px",
	},
	button: {
		padding: "8px 22px",
	},
	iconButton: {
		padding: "8px",
	},
	appBar: {
		padding: "0px 16px",
	},
};

// Border radius
export const borderRadius = {
	button: "4px",
	iconButton: "100px",
};

export default {
	colors,
	typography,
	effects,
	layout,
	borderRadius,
};
