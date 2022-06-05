import React from 'react';
import styled from 'styled-components';


const InWrapp = styled.div`
margin: 6px 25px

`
const InputComponent = (props) => {
    return (
        <div>
            <InWrapp>
              <input type={props.type} placeholder={props.plase} name={props.name} value={props.value} onChange={props.func} /> 
            </InWrapp>
        </div>
    );
}

export default InputComponent;
