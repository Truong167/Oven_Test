'use client'
import CreateTask from "@/components/CreateTask";
import SearchTodo from "@/components/Search";
import TodoList from "@/components/TodoList";
import { useTodoContext } from "@/context/todoContext";
import { Divider, Typography } from "antd";

const { Title } = Typography;

export default function Home() {
  const { todoList, search, searchResult } = useTodoContext();
  return (
    <main className="flex min-h-screen  items-center justify-center">
      <div className="flex flex-col justify-between items-center bg-black-50 w-full p-4 m-4 lg:w-[500px] md:w-[500px] bg-white rounded-lg">
        <Title>Oven Test</Title>
        <SearchTodo/>
        <Divider/>
        <TodoList todoList={search ? searchResult : todoList}/>
        <Divider/>
        <CreateTask/>
      </div>
    </main>
  );
}
