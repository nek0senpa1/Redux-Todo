import { ADD_TODO, TOGGLE_TODO } from "../Actions/actions";



const initialState = {
  
  todos: [
      { todo: "Star Wars Marathon", done: false }
    ]
};

function rootOfAllReduxEvil(state = initialState, action) {
  switch (action.type) {
    
    case ADD_TODO:
      const newTodoey = {
        todo: action.payload,
        done: false
      };
      return {
        ...state,
        todos: [...state.todos, newTodoey]
      };

    // case TOGGLE_TODO:
    //   return {
    //     ...state,
    //     friends: state.friends.map((friend, index) =>
    //       action.payload === index
    //         ? { ...friend, besties: !friend.besties }
    //         : friend
    //     )
    //   };
    default:
      return state;
  }
}



export default rootOfAllReduxEvil;