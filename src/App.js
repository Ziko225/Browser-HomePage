import { ThemeProvider } from "styled-components";
import Navigation from "./features/Navigation";
import Setting from "./features/Setting";
import Tasks from "./features/Tasks";
import GlobalStyle from "./globalStyled";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navigation />
      <Tasks />
      <Setting />
    </ThemeProvider>
  );
};

export default App;