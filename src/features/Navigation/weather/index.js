import useGetWeather from "./useGetWeather";
import { Content, Ico, Element } from "./styled";

const Weather = () => {
    const { data, status } = useGetWeather();
    switch (status) {
        case "ok":
            return (
                <Content>
                    <Ico src={require(`./ico/${data.weather.icon}.png`)} alt="" />
                    <Element>{`${data.temp}°C`}</Element>
                    <Element>{data.city_name}</Element>
                </Content>
            )
        case "error":
            return (
                <Content>Something wrong</Content>
            )
        case "loading": return (
            <Content>Loading...</Content>
        )
        default: return (
            <Content>Waiting for GPS</Content>
        )
    }
};

export default Weather;