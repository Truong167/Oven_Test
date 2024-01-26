import { useTodoContext } from "@/context/todoContext";
import { Checkbox, CheckboxProps, Row } from "antd";
import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const TodoItem: React.FC<ITodo> = ({ name, isComplete, id }) => {
  const { deleteTask, toggleTask } = useTodoContext();

  const onChange: CheckboxProps["onChange"] = (e) => {
    toggleTask(id);
  };

  const handleDeleteTask = () => {
    deleteTask(id);
  };

  return (
    <Row className="grid grid-cols-custom-2 items-center justify-between gap-x-4 w-full p-2 h-12 hover:bg-slate-100 rounded-md">
      <Checkbox
        className={`text-xl lg:text-lg ${
          isComplete && "line-through"
        } whitespace-nowrap overflow-hidden text-ellipsis`}
        checked={isComplete}
        onChange={onChange}
      >
        {name}
      </Checkbox>
      <FaTrashAlt
        className="cursor-pointer text-xl lg:text-lg"
        onClick={handleDeleteTask}
      />
    </Row>
  );
};

export default TodoItem;
