import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteExpenses } from '../redux/action/action';
import styled from 'styled-components';

const Wrapp = styled.div`
height: 30px;
width: 305px;
background-color: white;
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid black;
`

const UserList = (props) => {
    const dispatch = useDispatch()

function onDelete(id){
    dispatch(deleteExpenses(id))
}

    return (
        <div >
            <Wrapp>
            <span  key={props.id} > {props.title} </span>
            <span>${props.price} </span>
            <span>{props.date}</span>
            <span className='span' onClick={()=>onDelete(props.id)}>X</span>
             </Wrapp>
        </div>
    );
}

export default UserList;
