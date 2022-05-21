import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import Card from "../../components/Card";

function Index({ message }) {
   function submitTodo(event) {
      event.preventDefault();
      const values = { todo: event.target.todo.value };
      console.log(values);
      Inertia.post("/post", values);
   }

   return (
      <div className="container row mt-2">
         <h1>Hello World</h1>
         <div className="col-6">
            {message.length > 0 &&
               message.map((item, key) => {
                  return <Card todo={item.todo} id={item.id} key={key} />;
               })}
         </div>
         <div className="col-6">
            <form onSubmit={submitTodo}>
               <input
                  className="form-control mb-3"
                  type="text"
                  placeholder="Type your todo"
                  required={true}
                  name="todo"
               />
               <button type="submit" className="btn btn-outline-primary">
                  Save Todo
               </button>
            </form>
         </div>
      </div>
   );
}

export default Index;
