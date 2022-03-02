import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

export default function PokemonImage({image, name, parentHeight}) {

    const initialPosition = 50
    const animationTime = 1000;
    const animationInterval = 5;
    const [slideEffect, setSlideEffect] = useState(initialPosition);


    const stepInterval = 10;
    const stepSize = initialPosition / (animationTime/stepInterval)

    useEffect(() => {
        const interval = setInterval(() => {
            let slide = slideEffect - stepSize ;

            if (slide > 0) {
                setSlideEffect(slide);
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
    
    width: 190px;
    height: 190px;

    top: ${props => props.parentHeight/2-props.height/2 - props.slideEffect }px;

    animation-name: ${fadeInEffect};
    animation-duration: 2s;
`;