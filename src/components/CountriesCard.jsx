const CountriesData = (props) => {
    const { name, flags, population, region, capital } = props;
    return (
        <div className="country-card">
            <div className="flag-warp">
                <img src={flags?.png} alt={flags?.alt} /> 
            </div>
            <div className="details">
                <h4>{name.common}</h4>
                <p>Population : {population.toLocaleString()}</p>
                <p>Region : {region}</p>
                <p>Capital : {capital?.[0]}</p>
            </div>
        </div>
    )
}

export default CountriesData