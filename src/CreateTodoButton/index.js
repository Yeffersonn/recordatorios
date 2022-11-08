import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton(props){

    const onClickButton = ({target}) =>{
        /* Envía estado anterios del estado  */
        props.setOpenModal( prevState => !prevState);
        target.classList.toggle('CreateTodoButtonRotate')
    }

    return(
        <button className="CreateTodoButton CreateTodoButtonRotate" onClick={onClickButton}>
            +
        </button>
    );
}

export {CreateTodoButton};