import React from 'react';

function Form({onFakeChange, name}) {

    const handleRealChange = (e) => {
        onFakeChange(e.target.value);
    }

    return (
        <div style={{margin: "30px"}}>
            <input type="text" name={name} onChange={handleRealChange}/>
        </div>
    );
}

export default Form;
