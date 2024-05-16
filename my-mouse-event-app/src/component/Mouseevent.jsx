import { useState, useEffect } from 'react'
const ExternalEvent =() =>{
    const [mouse, setMouse] = useState({x: 0, y: 0});

    useEffect(() => {
        document.title ="componentDidMount"
        document.addEventListener("mousemove", (e) => {
            console.log(e);
            setMouse({x: e.clientX, y: e.clientY})
            document.title = "componentDidUpdate"
        })
    })
    
    return (
        <>
            <h1>Mouse Event</h1>
            <p>Mouse position: {mouse.x} x {mouse.y}</p>
        </>
    )
}
export {ExternalEvent}