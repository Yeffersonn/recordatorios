import { useLocation, useParams } from 'react-router-dom';
import { TodoForm } from '../../UI/TodoForm';
import { useTodos } from '../useTodos';

const EditTodoPage = () => {

    const location = useLocation()
    const params = useParams()
    const id = Number(params.id)
    const { editTodo, getTodo, loading } = useTodos()
    
    let todoText;
    

    if(location.state?.todo){
        todoText = location.state.todo.text;
    } else if (loading){
        return <p>cargando...</p>
    }else{
        const todo = getTodo(id)
        todoText = todo.text
    }

    console.log('sds')
    
    return <TodoForm
        label='Edita tu todo'
        defaultTodoText={todoText}
        submitText='Editar'
        submitEvent={(newText) => editTodo(id, newText)}
    />;

};

export { EditTodoPage };