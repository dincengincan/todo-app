import React from 'react';

export const ResetAll = (props) => {
    let {resetAll} = props;
    return(
        <div>
            <button onClick={resetAll} style={{width : 120 }}>RESET</button>
        </div>
        
    )
}