import React, {useState} from 'react';

const InputValue = () => {
    const [value, setValue] = useState('Text in Input')
    return (
        <div>
            <h2>{value}</h2>
            <input type={'text'} value={value} onChange={event => setValue(event.target.value)}/>
        </div>
    );
};

export default InputValue;