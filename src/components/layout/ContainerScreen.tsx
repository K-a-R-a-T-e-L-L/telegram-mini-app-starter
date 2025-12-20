import { Box } from "@mantine/core";
import { CSSProperties, ReactNode } from "react";

interface ContainerScreenProps {
  children: ReactNode;
  style?: CSSProperties;
}

//Обёртка для экранов (screens)
const ContainerScreen: React.FC<ContainerScreenProps> = (props) => {
  const { children, style } = props;

  return (
    <Box w="90%" maw="380px" pos="relative" style={style}>
      {children}
    </Box>
  );
};

export default ContainerScreen;
