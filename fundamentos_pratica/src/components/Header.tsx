import { CirclePlusIcon } from "lucide-react";
import { useState } from "react";
import { TodoTasksType } from "src/App";

interface HeaderProps {
  setTodoTasks: React.Dispatch<React.SetStateAction<TodoTasksType[]>>;
}

const Header = ({ setTodoTasks }: HeaderProps) => {
  const [taskDescription, setTaskDescription] = useState("");

  function handleCreatedTaskInTodoList() {
    const newTask: TodoTasksType = {
      id: crypto.randomUUID(),
      todoContent: taskDescription ?? "",
      checked: false,
    };

    setTodoTasks((currentTask) => [...currentTask, newTask]);
    setTaskDescription("");
  }

  return (
    <div className="bg-custom_gray-700 h-[300px] flex justify-center items-center relative">
      <div className="absolute w-[53rem] flex flex-col gap-[90px]">
        <div className="flex items-center justify-center">
          <img src="./public/Logo.png" alt="" className="w-60 object-cover" />
        </div>
        <div className="flex -mb-28 gap-2 w-full ">
          <input
            type="text"
            className="w-full bg-custom_gray-400 p-4 rounded-lg border-custom_gray-400 border-2 focus:outline-none focus:border-purple text-custom_gray-200"
            value={taskDescription}
            placeholder="Adicione uma nova tarefa"
            onChange={(event) => setTaskDescription(event.target.value)}
          />

          <button
            disabled={taskDescription.length === 0}
            className={`flex items-center gap-2 rounded-lg  text-custom_gray-100 px-4 ${
              taskDescription.length === 0 ? "bg-custom_gray-400 " : "bg-blue_dark hover:bg-blue_dark/85 hover:scale-95"
            }`}
            title={`${taskDescription.length === 0 ? "Digite algo no campo ao lado" : "Cadastrar tarefa"}`}
            onClick={() => handleCreatedTaskInTodoList()}
          >
            Criar <CirclePlusIcon size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
