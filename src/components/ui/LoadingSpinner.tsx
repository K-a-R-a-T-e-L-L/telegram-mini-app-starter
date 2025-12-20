import { Box, Loader } from "@mantine/core";

const LoadingSpinner = () => {
  return (
    <Box
      w="100vw"
      h="100vh"
      pos="fixed"
      top="0"
      left="0"
      bg="#152238"
      display="grid"
      style={{ placeItems: "center" }}
    >
      <Loader
        style={{
          "--loader-color": "cyan",
          "--loader-size": "10vw",
        }}
      />
    </Box>
  );
};

export default LoadingSpinner;
