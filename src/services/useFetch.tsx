import { useCallback, useEffect, useState } from "react";

interface WeatherInterface {
    weather: [{ icon?: string; description?: string }];
    main: { temp?: number };
}

export const useFetch = (action: string, url: string) => {
    const [currentWeather, setCurrentWeather] = useState<WeatherInterface>({
        weather: [{}],
        main: {},
    });
    const [isLoadingWeather, setIsLoadingWeather] = useState<boolean>(true);
    const [isConnected, setIsConnected] = useState<boolean>(true);

    const getWeather = useCallback(async () => {
        try {
            const response = await fetch(url);
            const timeWeather = await response.json();
            setCurrentWeather(timeWeather);
            setIsLoadingWeather(false);
        } catch (error) {
            setIsConnected(false);
            setCurrentWeather({
                weather: [{}],
                main: {},
            });
            setIsLoadingWeather(true);
        }
    }, [url]);

    useEffect(() => {
        if (action !== "news") {
            getWeather();
        }
    }, [action, getWeather]);

    return {
        isLoadingWeather,
        currentWeather,
        isConnected,
    };
};
