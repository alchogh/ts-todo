import { useState } from "react";
import TodoList from "./TodoList";

interface TList {
  id: number;
  text: string;
  completed: boolean;
}
function App() {
  const [todoList, setTodoList] = useState<TList[]>([
    { id: 1, text: "할일 1", completed: false },
    { id: 2, text: "할일 2", completed: false },
  ]);
  return (
    <div className="bg-orange-100 grid place-items-center justify-center">
      {todoList.map((item, index) => (
        <div key={item.id}>
          <li className="flex justify-between w-screen">
            <button className="text-white bg-black rounded-md shadow-lg p-4 hover:bg-gray-400">
              완료
            </button>
            <p>할 일 1</p>
            <div className="buttonContainer">
              <button
                type="button"
                className="text-white bg-black rounded-md shadow-lg p-4 hover:bg-gray-400 "
              >
                수정
              </button>
              <button
                type="button"
                className="text-white bg-black rounded-md shadow-lg p-4 hover:bg-gray-400"
              >
                삭제
              </button>
            </div>
          </li>
        </div>
      ))}

      <div className="p-10">
        <form>
          <input
            type="text"
            placeholder="할 일을 입력해 주세요."
            className="p-3 "
          />
          <button>등록하기</button>
        </form>
      </div>
    </div>
  );
}

export default App;
