import { BsPlusLg } from "react-icons/bs";

interface InputTextProps {
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  onSubmit(event: React.FormEvent<HTMLFormElement>): void;
  inputText: string;
}

const CreateList = ({ onChange, onSubmit, inputText }: InputTextProps) => {
  return (
    <form
      onSubmit={(event) => onSubmit(event)}
      className="flex justify-between items-center"
    >
      <input
        onChange={(e) => onChange(e)}
        type="text"
        placeholder="할 일을 입력해 주세요."
        className="p-3 w-full appearance-none bg-transparent border-b-4 focus:outline-none mr-3 flex text-center"
        value={inputText}
      />
      <button className=" rounded-full  text-white border-2 bg-[#676778] hover:bg-black  flex justify-center items-center w-[190px] h-10">
        <BsPlusLg />
      </button>
    </form>
  );
};

export default CreateList;
