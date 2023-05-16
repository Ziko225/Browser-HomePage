import { useEffect } from "react";
import useToggle from "./useToggle";

const useThemeToggle = () => {
    const [isDarkTheme, toggle] = useToggle(JSON.parse(localStorage.getItem("isDarkTheme") || false));
    const toggleTheme = () => toggle();

    useEffect(() => {
        localStorage.setItem("isDarkTheme", isDarkTheme);
    }, [isDarkTheme])
    return { isDarkTheme, toggleTheme }
};

export default useThemeToggle;


