import React, { useState } from 'react';

const FunctionComponent = ({ couleur }) => {
    const [color, setColor] = useState(couleur);

    const changeColor = () => {
         const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        setColor(randomColor);
    }
    
    
    return (
        <div>
            <div style={{ color }} onMouseOver={changeColor}>
                Je suis un composant
            </div>
        </div>
    );

};

export default FunctionComponent;