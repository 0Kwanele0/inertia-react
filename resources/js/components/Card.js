import React, { useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";

function Card({ todo, id }) {
   function todoClicked() {
      return Inertia.get(`/todo/${id}`);
   }
   return (
      <div onClick={todoClicked} className="card p-2 mb-2">
         <h3>{todo}</h3>
      </div>
   );
}

export default Card;
