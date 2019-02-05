export const ADD_TODO = "ADD_TODO";

export const TOGGLE_TODO = "TOGGLE_TODO";

export function addTodo(newTodo) {
  console.log(newTodo);
  return {
    type: ADD_TODO,
    payload: newTodo
  };
}



export function toggleTodo(index) {
  console.log("action", index);
  return {
    type: TOGGLE_TODO,
    payload: index
  };
}
