import { useTodoContext } from "@/context/todoContext";
import Search from "antd/es/input/Search";
import React from "react";

const SearchTodo = () => {
  const { searchTask } = useTodoContext();
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    searchTask(e.target.value);
  };
  return <Search placeholder="Search" onChange={(e) => handleSearch(e)} />;
};

export default SearchTodo;
