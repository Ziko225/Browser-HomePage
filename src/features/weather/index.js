import useGetWeather from "./useGetWeather"
import { Content, Ico, Element } from "./styled"

const Weather = () => {
    const { data } = useGetWeather();

    return (
        <Content><Ico src={require(`./ico/a01d.png`)} alt="" /> <Element>{`${data.temp}°C`}</Element> <Element>{data.city_name}</Element></Content>
    )
};

export default Weather