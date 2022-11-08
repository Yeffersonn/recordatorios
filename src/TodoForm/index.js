import React from "react";
import './TodoForm.css'

function TodoForm({addTodo, setOpenModal,}){

    const [newTodoValue, setnewTodoValue ] = React.useState('')


    const onChange = (e) =>{
        setnewTodoValue(e.target.value)
    };

    const onCancel = () =>{
        setOpenModal(false)
    };

    const onSubmit = (e) =>{
        e.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false)
    };


    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo Todo</label>
            <textarea placeholder="cortar cebolla" value={newTodoValue} onChange={onChange}>
            </textarea>
            <div className="TodoForm-buttonContainer">
                <button className="TodoForm-button TodoForm-button--cancel"  type="button" onClick={onCancel}>Cancelar</button>
                <button className="TodoForm-button TodoForm-button--add" type="submit" >Añadir</button>
            </div>
        </form> 
    );
}

export {TodoForm};