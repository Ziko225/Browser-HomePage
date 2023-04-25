import axios from "axios";
import { useEffect, useState } from "react";

const useGetWeather = () => {
    const [status, setStatus] = useState("init");
    const [data, setData] = useState();

    useEffect(() => {
        const getLocation = () => {
            navigator.permissions.query({ name: 'geolocation' }).then((value) => {
                if (value.state === "granted") {
                    navigator.geolocation.getCurrentPosition(getCoords, setStatus("error"));
                    setStatus("waitGPS");
                } else {
                    setStatus("noGPS");
                };
            });
        };
        setTimeout(() => getLocation(), 500);
    }, []);

    const getCoords = (position) => {
        const latitude = position.coords.latitude.toFixed(2);
        const longitude = position.coords.longitude.toFixed(2);
        getWeather(longitude, latitude);
    };

    const getWeather = (longitude, latitude) => {
        const options = {
            method: "GET",
            url: "https://api.weatherbit.io/v2.0/current",
            params: {
                lon: longitude,
                lat: latitude,
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

    return { data, status };
};

export default useGetWeather;