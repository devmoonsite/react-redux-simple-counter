import React from 'react';


const Btn = (props) => {
    return(
        <button onClick={(e) => {  props.click(props.text) } }>{ props.text }</button>
    );
}


export default Btn;


