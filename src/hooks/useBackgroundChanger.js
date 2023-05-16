import { useState } from "react";
import backgroundDark from "./backgroundImg/backgroundDark.jpg";
import backgroundLight from "./backgroundImg/backgroundLight.jpg";
import { useEffect } from "react";

const useBackgroundChanger = (isDarkTheme) => {
    const localStorageKey = "bglink"
    const [url, setUrl] = useState((localStorage.getItem(localStorageKey) || ""))
    const backgroundDefaultUrl = isDarkTheme ? backgroundDark : backgroundLight;
    const backgroundUrl = (url && url) || backgroundDefaultUrl;

    useEffect(() => {
        localStorage.setItem(localStorageKey, url);
    }, [url]);

    const imgUrlChecker = (url) => {
        return url?.match(/^http[^\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gmi);
    };

    const changeBackground = (url) => {
        imgUrlChecker(url) && setUrl(url);
    };

    const setDefaultBackground = () => {
        localStorage.setItem(localStorageKey, false);
        setUrl("")
    };

    return { backgroundUrl, changeBackground, setDefaultBackground };
};

export default useBackgroundChanger;