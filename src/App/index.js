import { useTodos } from "./useTodos";
import { Fragment } from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoForm } from "../TodoForm";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { Header } from "../TodoHeader";
import { ChangeAlertWithStorageListener } from "../ChangeAlert";

/* COMPONENTES */

const App = () => {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
    sincronizedTodos
  } = useTodos();

  return (
    <Fragment>
      <Header loading={loading}>
        <TodoCounter 
        totalTodos={totalTodos} 
        completedTodos={completedTodos} 
        />
        <TodoSearch 
        searchValue={searchValue} 
        setSearchValue={setSearchValue} 
        />
      </Header>

      <TodoList 
      error={error}
      loading={loading}
      searchedTodos={searchedTodos}
      searchText={searchValue}
      totalTodos={totalTodos}
      onError={() => <p>Error</p>} 
      onLoading ={() => <p>Cargando...</p>}
      onEmpty ={() => <p>Vacio</p>}
      onEmptySearchResults={
        (searchText) => <p>No hay resultados para {searchText}</p>
      }
      render = {(todo)=>
        <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
        />
      }
      >
      {
        (todo)=>
        <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
        />
      }  
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

      {openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
      <ChangeAlertWithStorageListener
        sincronized={sincronizedTodos}
      />
    </Fragment>
  );
};

export default App;
