import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

export default function PokemonImage({image, name, parentHeight}) {

    const finalPosition = 0;
    const initialPosition = -50;
    const animationTime = 1000;
    const animationInterval = 5;
    const stepInterval = 10;
    const stepSize = (finalPosition-initialPosition) / (animationTime/stepInterval);
    
    const [slideEffect, setSlideEffect] = useState(initialPosition);
    
    const [lastDate, setLastDate] = useState(Date.now());

    useEffect(() => {
        const interval = setInterval(() => {
            let slide = slideEffect + stepSize;

            if (slide < finalPosition) {
                setSlideEffect(slide);
                console.log('elapsed time: ' + (Date.now() - lastDate));
                setLastDate(Date.now());
            }

        }, animationInterval);
        return () => clearInterval(interval);
    }, [slideEffect]);

    return (
        <PokemonImg src={image} alt={name} parentHeight={parentHeight} height={190} slideEffect={slideEffect} />
    );
}


const fadeInEffect = keyframes`
    from { opacity: 0; }
    to   { opacity: 1; }
`;

const PokemonImg = styled.img`
    position: absolute;
    
    height: ${props => props.height}px;
    // width: 190px;

    top: ${props => props.parentHeight/2-props.height/2 + props.slideEffect }px;

    animation-name: ${fadeInEffect};
    animation-duration: 2s;
`;