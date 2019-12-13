import styled from 'styled-components';

const Button = styled.button`
    color: ${props => props.todosLength ? "white" : "rgb(128, 128, 128)"};
    font-size: 1em;
    width: 80px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: ${props => props.todosLength ? "pointer" : "not-allowed"};
    border: none;
    background: ${props => props.todosLength ? "#007991" : "#004d5c"};
    border-radius: 20px;
    margin: 20px auto 0; 
    pointer-events: ${props => props.notification ? "none" : "all"};

    &:hover {
        box-shadow: ${props => props.todosLength ? "0px 0px 10px gray" : "none"}
    }
`;








export const Styled = {
    Button,
    
}