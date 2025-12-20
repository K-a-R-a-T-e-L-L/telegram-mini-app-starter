import { Button, CSSProperties } from "@mantine/core";
import { ReactNode } from "react";

interface CustomButtonProps {
  onClick?: any;
  text: string | ReactNode;
  size?: string;
  type?: "button" | "reset" | "submit" | undefined;
  styles?: CSSProperties;
  leftSection?: ReactNode;
  rightSection?: ReactNode;
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  text,
  size,
  type,
  styles,
  leftSection,
  rightSection,
  disabled,
}) => {
  return (
    <Button
      size={size}
      variant="default"
      onClick={onClick}
      type={type ? type : "button"}
      leftSection={leftSection}
      rightSection={rightSection}
      disabled={disabled}
      styles={{
        root: {
          fontWeight: 500,
          textTransform: "none",
          letterSpacing: "-0.01em",
          backgroundColor: "rgba(255, 255, 255, 0)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          borderRadius: 6,
          transition: "all 0.1s ease",
          boxShadow:
            "0 4px 20px rgba(0, 0, 0, 0.3), inset 0 0 0 1px rgba(255, 255, 255, 0.08)",
          padding: "0",
          ...styles,
        },
      }}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
