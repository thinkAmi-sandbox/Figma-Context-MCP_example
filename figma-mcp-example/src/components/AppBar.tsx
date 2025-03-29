import React from "react";
import { colors, typography, effects, layout } from "../styles/theme";
import IconButton from "./IconButton";
import menuIcon from "../assets/icons/menu-icon.svg";
import actionIcon from "../assets/icons/action-icon.svg";

interface AppBarProps {
	title: string;
	onMenuClick?: () => void;
	onActionClick?: () => void;
}

const AppBar: React.FC<AppBarProps> = ({
	title,
	onMenuClick,
	onActionClick,
}) => {
	const appBarStyle: React.CSSProperties = {
		backgroundColor: colors.primaryDark,
		boxShadow: effects.appBarShadow,
		padding: layout.appBar.padding,
		display: "flex",
		alignItems: "center",
		width: "100%",
	};

	const leftSideStyle: React.CSSProperties = {
		display: "flex",
		alignItems: "center",
		gap: layout.spacing.md,
		flex: 1,
	};

	const titleStyle: React.CSSProperties = {
		fontFamily: typography.title.fontFamily,
		fontWeight: typography.title.fontWeight,
		fontSize: typography.title.fontSize,
		lineHeight: typography.title.lineHeight,
		letterSpacing: typography.title.letterSpacing,
		color: colors.white,
		margin: 0,
	};

	const rightSideStyle: React.CSSProperties = {
		display: "flex",
		alignItems: "center",
	};

	return (
		<div style={appBarStyle}>
			<div style={leftSideStyle}>
				<IconButton onClick={onMenuClick}>
					<img
						src={menuIcon}
						alt="Menu"
						style={{
							width: "24px",
							height: "24px",
							filter: "brightness(0) invert(1)",
						}}
					/>
				</IconButton>
				<h1 style={titleStyle}>{title}</h1>
			</div>
			<div style={rightSideStyle}>
				<IconButton onClick={onActionClick}>
					<img
						src={actionIcon}
						alt="Action"
						style={{
							width: "24px",
							height: "24px",
							filter: "brightness(0) invert(1)",
						}}
					/>
				</IconButton>
			</div>
		</div>
	);
};

export default AppBar;
