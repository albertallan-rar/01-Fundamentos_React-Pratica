import { NotepadTextIcon } from "lucide-react";
import { TodoTasksType } from "src/App";
import { CardTask } from "./CardTask";

interface ContentHeaderProps {
  todoTasks: TodoTasksType[];
  setTodoTasks: React.Dispatch<React.SetStateAction<TodoTasksType[]>>;
}

export default function ContentHeader({ todoTasks, setTodoTasks }: ContentHeaderProps) {
  const completedTasksCount = todoTasks.filter((task) => task.checked).length;
  function handleCheckedCompletedTask(todoId: string) {
    const result = todoTasks.map((todoTask) => {
      if (todoTask.id === todoId) {
        return { ...todoTask, checked: !todoTask.checked };
      }

      return todoTask;
    });
    setTodoTasks(result);
    console.log("Resultado", result);
  }

  function handleRemoveTask(todoId: string) {
    const result = todoTasks.filter((todoTask) => todoTask.id !== todoId);
    setTodoTasks(result);
    console.log("Resultado", result);
  }

  return (
    <div className="flex flex-col justify-between md:mx-[21rem] 2xl:mx-[40rem] max-h-[17rem] 2xl:max-h-[36rem] items-center md:mt-20 2xl:mt-32">
      <div className="flex justify-between items-center w-full">
        <div>
          <span className="text-blue">Tarefas criadas</span>{" "}
          <span className="bg-custom_gray-400 text-custom_gray-200 py-[1px] px-3 rounded-2xl">{todoTasks.length}</span>
        </div>
        <div>
          <span className="text-purple">Concluidas</span>{" "}
          <span className="bg-custom_gray-400 text-custom_gray-200 py-[1px] px-3 rounded-2xl">
            {completedTasksCount} de {todoTasks.length}
          </span>
        </div>
      </div>
      <div className="mt-5 w-full border-t-[1px] border-custom_gray-400 rounded-lg overflow-y-auto">
        {todoTasks.length === 0 ? (
          <div className="flex gap-2 justify-center items-center flex-col pt-14 text-custom_gray-300">
            <NotepadTextIcon size={90} className="text-custom_gray-400" />
            <span className="text-[16px] font-bold">Você ainda não tem tarefas cadastrads</span>
            <span className="text-[16px]">Crie tarefas e organize seus itens a fazer</span>
          </div>
        ) : (
          todoTasks.map((todoTask) => {
            return (
              <div className="my-2" key={todoTask.id}>
                <CardTask
                  taskContent={todoTask.todoContent}
                  taskId={todoTask.id}
                  taskCheckStatus={todoTask.checked}
                  handleCheckedCompletedTask={handleCheckedCompletedTask}
                  handleRemoveTask={handleRemoveTask}
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
