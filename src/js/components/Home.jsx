import React, { useState, useEffect } from "react";
import TrafficLight from "./TrafficLight.jsx";

const Home = () => {
    const [color, setColor] = useState("red");

    useEffect(() => {
        const interval = setInterval(() => {
            setColor((prev) => {
                if (prev === "red") return "green";
                if (prev === "green") return "yellow";
                return "red";
            });
        }, 30000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="text-center mt-5">
            <h1>Ciudad Controlada</h1>
           
            <TrafficLight currentColor={color} /> 
            <p>el color será cambiado Automáticamente</p>
        </div>
    );
};

export default Home;