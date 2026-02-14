import { useEffect, useState, useTransition } from "react"
import { getCountryData } from "../api/postApi"
import { Loader } from "../components/UI/Loader"

export const Country = () => {
    const [isPending, startTransition] = useTransition()
    const [contries, setCountries] = useState([])

    useEffect(() => {
        startTransition(async () => {
            const res = await getCountryData();
            setCountries(res);
        })
    }, [])

    if (isPending) return <Loader />

    console.log(contries);

    return (
        <section className="country-section">
            <div className="grid grid-four-cols">
                {
                    setCountries.map((curCountry) => {
                        return <CountryCard country = {curCountry}/>
                    })
                }
            </div>
        </section>
    )
}