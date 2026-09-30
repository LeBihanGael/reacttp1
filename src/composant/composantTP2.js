import React, { useState } from 'react';

const FunctionComponent = ({ couleur }) => {
    const [color, setColor] = useState(couleur);

    const changeColor = () => {
         const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        setColor(randomColor);
    }
    
    
    return (
        <div>
            <div style={{ color }}>
                Je suis un composant
            </div>
            <button onMouseOver={changeColor}>Changer la couleur</button>
        </div>
    );

};

export default FunctionComponent;