import { Box } from "@mantine/core";
import { ReactNode } from "react";

//Обёртка для всего app
const Wrapper = ({
  children,
  bgColor,
}: {
  children: ReactNode;
  bgColor: string;
}) => {
  return (
    <Box
      style={{
        background: bgColor,
        width: "100%",
        maxWidth: "100%",
        minHeight: "calc(100vh - 20px)",
        display: "flex",
        position: "relative",
        color: "white",
        padding: "10px",
        flexDirection: "column",
        rowGap: "10px",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {children}
    </Box>
  );
};

export default Wrapper;
