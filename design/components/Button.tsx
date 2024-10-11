import React from "react";
import { TouchableOpacity, Text, GestureResponderEvent } from "react-native";
import { styled } from "nativewind";

import { TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  textStyle?: object;
  fullWidth?: boolean;
  theme?: "primary" | "secondary";
}

const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledText = styled(Text);

const Button: React.FC<ButtonProps> = ({
  children,
  onPress,
  style,
  textStyle,
  fullWidth = false,
  theme = "primary",
}) => {
  const themeClasses =
    theme === "primary" ? "bg-social-pink" : "bg-social-blue";

  return (
    <StyledTouchableOpacity
      className={`${themeClasses} p-2 rounded items-center ${
        fullWidth ? "w-full" : ""
      }`}
      style={style}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <StyledText
        className="text-white text-base font-pmedium"
        style={textStyle}
      >
        {children}
      </StyledText>
    </StyledTouchableOpacity>
  );
};

export default Button;
