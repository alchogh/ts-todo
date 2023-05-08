interface InputTextProps {
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  onSubmit(event: React.FormEvent<HTMLFormElement>): void;
  inputText: string;
}

const CreateList = ({ onChange, onSubmit, inputText }: InputTextProps) => {
  return (
    <div className="p-10">
      <form onSubmit={(event) => onSubmit(event)}>
        <input
          onChange={(e) => onChange(e)}
          type="text"
          placeholder="할 일을 입력해 주세요."
          className="p-3 "
          value={inputText}
        />
        <button>등록하기</button>
      </form>
    </div>
  );
};

export default CreateList;
