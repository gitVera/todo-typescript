import { createStore } from 'redux'
import reducer from './reducers/tasks'

export default createStore(reducer)