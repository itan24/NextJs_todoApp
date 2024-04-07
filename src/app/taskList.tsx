"use client";

import React from "react";
import { Task } from "./page";
import { delTask } from "./action";
import Link from "next/link";
import DeleteIcon from "@mui/icons-material/Delete";

export const TaskList = ({ taskList }: { taskList: Task[] }) => {
  return (
    <div className="mt-8">
      {taskList &&
        taskList.map((task: Task) => {
          return (
            <div
              className="flex justify-center gap-40 items-center text-lg"
              key={task.id}
            >
              <p className="py-1">
                {task.id} - {task.content}
              </p>
              <button
                className="text-xs"
                onClick={() =>
                  delTask("http://127.0.0.1:8000/task", {
                    content: task.content,
                    id: task.id,
                  })
                }
              >
                <DeleteIcon className="text-red-600 size-8" />
                delete
              </button>
              <Link href={`/${task.id}`}>
                <button className="text-xs bg-blue-500 text-white px-3 py-1 rounded-xl">
                  edit
                </button>
              </Link>
            </div>
          );
        })}
    </div>
  );
};
