import { themeMantine } from "@/theme/theme";
import { MantineProvider } from "@mantine/core";
import { ReactNode } from "react";

const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <MantineProvider theme={themeMantine} defaultColorScheme="dark">
      {children}
    </MantineProvider>
  );
};

export default AppProviders;
