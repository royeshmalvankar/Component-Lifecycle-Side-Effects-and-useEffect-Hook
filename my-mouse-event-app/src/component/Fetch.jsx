import { useEffect, useState } from 'react'

const Fecth = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData()
    },[])

    const fetchData = async () => {
        try {
            let response = await fetch("https://restcountries.com/v3.1/all");
            let data = await response.json();
            setData(data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <h1>Fetch API</h1>
            {data.map((item,i) => {
                return(
                    <div key={i}>
                    <img src={item.flags.png} alt="" />
                    <h1>Name: {item.name.official}</h1>
                    <p>Capital: {item.capital}</p>
                    <p>Population: {item.population}</p>
                    <p>Region: {item.region}</p>
                </div>
                )
                
            })}
            
        </>
    )

}
export {Fecth}