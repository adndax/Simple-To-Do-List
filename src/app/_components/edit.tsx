"use client";
import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "src/components/ui/button";

interface EditProps {
  task: {
    id: string;
    task: string;
    isEditing: boolean;
  };
  editTodo: (task: string, id: string) => void;
}

function Edit({ editTodo, task }: EditProps) {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  };

  return (
    <div>
      <form className="mb-4 font-primary w-full" onSubmit={handleSubmit}>
        <input
          type="text"
          className="outline-none bg-transparent border border-gray-500 p-4 w-[300px] text-white mb-8 rounded placeholder:text-gray-300"
          placeholder="Update Task"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <Button variant="outline" size="icon">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
}

export default Edit;