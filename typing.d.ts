interface ITodo {
    id: string;
    name: string;
    isComplete: boolean;
  }
  
  type TodoActionType = "ADD_TODO" | "TOGGLE_TODO" | "REMOVE_TODO" | "SEARCH_TODO";
  
  interface TodoAction {
    type: TodoActionType;
    payload?: any;
  }
  
  interface StateType {
    todoList: Todo[];
    search: string;
    searchResult: Todo[]
  }