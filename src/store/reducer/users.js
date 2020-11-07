export default function todosReducer(state = {}, action) {
    switch (action.type) {
      case 'user/updateUserList': {
        // Can return just the new todos array - no extra object around it
        return [
          ...state,
          ...action.userList
        ]
      }
    //   case 'todos/todoToggled': {
    //     return state.map(todo => {
    //       if (todo.id !== action.payload) {
    //         return todo
    //       }
  
    //       return {
    //         ...todo,
    //         completed: !todo.completed
    //       }
    //     })
    //   }
      default:
        return state
    }
  }