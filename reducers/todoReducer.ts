import { v4 as uuidv4 } from "uuid";

export const todoReducer = (state: StateType, action: TodoAction) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todoList: [
          {
            id: uuidv4(),
            name: action.payload,
            isComplete: false,
          },
          ...state.todoList,
        ],
      };
    case "REMOVE_TODO":
      return {
        ...state,
        todoList: state.todoList.filter((item) => item.id !== action.payload),
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todoList: state.todoList.map((item) =>
          item.id === action.payload
            ? { ...item, isComplete: !item.isComplete }
            : item
        ),
      };
    case "SEARCH_TODO":
      const todo = state.todoList.filter((item) =>
        item.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        search: action.payload,
        searchResult: todo,
      };
    default:
      return state;
  }
};
