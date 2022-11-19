import {TodoForm} from '../../UI/TodoForm';
import { useTodos } from '../useTodos';

const NewTodoPage = () => {

    const { addTodo } = useTodos()

    return <TodoForm  
        label='Escribe tu nuevo todo'
        submitText='Añadir'
        submitEvent={addTodo}
    />;
};

export { NewTodoPage };
