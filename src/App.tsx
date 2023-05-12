import { useState } from "react";
import TodoList from "./TodoList";

const App = () => {
  return (
    <div className="bg-[#f6fafd] flex justify-center flex-col items-center pb-12">
      <div className="flex justify-center  mt-40  items-center">
        <h2 className="text-[40px] text-[#5f606b] ">
          Typescript & Tailwind{" "}
          <span className="text-[#ff754e]">Todo List</span>
        </h2>
      </div>
      <TodoList />
    </div>
  );
};

export default App;
