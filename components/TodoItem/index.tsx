import { useTodoContext } from "@/context/todoContext";
import { Checkbox, CheckboxProps, Row } from "antd";
import React from "react";
import { FaTrashAlt } from "react-icons/fa";


const TodoItem: React.FC<ITodo> = ({ name, isComplete, id }) => {
  // const [checked, setChecked]
  const { deleteTask, toggleTask } = useTodoContext()

  const onChange: CheckboxProps['onChange'] = (e) => {
    console.log(`checked = ${e.target.checked}`);
    toggleTask(id)
  };

  const handleDeleteTask = () => {
    deleteTask(id)
  }

  return (
    <Row className="flex items-center justify-between w-full p-2 h-12">
      <Checkbox className={`text-xl lg:text-lg ${isComplete && "line-through"} whitespace-nowrap overflow-hidden text-ellipsis w-[300px]`} checked={isComplete} onChange={onChange}>
        {name}
      </Checkbox>
      <FaTrashAlt className="cursor-pointer text-xl lg:text-lg" onClick={handleDeleteTask}/>
    </Row>
  );
};

export default TodoItem;
