import React, { useState , useEffect} from 'react';
import CarruselComponent, { images } from './SliderCarruselComponents';
import "./SliderCarrusel.css"

const SliderCarrusel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);


    const goToNext = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    useEffect(() => {
        const intervalId = setInterval(goToNext, 2000);

        return () => clearInterval(intervalId);
    }, [currentIndex]);

    return (
        <div className="carrusel">
            <div className="carrusel-slide">
                <CarruselComponent currentIndex={currentIndex} />
            </div>
        </div>
    );
};



export default SliderCarrusel;

