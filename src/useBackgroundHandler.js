import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "./features/Setting/ThemeButton/themeSlice";
import { selectorBackgroundUrl } from "./features/Setting/backgroundImgSlice";
import backgroundDark from "./background/backgroundDark.jpg";
import backgroundLight from "./background/backgroundLight.jpg";

const useBackgroundHandler = () => {
    const [backgroundUrl, setBackgroundUrl] = useState("");
    const url = useSelector(selectorBackgroundUrl);
    const isDarkTheme = useSelector(selectIsDarkTheme);

    useEffect(() => {
        if (url) {
            setBackgroundUrl(url);
        } else {
            setBackgroundUrl(isDarkTheme ? backgroundDark : backgroundLight);
        }
    }, [url, isDarkTheme]);

    return { isDarkTheme, backgroundUrl };
};

export default useBackgroundHandler;