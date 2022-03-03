import { useEffect, useState } from "react";
import styled from "styled-components";

export default function AnimatedBar({maxSize}) {

    const [barSize, setBarSize] = useState(0);
    const timeToFill = 500;
    const stepInterval = 10;
    const stepSize = maxSize / (timeToFill/stepInterval)

    useEffect(() => {
        const interval = setInterval(() => {

            let size = barSize + stepSize;

            if (size <= maxSize) {
                setBarSize(size);
            }

        }, stepInterval);
        return () => clearInterval(interval);
    }, [barSize, maxSize, stepSize]);

    return (
        <StatBarFill size={Math.floor(barSize)}></StatBarFill>
    );
}

const StatBarFill = styled.div`
    width: ${(props) => props.size}px;
    height: 7px;
    background: #027FC5;
`;