export const getWeatherDescription = (temp: number): any[] => {
    return temp <= 0
        ? [" بد سرده 🥶"]
        : temp > 0 && temp <= 10
        ? [" شال‌گردن لازمه 🤧"]
        : temp > 10 && temp <= 18
        ? [" هوا دلچسبه 🤤"]
        : temp > 18 && temp < 28
        ? [" هوای بهشته 😇"]
        : temp >= 28 && temp <= 30
        ? [" هوا گرمه 🌞"]
        : temp >= 30
        ? ["هوا خیلی گرمهه 🥵"]
        : [];
};

export const translateWeather = (desc: string) => {
    return desc === "clear sky"
        ? "آسمان صاف"
        : desc === "few clouds"
        ? "مقداری ابری"
        : desc === "scattered clouds"
        ? "ابرهای پراکنده"
        : desc === "broken clouds"
        ? "ابر های شکسته"
        : desc === "shower rain"
        ? "باران شدید"
        : desc === "	rain"
        ? "بارانی"
        : desc === "thunderstorm"
        ? "رعد و برق"
        : desc === "snow"
        ? "برف"
        : desc === "mist"
        ? "مه"
        : "";
};
