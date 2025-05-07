import React, { useState } from 'react';
import './Checkbox.css'

function FunctCheckbox({title, checkEvent = () => {}}){
    const [check, checkBox] = useState(true);

    const handleCheck = () => {
        checkBox(!check)
        checkEvent()
    }

    return (
        <label className="styleBox" style={{color: check ? "#ca6d6d" : "white"}}>
            <input type="checkbox" onChange={handleCheck}/>
            {title}
        </label>
    );
}

export default FunctCheckbox