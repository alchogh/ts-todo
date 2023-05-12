import { useState } from "react";
import { TList } from "./TodoList";
import { BsTrash } from "react-icons/bs";
import { BsCheckLg } from "react-icons/bs";
import { BsPencilFill } from "react-icons/bs";
interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
  onClickDelete(id: number): void;
  onClickUpdate(updatedTodoItem: TList): void;
}

const TodoItem = ({
  text,
  completed,
  onClickDelete,
  id,
  onClickUpdate,
}: TodoItemProps) => {
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [updatedText, setUpdatedText] = useState<string>(text);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedText(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const updatedTodoItem = {
      id: id,
      text: updatedText,
      completed: completed,
    };
    onClickUpdate(updatedTodoItem);
    setIsUpdating(false);
  };
  return (
    <li className=" flex justify-between items-center p-4 ">
      <div></div>
      <p className="items-center">{text}</p>
      <div className="buttonContainer">
        <button
          type="button"
          className="text-whiterounded-md p-4 hover:bg-gray-400 "
        >
          <BsPencilFill />
        </button>
        <button
          type="button"
          onClick={() => onClickDelete(id)}
          className="text-black rounded-md  w-100px h-50px p-4 hover:bg-gray-400"
        >
          <BsTrash />
        </button>

        {completed ? (
          <button className="rounded-md  p-4 hover:bg-gray-400">
            <BsCheckLg />
          </button>
        ) : (
          <button className="rounded-md  p-4 hover:bg-gray-400">
            <BsCheckLg />
          </button>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
