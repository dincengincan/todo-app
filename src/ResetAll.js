import React from 'react';

export const ResetAll = (props) => {
    let {resetAll, todos} = props;
    return(
        <div >
            {
                todos.length 
                ? <button onClick={resetAll} className = "ToDo-Add-Remove">RESET</button>
                : <button  className = "ToDo-Add-Remove-Disable" >RESET</button>
            }
            
            
            
        </div>
        
    )
}