import axios from "axios";
import { useEffect, useState } from "react";

const useGetWeather = () => {
    const [status, setStatus] = useState("loading");
    const [data, setData] = useState();

    useEffect(() => {
        const getWeather = (longitude, latitude) => {
            const options = {
                method: 'GET',
                url: './data.json',
                // url: 'https://api.weatherbit.io/v2.0/current',
                params: {
                    lon: `${longitude}`,
                    lat: `${latitude}`,
                    key: "1b4de929b06f4e25afc77d5b867cd239",
                },
            };

            axios.request(options).then(function (response) {
                setData(response.data.data[0])
                setStatus("ok")
            }).catch(function (error) {
                console.error(error);
                setStatus("error")
            });
        };

        const getCoords = (position) => {
            try {
                let latitude = position.coords.latitude.toFixed(2)
                let longitude = position.coords.longitude.toFixed(2)
                getWeather(longitude, latitude)
            } catch (error) {
                console.error(error)
                setStatus("error")
            }
        };

        const getLocation = () => {
            try {
                navigator.geolocation.getCurrentPosition(getCoords, setStatus("error"))
                setStatus("")
            }
            catch (error) {
                setStatus("error")
                console.error(error)
            }
        };

        setTimeout(() => getLocation(),500)

    }, []);

    return { data, status };
};

export default useGetWeather;