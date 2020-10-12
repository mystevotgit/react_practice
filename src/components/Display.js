import React, {useState} from 'react';

function Display({name, number}) {
    return (
        <div style={{margin: "30px"}} className="Display">
            <div>
                Hi {name}, your number is {number}
            </div>
        </div>
    );
}

export default Display;