export const CountryCard = ({country}) => {
    const { flags, name, population, region, capital } = country;
    
    return <li>{country.name.common}</li>
}