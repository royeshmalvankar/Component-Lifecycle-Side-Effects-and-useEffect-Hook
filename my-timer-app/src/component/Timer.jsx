import { useState, useEffect } from 'react';
const Timer = () => {

    const [time, setTime] = useState(10);

    useEffect(() => {
     
        const interval = setInterval(() => {
          setTime((prevtime) => 
            prevtime <= 1 ? clearInterval(interval): prevtime - 1);
        }, 1000);

        return () => clearInterval(interval);
    },[])
    

    return (
      <h1>Timer: {time||0} </h1>   
    )
}

export {Timer}