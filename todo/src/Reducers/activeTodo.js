export function activey (stateProp = null, action) => {
    console.log('TODOing stuff');
    switch (action.type) {
      case 'TODO_SELECTED':
        return action.payload;
      default:
        return stateProp;
    }
  };