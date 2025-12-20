import { Box, Loader } from "@mantine/core";
import { useIsMutating } from "@tanstack/react-query";

const SendingLoading = () => {
  const isMutating = useIsMutating();

  return isMutating > 0 ? (
    <Box
      w="100vw"
      h="100vh"
      pos="fixed"
      top="0"
      left="0"
      bg="rgba(0, 0, 0, 0.3)"
      display="grid"
      style={{ placeItems: "center" }}
    >
      <Loader size="xl" color="cyan" />
    </Box>
  ) : null;
};

export default SendingLoading;
