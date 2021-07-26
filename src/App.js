import './App.css';
import { ChakraProvider, Box } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home'
import Recipe from './pages/Recipe'

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
}
const theme = extendTheme({ colors })

function App() {
  return (
    <ChakraProvider theme={theme} width={'100%'}>
      <Box>
        <div className="App">
          <Router>
            <Switch>
              <Route path="/recipe">
                <Recipe />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
        </div>
      </Box>
    </ChakraProvider >
  );
}

export default App;
