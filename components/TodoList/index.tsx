import React from "react";
import TodoItem from "../TodoItem";
import { Empty } from "antd";

interface Todo {
  id: string;
  name: string;
  isComplete: boolean;
}

const TodoList = ({ todoList }: { todoList: Todo[] }) => {
  return (
    <div className="w-full h-[200px] overflow-y-auto">
      {todoList.length > 0 ? (
        todoList.map((item) => (
          <TodoItem
            key={item.id}
            name={item.name}
            isComplete={item.isComplete}
            id={item.id}
          />
        ))
      ) : (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      )}
    </div>
  );
};

export default TodoList;
