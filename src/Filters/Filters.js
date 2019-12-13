import React from 'react';
import {connect} from "react-redux";
import {setFilter} from "../actionCreators/actionCreators";
import { Styled } from './style';


const options = [
    {label: "all", labelKey: "all", id: 1},
    {label: "completed", labelKey: "completed", id: 2},
    {label: "uncompleted", labelKey: "uncompleted", id: 3}
];

const Filters = (props) => {
    return(
        
        <Styled.FilterContainer>
            {
                options.map((option) => {
                    if(option.label === props.activeFilter){
                        return <Styled.FilterActive onClick = {() => {props.changeFilter(option.labelKey)}} >{option.label}</Styled.FilterActive>
                    }else{
                        return <Styled.Filter onClick = {() => {props.changeFilter(option.labelKey)}} >{option.label}</Styled.Filter>
                    }    
                })
            }
        </Styled.FilterContainer>
    )
}

const mapStateToProps = state => {
    return{
        activeFilter: state.activeFilter
    }
};

const mapDispatchToProps = dispatch => ({
    changeFilter: (newFilter) => {dispatch(setFilter(newFilter))}
});


export default connect(mapStateToProps, mapDispatchToProps)(Filters);