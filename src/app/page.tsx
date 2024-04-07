import { getTask } from "./action";
import { InputField } from "./inputField";
import { TaskList } from "./taskList";
// import "../styles/globals.css";

export interface Task {
  id: number;
  content: string;
}

export default async function Home() {
  const taskList: Task[] = await getTask("http://127.0.0.1:8000/task");

  return (
    <main className="min-h-screen">
      <div className="flex flex-col items-center px-20 py-8 border-2 border-black border-opacity-40 rounded-2xl bg-black bg-opacity-10 hover:bg-black hover:bg-opacity-15 ">
        <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight">
          Task List
        </h1>
        <InputField text={"add"} />
        <TaskList taskList={taskList} />
      </div>
    </main>
  );
}
