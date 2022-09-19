import axios from "axios";
import { useEffect, useState } from "react";

const useGetWeather = () => {

    const [data, setData] = useState("")

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'weather.json',
            //  url: 'https://api.weatherbit.io/v2.0/current',
            // params: { lon: '38.5', lat: '-78.5', key:"ba22399fefba4a1294cc2b57a1867d4e" },
        };

        axios.request(options).then(function (response) {
            setData(response.data.data[0])
        }).catch(function (error) {
            console.error(error);
        });
    }, []);

    return { data }
};

export default useGetWeather