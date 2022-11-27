import { ThemeProvider } from "styled-components";
import Navigation from "./features/Navigation";
import ServicesGoogle from "./features/ServicesGoogle";
import Tasks from "./features/Tasks";
import Weather from "./features/weather";
import GlobalStyle from "./globalStyled";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navigation>
        <Weather />
        <ServicesGoogle />
      </Navigation>
      <Tasks />
    </ThemeProvider>
  );
};

export default App;
