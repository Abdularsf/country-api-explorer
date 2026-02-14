import { useEffect, useState, useTransition } from "react"
import { getCountryData } from "../api/postApi"
import { Loader } from "../components/UI/Loader"

export const Country = () => {
    const [isPending, startTransition] = useTransition()
    const [contries, setCountries] = useState([])

    useEffect(() => {
        startTransition(async () => {
            const res = await getCountryData();
            setCountries(res.data);
        })
    }, [])

    if (isPending) return <Loader />

    console.log(contries);

    return (
        <section className="country-section">
            <ul className="grid grid-four-cols">
                {
                    contries.map((curCountry) => {
                        // return <CountryCard country = {curCountry}/>
                    })
                }
            </ul>
        </section>
    )
}