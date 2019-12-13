import styled from 'styled-components';

const Button = styled.button`
    color: white;
    font-size: 1em;
    width: 80px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: none;
    background: #007991;
    border-radius: 20px;
    margin: 20px auto 0; 
    pointer-events: ${props => props.notification ? "none" : "all"};;

    &:hover {
        box-shadow: 0px 0px 10px gray;
    }
    
`;



const Input = styled.input`
    width: 58%;
    padding: 10px;
    font-size: 1em;
    margin: 10px 10px 0;
    border: solid 1px  #d6d6d6;
    border-radius: 20px; 
    
    &:hover {
        box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.3);
    }
`;





export const Styled = {
    Button,
    Input,
}

