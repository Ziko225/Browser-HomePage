import { OpenBarButton, Content, SettingBlock, StyledInput, FormBlock, StyledButton } from "./styled";
import { ReactComponent as SettingIco } from './settingIco.svg';
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const Setting = () => {
    const [openSettingBar, setOpenSettingBar] = useState();
    const wrapperRef = useRef(null);
    const [link, setLink] = useState("");
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setOpenSettingBar(false);
            };
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);

    const changeBackground = (e) => {
        e.preventDefault();
        localStorage.setItem("bglink", link)
        setTimeout(() => {
            document.location.reload()
        }, 300);
    };

    const clearBackground = () => {
        localStorage.setItem("bglink", "")
    }

    return (
        <Content ref={wrapperRef}>
            <OpenBarButton onClick={() => setOpenSettingBar(!openSettingBar)}><SettingIco /></OpenBarButton>
            {openSettingBar &&
                <SettingBlock>
                    <h2>Setting</h2>
                    <FormBlock onSubmit={(e) => changeBackground(e)}>
                        Background image
                        <StyledInput value={link} onChange={(e) => setLink(e.currentTarget.value)} placeholder="Link to img here" />
                            <StyledButton>Save</StyledButton>
                    </FormBlock>

                </SettingBlock>
            }
        </Content>
    );
};

export default Setting;