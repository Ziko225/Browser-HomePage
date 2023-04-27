import { ThemeProvider } from "styled-components";
import Navigation from "./features/Navigation";
import Search from "./features/Search";
import Setting from "./features/Setting";
import Tasks from "./features/Tasks";
import GlobalStyle from "./globalStyled";
import { darkTheme, lightTheme } from "./theme";
import useBackgroundHandler from "./useBackgroundHandler";

function App() {
    const { isDarkTheme, backgroundUrl } = useBackgroundHandler();

    return (
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <GlobalStyle backgroundUrl={backgroundUrl} />
            <Navigation />
            <Search />
            <Tasks />
            <Setting />
        </ThemeProvider>
    );
};

export default App;