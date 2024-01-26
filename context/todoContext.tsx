"use client";

import { todoReducer } from "@/reducers/todoReducer";
import { createContext, useContext, useReducer } from "react";


const initialState = {
  search: "",
  todoList: [] as ITodo[],
  searchResult: [] as ITodo[],
};

export type TodoContextType = {
  todoList: ITodo[];
  search: string;
  searchResult: ITodo[]
  addTask: (name: string) => void;
  deleteTask: (id: string) => void;
  toggleTask: (id: string) => void
  searchTask: (term: string) => void
};

const TodoContext = createContext<TodoContextType | undefined>(undefined);

const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todo, dispatch] = useReducer(todoReducer, initialState);

  const addTask = (name: string) => {
    dispatch({
      type: "ADD_TODO",
      payload: name,
    });
  };

  const deleteTask = (id: string) => {
    dispatch({
      type: "REMOVE_TODO",
      payload: id,
    });
  };

  const toggleTask = (id: string) => {
    dispatch({
      type: 'TOGGLE_TODO',
      payload: id
    })
  }

  const searchTask = (term: string) => {
    dispatch({
      type: "SEARCH_TODO",
      payload: term,
    });
  };

  const todoContextData = {
    ...todo,
    addTask,
    deleteTask,
    toggleTask,
    searchTask
  };

  return (
    <TodoContext.Provider value={todoContextData}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;

export const useTodoContext = () => {
  return useContext(TodoContext) as TodoContextType;
};
