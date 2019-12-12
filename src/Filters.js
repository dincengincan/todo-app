import React from 'react';
import './App.css';

const options = [
    {label: "all", labelKey: "all", id: 1},
    {label: "completed", labelKey: "completed", id: 2},
    {label: "uncompleted", labelKey: "uncompleted", id: 3}
];

export const Filters = (props) => {
    return(
        
        <div className = "Filters-Container">
            {
                options.map((option) => {
                    if(option.label === props.activeFilter){
                        return <div className="Filters-Text-Active" onClick = {() => {props.changeFilter(option.labelKey)}} >{option.label}</div>
                    }else{
                        return <div className="Filters-Text" onClick = {() => {props.changeFilter(option.labelKey)}} >{option.label}</div>
                    }    
                })
            }

             
        </div>
    )
}