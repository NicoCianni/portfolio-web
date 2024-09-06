import React, { useState , useEffect} from 'react';
import CarruselComponent, { images } from './SliderCarruselComponents';
import "./SliderCarrusel.css"
import { motion } from 'framer-motion';


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
        <motion.div 
        initial = {{x : 200, opacity: 0 }}
        whileInView = {{ x: 0, opacity: 1 }}
        transition = {{duration : 1.5}}
        className="carrusel">
            <div className="carrusel-slide">
                <CarruselComponent currentIndex={currentIndex} />
            </div>
        </motion.div>
    );
};



export default SliderCarrusel;

