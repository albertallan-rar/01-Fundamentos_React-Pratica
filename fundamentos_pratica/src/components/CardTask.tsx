import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon, Trash2Icon } from "lucide-react";

type CardTaskProps = {
  taskContent: string;
  taskId: string;
  taskCheckStatus: boolean;
  handleCheckedCompletedTask: (todoId: string) => void;
  handleRemoveTask: (todoId: string) => void;
};
export const CardTask = ({
  taskContent,
  taskId,
  taskCheckStatus,
  handleCheckedCompletedTask,
  handleRemoveTask,
}: CardTaskProps) => {
  return (
    <div className="flex justify-between items-center text-custom_gray-100 p-4 bg-custom_gray-500 rounded-xl">
      <span className="text-blue">
        <Checkbox.Root
          className={`shadow-blackA4 hover:bg-blue/40 flex h-[25px] p-1 w-[25px] appearance-none items-center justify-center rounded-full border-[1px] border-blue ${
            taskCheckStatus ? "bg-purple_dark hover:bg-purple" : "bg-transparent "
          }`}
          onClick={() => handleCheckedCompletedTask(taskId)}
          id="c1"
        >
          <Checkbox.Indicator className="text-custom_gray-100 ">
            <CheckIcon size={18} />
          </Checkbox.Indicator>
        </Checkbox.Root>
      </span>
      <span
        className={`text-lg ${taskCheckStatus ? "line-through text-custom_gray-300 font-semibold" : "no-underline"}`}
      >
        {taskContent}
      </span>
      <button onClick={() => handleRemoveTask(taskId)} className="">
        <Trash2Icon size={20} className="text-custom_gray-300 hover:text-danger" />
      </button>
    </div>
  );
};
