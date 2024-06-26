import React, { useState , useEffect} from 'react';
import CarruselComponent, { images } from './SliderCarruselComponents';
import "./SliderCarrusel.css"

const SliderCarrusel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    useEffect(() => {
        const intervalId = setInterval(goToNext, 3000);

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

//<button className="carrusel-button" onClick={goToPrevious}>❮</button>
//<button className="carrusel-button" onClick={goToNext}>❯</button>

export default SliderCarrusel;

