"use client";
import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "src/components/ui/button";

interface CardProps {
  createTodo: (todo: string) => void;
}

function Card({ createTodo }: CardProps) {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createTodo(value);
    setValue("");
  };

  return (
    <div>
      <form className="mb-4 font-primary w-full" onSubmit={handleSubmit}>
        <input
          type="text"
          className="outline-none bg-transparent border border-gray-500 p-4 w-[300px] text-white mb-8 rounded placeholder:text-gray-300"
          placeholder="Add Task"
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

export default Card;
