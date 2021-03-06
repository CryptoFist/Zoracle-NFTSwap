import { Box } from "@chakra-ui/core";

const Main = ({ children }) => (
  <Box as="main" flex="1 0 auto"
    p="0 1rem">
    {children}
  </Box>
);

export default Main;