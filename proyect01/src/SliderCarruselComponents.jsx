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

    const transformValue = "translateX(-" + (currentIndex * 100) + "%";

    return (
        <div className='carrusel-container'>
            <div className="carrusel-item" style={{ transform : transformValue }}>
                {images.map((image, index) => (
                    <img src={image} key={index} alt={`Slide ${index + 1}`} />
                ))}
            </div>
        </div>

    );
};

export { images };
export default CarruselComponent;




