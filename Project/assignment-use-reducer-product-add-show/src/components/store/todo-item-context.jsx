import { createContext } from "react";
import { useReducer } from "react";
export const TodoItemsContext = createContext({
  tableItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const todoItemReducer = (currentTodoItems, action) => {
  let newTotoItems = currentTodoItems;
  if (action.type === "NEW_ITEM") {
    let newItems = { name: action.playload.name, date: action.playload.date };
    newTotoItems = [...currentTodoItems, newItems];
  } else if (action.type === "DELETE_ITEM") {
    newTotoItems = currentTodoItems.filter(
      (item) => item.name !== action.playload.dataName
    );
  }
  return newTotoItems;
};

const TodoItemContextProvider = ({ children }) => {
  const [tableItems, dispatcherTableItems] = useReducer(todoItemReducer, []);

  let addNewItem = (name, date) => {
    let newItemAction = {
      type: "NEW_ITEM",
      playload: {
        name,
        date,
      },
    };
    dispatcherTableItems(newItemAction);
  };

  let deleteItem = (dataName) => {
    let deleteItemAction = {
      type: "DELETE_ITEM",
      playload: {
        dataName,
      },
    };
    dispatcherTableItems(deleteItemAction);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        tableItems,
        addNewItem,
        deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemContextProvider;
