import {SET_FILTER} from "../actions/actions";

export function setFilter(newFilter){
    return {type: SET_FILTER, activeFilter: newFilter}
}