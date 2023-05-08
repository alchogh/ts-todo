interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
  onClick(id: number): void;
}

const TodoItem = ({ text, completed, onClick, id }: TodoItemProps) => {
  return (
    <li className="flex justify-between w-screen">
      {completed ? (
        <button className="text-white bg-black rounded-md shadow-lg p-4 hover:bg-gray-400">
          완료됨
        </button>
      ) : (
        <button className="text-white bg-black rounded-md shadow-lg p-4 hover:bg-gray-400">
          완료하기
        </button>
      )}

      <p>{text}</p>
      <div className="buttonContainer">
        <button
          type="button"
          className="text-white bg-black rounded-md shadow-lg p-4 hover:bg-gray-400 "
        >
          수정
        </button>
        <button
          type="button"
          onClick={() => onClick(id)}
          className="text-white bg-black rounded-md shadow-lg p-4 hover:bg-gray-400"
        >
          삭제
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
