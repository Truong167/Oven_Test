"use client";
import { useTodoContext } from "@/context/todoContext";
import { Button, Col, Input, InputRef, Row } from "antd";
import React, { useRef, useState } from "react";

const CreateTask = () => {
  const { addTask } = useTodoContext();
  const [task, setTask] = useState<string>("");
  const [error, setError] = useState<string>("");
  const inputRef = useRef<InputRef>(null);

  const handleChangeTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (!task && inputRef.current) {
      setError("Please type your task");
      inputRef.current.focus();
      return;
    }
    addTask(task);
    setError("");
    setTask("");
  };
  return (
    <Row className="w-full" gutter={[16, 0]}>
      <Col span={18}>
        <Input
          ref={inputRef}
          className="w-full"
          placeholder="Type your task"
          status={`${error && "error"}`}
          value={task}
          onChange={(e) => handleChangeTask(e)}
        />
      </Col>
      <Col span={6}>
        <Button
          className="w-full bg-blue-600 text-white"
          type="primary"
          onClick={handleAddTask}
        >
          Add
        </Button>
      </Col>
      {error && (
        <Col span={24}>
          <p className="text-red-500">{error}</p>
        </Col>
      )}
    </Row>
  );
};

export default CreateTask;
