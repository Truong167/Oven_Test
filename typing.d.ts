interface ITodo {
  id: string;
  name: string;
  isComplete: boolean;
}

type TodoActionType =
  | "ADD_TODO"
  | "TOGGLE_TODO"
  | "REMOVE_TODO"
  | "SEARCH_TODO";

interface TodoAction {
  type: TodoActionType;
  payload?: any;
}

interface StateType {
  todoList: Todo[];
  search: string;
  searchResult: Todo[];
}

type TodoContextType = {
  todoList: ITodo[];
  search: string;
  searchResult: ITodo[];
  addTask: (name: string) => void;
  deleteTask: (id: string) => void;
  toggleTask: (id: string) => void;
  searchTask: (term: string) => void;
};
