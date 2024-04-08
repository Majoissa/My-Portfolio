import { Route } from "wouter";
import { ChakraProvider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import HomePage from "./Components/HomePage/HomePage";

function App() {
  return (
    <ChakraProvider>
      <Box>
        <Route path="/" component={HomePage} />
      </Box>
    </ChakraProvider>
  );
}

export default App;
