import { createStore } from 'redux'
import { addTodo } from './actions.js'
import todoApp from './reducer.js'

const store = createStore(todoApp)

console.debug('Initial State -> ', store.getState())

let unsubscribe = store.subscribe(() => {
  console.debug('State change ->', store.getState())
})

store.dispatch(addTodo('Learn about actions'))
