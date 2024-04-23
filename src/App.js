import "./i18n";
import { Route } from "wouter";
import { ChakraProvider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import HomePage from "./Components/HomePage/HomePage";
import Pages from "./Components/Sections/Pages/Pages";
import Apps from "./Components/Sections/Apps/Apps";
import Apis from "./Components/Sections/Apis/Apis";
import Videogames from "./Components/Sections/Videogames/Videogames";
import Nav from "./Components/Navbar/Nav";

function App() {
  return (
    <ChakraProvider>
      <Box>
        <Box as="header" className="App-header">
          <Nav />

          <Route path="/" component={HomePage} />
        </Box>
        <Route path="/pages" component={Pages} />
        <Route path="/apps" component={Apps} />
        <Route path="/videogames" component={Videogames} />
        <Route path="/apis" component={Apis} />
      </Box>
    </ChakraProvider>
  );
}

export default App;
