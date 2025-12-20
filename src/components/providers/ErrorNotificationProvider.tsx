import { Box, Text, Transition } from "@mantine/core";
import { IconX } from "@tabler/icons-react";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type ErrorNotificationContextType = {
  showErr: (msg: string) => void;
};

const ErrorNotificationContext = createContext<
  ErrorNotificationContextType | undefined
>(undefined);

const ErrorNotificationProvider = ({ children }: { children: ReactNode }) => {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (error) {
      const timeout = setTimeout(() => {
        setError(null);
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [error]);

  const showErr = (msg: string) => {
    setError(msg);
  };

  return (
    <ErrorNotificationContext.Provider value={{ showErr }}>
      {children}
      <Transition
        mounted={!!error}
        duration={300}
        transition={"slide-down"}
        timingFunction="ease"
      >
        {(styles) => (
          <Box
            bg="rgba(255, 0, 0, 0.1)"
            w="80%"
            maw='380px'
            px="20px"
            py="10px"
            pos="fixed"
            top="20px"
            className="error_notification"
            style={{
              ...styles,
              display: "flex",
              borderRadius: "8px",
              zIndex: "999",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Text fz={14} w="100%" ta="center">
              {error}
            </Text>
            <button
              style={{
                display: "grid",
                placeItems: "center",
                padding: 0,
                background: "transparent",
                border: "1px solid gray",
                borderRadius: "3px",
                cursor: "pointer",
              }}
              onClick={() => setError(null)}
            >
              <IconX size={20} color="white" />
            </button>
          </Box>
        )}
      </Transition>
    </ErrorNotificationContext.Provider>
  );
};

export default ErrorNotificationProvider;

export function useErrorNotification() {
  const context = useContext(ErrorNotificationContext);
  if (!context)
    throw new Error(
      "useErrorNotification must be used within ErrorNotificationProvider"
    );
  return context;
}
