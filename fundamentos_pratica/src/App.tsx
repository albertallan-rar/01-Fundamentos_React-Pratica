import { useState } from "react";
import ContentHeader from "./components/ContentHeader";
import Header from "./components/Header";

export interface TodoTasksType {
  id: string;
  todoContent: string;
  checked: boolean;
}

function App() {
  const [todoTasks, setTodoTasks] = useState<TodoTasksType[]>([]);

  return (
    <div className="">
      <Header setTodoTasks={setTodoTasks} />
      <ContentHeader todoTasks={todoTasks} setTodoTasks={setTodoTasks} />
    </div>
  );
}

export default App;
