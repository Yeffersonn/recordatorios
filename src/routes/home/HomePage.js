import { useTodos } from "../useTodos";
import { Fragment } from "react";
import { TodoCounter } from "../../UI/TodoCounter";
import { TodoSearch } from "../../UI/TodoSearch";
import { TodoList } from "../../UI/TodoList";
import { TodoItem } from "../../UI/TodoItem";
import { Header } from "../../UI/TodoHeader";
import { CreateTodoButton } from "../../UI/CreateTodoButton";
import { ChangeAlertWithStorageListener } from "../../UI/ChangeAlert";
import { useNavigate } from "react-router-dom";

/* COMPONENTES */
const HomePage = () => {

  const navigate = useNavigate()

  const {
    error,
    loading,
    searchedTodos,
    /* openModal, */
    totalTodos,
    completedTodos,
    searchValue,
    completeTodo,
    /* setOpenModal, */
    deleteTodo,
    setSearchValue,
    addTodo,
    sincronizedTodos,
  } = useTodos();

  return (
    <Fragment>
      <Header loading={loading}>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </Header>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        searchText={searchValue}
        totalTodos={totalTodos}
        onError={() => <p>Error</p>}
        onLoading={() => <p>Cargando...</p>}
        onEmpty={() => <p>Vacio</p>}
        onEmptySearchResults={(searchText) => (
          <p>No hay resultados para {searchText}</p>
        )}
        render={(todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        )}
      >
        {(todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onEdit = { () => 
              navigate(`/edit/${todo.id}`, 
              {
                state: {todo}
              }
            )}
            onComplete={() => completeTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        )}
      </TodoList>

      {/* <TodoList> COMPOSICIÓN DE COMPONENTES
        {loading && <p>Estamos cargando</p>}
        {error && <p>Error</p>}
        {!loading && !searchedTodos.length && <p>Vacio</p>}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList> */}

      {/* {openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )} */}

      <CreateTodoButton
      onClick = {() => navigate('/new')}
      /* setOpenModal={setOpenModal} */
      />
      <ChangeAlertWithStorageListener sincronized={sincronizedTodos} />
    </Fragment>
  );
};

export { HomePage };
