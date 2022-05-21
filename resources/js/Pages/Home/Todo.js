import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

function Todo({ todo }) {
   const [mytodo, settodo] = useState(todo.todo);

   function changingTodo(event) {
      settodo(event.target.value);
   }

   function saveTodo(e) {
      e.preventDefault();
      Inertia.put(`/todo/${todo.id}`, { todo: mytodo });
   }

   function deleteTodo(e) {
      e.preventDefault();
      Inertia.delete(`/todo/${todo.id}`);
   }

   return (
      <div className="container p-4">
         <h3>{todo.todo}</h3>
         <form onSubmit={saveTodo}>
            <input
               className="form-control mb-2"
               type="text"
               value={mytodo}
               onChange={changingTodo}
            />
            <button type="submit" className="btn btn-success m-2">
               Save Todo
            </button>
            <button onClick={deleteTodo} className="btn btn-danger m-2">
               Delete Todo
            </button>
         </form>
      </div>
   );
}

export default Todo;
