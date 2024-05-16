import { useEffect,useState } from "react";

let Browserevent = () =>{
    useEffect(() => {

        const element = document.querySelector("div#scroll-box");
        const output = document.querySelector("p#output");
      
        let scrollInterval= setInterval( () => {
          element.addEventListener("scroll", () => {
          output.innerHTML = "Scroll event fired!";
      
              setTimeout(() => {
              output.innerHTML = "Waiting on scroll events...";
          }, 1000);
          });
      })
      
      return () => clearInterval(scrollInterval);
      },[])
    
    return (
        <>
        <div
        id="scroll-box"
        style={{overflow: "scroll", height: "100px", width: "100px", float: "left"}}>
        <p style={{height: "200px", width: "200px"}}>Scroll me!</p>
        </div>
        <p style={{textAlign:"center"}} id="output">Waiting on scroll events...</p>
        </>
    )
}

export {Browserevent}