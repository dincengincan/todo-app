import styled from 'styled-components';

const Button = styled.button`
    width: 35px;
    height: 35px;
    cursor: pointer;
    background: #6c7b95;
    border-radius: 20px;
    color: white;
    font-size: 15px;
    margin-right: 5px;
    border: none;

    &:hover {
        box-shadow: ${props => props.notification ? "none" : "0px 0px 10px gray"};
    }
`;

const Todo = styled.div`
    width: 90%;
    background-color: ${props => props.checked ? "#e7e7e7fd" : "white"};
    border: 1px solid lightgrey;
    box-shadow: 1px 1px 1px lightgrey;
    padding: 12px;
    margin-right: 10px;
    border-radius: 40px;
    cursor: pointer;
    color: ${props => props.checked ? "#c0c0c0fd" : "black"};
    text-decoration: ${props => props.checked ? "line-through" : "none"}

    &:hover {
        box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.3);
    }
`;


const TodoItem = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
`;
const TodoChecked = styled(Todo)`
    background-color: #e7e7e7fd;
    text-decoration: line-through;
    color: #c0c0c0fd;
`;



export const Styled = {
    Button,
    Todo,
    TodoChecked,
    TodoItem,
    
}


