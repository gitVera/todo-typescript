import { omit } from 'lodash';
import { MERGE_TASKS, OMIT_TASKS } from './constants';

export const initialState = {
    tasks: {
        "1" : {
          id: '1',
          text: "Такая заметка"
        },
        "2" : {
          id: '2',
          text: "Важная заметка"
        },
        "3" : {
          id: '3',
          text: "Еще одна заметка"
        },
    }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case MERGE_TASKS:
      return {
        ...state, tasks: { ...state.tasks, ...action.payload }
      }
    case OMIT_TASKS:
      return {
        ...state, tasks: omit(state.tasks, action.payload) 
      }
    default:
      return state
  }
}

