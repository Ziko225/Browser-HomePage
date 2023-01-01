import axios from "axios";
import { useEffect, useState } from "react";

const useGetWeather = () => {
    const [status, setStatus] = useState("init");
    const [data, setData] = useState();

    useEffect(() => {
        const getWeather = (longitude, latitude) => {
            const options = {
                method: 'GET',
                url: 'https://api.weatherbit.io/v2.0/current',
                params: {
                    lon: `${longitude}`,
                    lat: `${latitude}`,
                    key: "1b4de929b06f4e25afc77d5b867cd239",
                },
            };

            axios.request(options)
                .then((response) => {
                    setData(response.data.data[0]);
                    setStatus("ok");
                }).catch(() => {
                    setStatus("error");
                });
        };

        const getCoords = (position) => {
            try {
                const latitude = position.coords.latitude.toFixed(2);
                const longitude = position.coords.longitude.toFixed(2);
                getWeather(longitude, latitude);
            } catch {
                setStatus("error");
            };
        };

        const getLocation = () => {
            try {
                navigator.geolocation.getCurrentPosition(getCoords, setStatus("error"));
                setStatus("waitGPS");
            }
            catch {
                setStatus("error");
            };
        };
        setTimeout(() => getLocation(), 500);
    }, []);

    return { data, status };
};

export default useGetWeather;