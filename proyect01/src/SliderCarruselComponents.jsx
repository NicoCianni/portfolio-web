import React from 'react';
import "./SliderCarruselComponents.css"


const images = [
    "https://cdn-icons-png.flaticon.com/128/733/733553.png",
    "https://cdn-icons-png.flaticon.com/128/1183/1183672.png",
    "https://cdn-icons-png.flaticon.com/128/5968/5968267.png",
    "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
    "https://cdn-icons-png.flaticon.com/128/5968/5968242.png",
    "https://cdn-icons-png.flaticon.com/128/5968/5968672.png"
];

const CarruselComponent = ({ currentIndex }) => {
    return (
        <div className="carrusel-item">
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        </div>
    );
};

export { images };
export default CarruselComponent;




