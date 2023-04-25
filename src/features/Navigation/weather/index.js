import useGetWeather from "./useGetWeather";
import { Content, Ico, Element } from "./styled";

const Weather = () => {
    const { data, status } = useGetWeather();
    switch (status) {
        case "ok":
            return (
                <Content>
                    <Ico src={require(`./icons/${data.weather.icon}.png`)} alt="" />
                    <Element>{`${data.temp}°C`}</Element>
                    <Element>{data.city_name}</Element>
                </Content>
            )
        case "init": return <Content>Loading...</Content>
        case "waitGPS": return <Content>Waiting for GPS</Content>
        case "noGPS": return <Content>Allow location to get weather data</Content>
        default: return <Content>Something get wrong</Content>
    };
};

export default Weather;