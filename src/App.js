import { ThemeProvider } from "styled-components";
import Navigation from "./common/Navigation";
import Tasks from "./features/Tasks";
import GlobalStyle from "./globalStyled";
import { theme } from "./theme"

function App() {
  return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navigation />
        <Tasks />
      </ThemeProvider>
  );
}

export default App;
