import { useState } from "react";
import TodoItem from "./TodoItem";
import CreateList from "./CreateList";
interface TList {
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
  return (
    <div className="bg-orange-100 grid place-items-center justify-center">
      {todoList.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          text={item.text}
          completed={item.completed}
          onClick={textDeleteHandler}
        />
      ))}
      <CreateList
        onChange={textTypingHandler}
        onSubmit={textInputHandler}
        inputText={inputText}
      />
    </div>
  );
};

export default TodoList;
