import React, {useState} from 'react';

function Button({step}) {
    const [state, setstate] = useState(0);

    const handlePlusClick = () => {
        setstate(state => state + step);
    }
    const handleMinusClick = () => {
        setstate(state => state - step);
    }

    return (
        <div style={{margin: "30px"}}>
            <button >{state}</button>
            <div Style={{display:"flex", justifyContent:"center"}}>
                <button onClick={handleMinusClick}>Decrease</button>
                <button onClick={handlePlusClick}>Increase</button>
            </div>
        </div>
    )
}

export default Button;