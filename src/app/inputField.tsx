"use client";

import React, { useState, KeyboardEvent } from "react";
import { addTask, updateTask } from "./action";
import { Input } from "@/components/ui/input";

interface InputFieldProps {
  text: string;
  id?: number;
}

export const InputField: React.FC<InputFieldProps> = ({ text, id }) => {
  const [val, setVal] = useState<string>("");

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && val.trim() !== "") {
      if (text === "add") {
        addTask("http://127.0.0.1:8000/task", { content: val });
      } else if (text === "update" && id !== undefined) {
        updateTask("http://127.0.0.1:8000/task", { content: val, id });
      }
      setVal("");
    }
  };

  const handleClick = () => {
    if (val.trim() !== "") {
      if (text === "add") {
        addTask("http://127.0.0.1:8000/task", { content: val });
      } else if (text === "update" && id !== undefined) {
        updateTask("http://127.0.0.1:8000/task", { content: val, id });
      }
      setVal("");
    }
  };

  return (
    <div className="flex gap-4 p-6">
      <Input
        type="text"
        placeholder="type text here"
        value={val}
        required
        onChange={(e) => setVal(e.target.value)}
        onKeyDown={handleKeyPress}
        className="text-black bg-gray-200"
      />
      {val && <button onClick={handleClick}>{text}</button>}
    </div>
  );
};

export default InputField;
