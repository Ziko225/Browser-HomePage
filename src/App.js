import { ThemeProvider } from "styled-components";
import Navigation from "./features/Navigation";
import Search from "./features/Search";
import Setting from "./features/Setting";
import Tasks from "./features/Tasks";
import GlobalStyle from "./globalStyled";
import { lightTheme, DarkTheme } from "./theme";

function App() {
    const isDarkTheme = (JSON.parse(localStorage.getItem("isDarkTheme") || false));

    return (
        <ThemeProvider theme={isDarkTheme ? DarkTheme : lightTheme}>
            <GlobalStyle />
            <Navigation />
            <Search />
            <Tasks />
            <Setting />
        </ThemeProvider>
    );
};

export default App;