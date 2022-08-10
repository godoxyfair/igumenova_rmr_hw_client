import React from 'react';
import './input.css'

// export type InputProps = {
//     props?: string
// }


const Input = (props : any) => {
    return (
        <input
            onChange={(event)=> props.setValue(event.target.value)}
            value={props.value}
            type={props.type}
            placeholder={props.placeholder}
        />
    );
};

export default Input;