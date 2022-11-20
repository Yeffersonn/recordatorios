import { HashRouter, Route, Routes } from "react-router-dom";
import { Fragment } from "react";
import { HomePage } from "./home/HomePage";
import { NewTodoPage } from "./new/NewTodoPage";
import { EditTodoPage } from "./edit/EditTodoPage";

const App = () => {
  return (
    <Fragment>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new" element={<NewTodoPage />} />
          <Route path="/edit/Todo=:id" element={<EditTodoPage />} />
          <Route path='*' element={<h1>Not found</h1>}/>
        </Routes>
      </HashRouter>
    </Fragment>
  );
};

export { App };
