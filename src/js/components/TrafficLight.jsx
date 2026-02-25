import React, { useState, useEffect } from "react";

const TrafficLight = () => {
    const [color, setColor] = useState("red");

    useEffect(() => {
        const interval = setInterval(() => {
            setColor((prevColor) => {
                if (prevColor === "red") return "green";
                if (prevColor === "green") return "yellow";
                return "red";
            });
        }, 3000); 
        return () => clearInterval(interval);
    }, []);

    const lightStyle = {
        width: "70px", height: "70px", borderRadius: "50%",
        margin: "10px auto", cursor: "pointer", transition: "all 0.3s"
    };

    return (
        <div className="d-flex flex-column align-items-center">
            <div className="bg-dark" style={{ width: "10px", height: "50px" }}></div>
            <div className="bg-dark p-3 rounded-3 shadow-lg" style={{ width: "100px" }}>
                <div onClick={() => setColor("red")} 
                     style={{ ...lightStyle, backgroundColor: "red", opacity: color === "red" ? 1 : 0.2, boxShadow: color === "red" ? "0px 0px 20px 5px white" : "none" }}></div>
                <div onClick={() => setColor("yellow")} 
                     style={{ ...lightStyle, backgroundColor: "yellow", opacity: color === "yellow" ? 1 : 0.2, boxShadow: color === "yellow" ? "0px 0px 20px 5px white" : "none" }}></div>
                <div onClick={() => setColor("green")} 
                     style={{ ...lightStyle, backgroundColor: "green", opacity: color === "green" ? 1 : 0.2, boxShadow: color === "green" ? "0px 0px 20px 5px white" : "none" }}></div>
            </div>
        </div>
    );
};


export default TrafficLight;