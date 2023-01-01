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
        case "init": return (
            <Content>Loading...</Content>
        )
        case "waitGPS": return (
            <Content>Waiting for GPS</Content>
        )
        default: return (
            <Content>Something wrong</Content>
        )
    };
};

export default Weather;