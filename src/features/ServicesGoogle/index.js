import { useState } from "react"
import { Content, Button, Img, Block, Footer } from "./styled"
import { ReactComponent as IconMenu } from './icons/bar.svg'

const ServicesGoogle = () => {
    let [showServicesBar, setShowServicesBar] = useState(false);

    const clicker = () => {
        setShowServicesBar(showServicesBar = !showServicesBar)
    };

    return (
        <>
            <Button onClick={() => clicker()}><IconMenu/></Button>
            <Content bar={showServicesBar}>
                <Block href="https://mail.google.com/mail/?tab=rm">
                    <Img src={require("./icons/gmail.png")} alt=""></Img>
                    Gmail
                </Block>
                <Block href="https://docs.google.com/spreadsheets/?usp=sheets_alc&authuser=0">
                    <Img src={require("./icons/exel.png")} alt=""></Img>
                    Exel
                </Block>
                <Block href="https://docs.google.com/document/?usp=docs_alc&authuser=0">
                    <Img src={require("./icons/word.png")} alt=""></Img>
                    Word
                </Block>
                <Block href="https://maps.google.pl/maps?hl=pl&tab=rl">
                    <Img src={require("./icons/maps.png")} alt=""></Img>
                    Maps
                </Block>
                <Block href="https://www.youtube.com/?tab=r1">
                    <Img src={require("./icons/youtube.png")} alt=""></Img>
                    youtube
                </Block>
                <Block href="https://keep.google.com/u/0">
                    <Img src={require("./icons/keep.png")} alt=""></Img>
                    Keep
                </Block>
                <Block href="https://translate.google.pl/?hl=pl&tab=rT">
                    <Img src={require("./icons/translator.png")} alt=""></Img>
                    translator
                </Block>
                <Block href="https://drive.google.com/?tab=ro&authuser=0">
                    <Img src={require("./icons/drive.png")} alt=""></Img>
                    Drive
                </Block>
                <Block href="https://photos.google.com/?tab=rq&pageId=none">
                    <Img src={require("./icons/images.png")} alt=""></Img>
                    Images
                </Block>
                <Footer href="https://www.google.pl/intl/pl/about/products?tab=rh">More</Footer>
            </Content>
        </>
    )
}

export default ServicesGoogle