const api = api.create({
    baseURL: "https://restcountries.com/v3.1",
})

const getCountryData = () =>{
    return api.get("/all?fields=name,population,region,capital,flags");
}