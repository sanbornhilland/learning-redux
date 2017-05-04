import { VisibilityFilters, SET_VISIBILITY_FILTER, ADD_TODO, TOGGLE_TODO } from './actions.js'
import { combineReducers } from 'redux'

const SHOW_ALL = VisibilityFilters.SHOW_ALL

function visibilityFilter (state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function todos (state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
     return state.map((todo, index) => {
      if (index === action.index) {
        return Object.assign({}, todo, {
          completed: !todo.completed
        })
      }

      return todo
    })
    default:
      return state
  }
}

function todoApp (state = {}, action) {
  console.debug('Incoming state -> ', state)
  console.debug('Incoming action -> ', action)
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
  }
}

// This is equivalent to the above ^^
// const todoApp = combineReducers({
//   visibilityFilter,
//   todos
// })

export default todoApp
