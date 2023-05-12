import { useState } from "react";
import TodoItem from "./TodoItem";
import CreateList from "./CreateList";

export interface TList {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList = () => {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState<TList[]>([
    { id: 1, text: "할일 1", completed: false },
    { id: 2, text: "할일 2", completed: false },
  ]);

  const textTypingHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const textInputHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const newTodo: TList = {
      id: Date.now(),
      text: inputText,
      completed: false,
    };
    setTodoList([...todoList, newTodo]);
    setInputText("");
  };

  const textDeleteHandler = (id: number) => {
    setTodoList(todoList.filter((todoItem) => todoItem.id !== id));
  };

  const textUpdateHandler = (newTodo: TList): void => {
    const updateTodo = todoList.map((item) =>
      item.id === newTodo.id ? newTodo : item
    );
    setTodoList(updateTodo);
  };
  return (
    <div className="bg-white flex-col j p-3 w-6/12  border-2  border-[#e5e7eb]-900 items-center">
      <CreateList
        onChange={textTypingHandler}
        onSubmit={textInputHandler}
        inputText={inputText}
      />

      {todoList.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          text={item.text}
          completed={item.completed}
          onClickDelete={textDeleteHandler}
          onClickUpdate={textUpdateHandler}
        />
      ))}
    </div>
  );
};

export default TodoList;
