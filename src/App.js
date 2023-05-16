import { ThemeProvider } from "styled-components";
import Navigation from "./features/Navigation";
import Search from "./features/Search";
import Setting from "./features/Setting";
import Notes from "./features/Notes";
import GlobalStyle from "./globalStyled";
import { darkTheme, lightTheme } from "./theme";
import useThemeToggle from "./hooks/useThemeToggle";
import useBackgroundChanger from "./hooks/useBackgroundChanger";

function App() {
    const { isDarkTheme, toggleTheme } = useThemeToggle();
    const { backgroundUrl, changeBackground, setDefaultBackground } = useBackgroundChanger(isDarkTheme);

    return (
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <GlobalStyle backgroundUrl={backgroundUrl} />
            <Navigation />
            <Search />
            <Notes />
            <Setting
                isDarkTheme={isDarkTheme}
                onThemeButtonClick={toggleTheme}
                onBackgroundChange={changeBackground}
                onDefaultBackground={setDefaultBackground}
            />
        </ThemeProvider>
    );
};

export default App;