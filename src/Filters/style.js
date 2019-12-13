import styled from 'styled-components';

const Filter = styled.div`
    width: 18%;
    color: #c0c0c0fd;
    padding: 3px;
    margin-right: 10px;
    border-radius: 40px;
    border: solid 1px #d6d6d6;
    cursor: pointer;
    display: inline-block;
`;

const FilterActive = styled(Filter)`
    background-color:white;
    color: black;
`;


const FilterContainer = styled.div`
    text-align: center;
`;


export const Styled = {
    Filter,
    FilterActive,
    FilterContainer,
}