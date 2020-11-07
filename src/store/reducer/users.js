export default function todosReducer(state = [{name:"sebin",email:'sebin@123'}], action) {
    switch (action.type) {
      case 'user/addUserList': {
        
        return [
          ...state,
          ...action.userList
        ]
      }
      case 'user/updateUserList': {
        
        return [
          ...action.userList
        ]
      }
    
      default:
        return state
    }
  }