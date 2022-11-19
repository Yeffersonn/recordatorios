import React from "react";
import { useNavigate } from "react-router-dom";
import './TodoForm.css'

function TodoForm(props){

    const navigate = useNavigate()
    const [newTodoValue, setnewTodoValue ] = React.useState( props.defaultTodoText || '')


    const onChange = (e) =>{
        setnewTodoValue(e.target.value)
    };

    const onCancel = () =>{
        navigate('/')
    };

    const onSubmit = (e) =>{
        e.preventDefault();
        navigate('/')
        props.submitEvent(newTodoValue);
    };


    return(
        <form onSubmit={onSubmit}>
            <label>{props.label}</label>
            <textarea placeholder="cortar cebolla" value={newTodoValue} onChange={onChange}>
            </textarea>
            <div className="TodoForm-buttonContainer">
                <button className="TodoForm-button TodoForm-button--cancel"  type="button" onClick={onCancel}>Cancelar</button>
                <button className="TodoForm-button TodoForm-button--add" type="submit" >{props.submitText}</button>
            </div>
        </form> 
    );
}

export {TodoForm};