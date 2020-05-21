import { omit } from 'lodash';
import { MERGE_TASKS, OMIT_TASKS } from '../constants';

type IReduxState = {
  tasks: ITAsk
  // ???????
}

type ITAsk = {
  [id:string]: {
    id: string
    text: string
    createdAt: string
  }
}

export const initialState: IReduxState = {
  tasks: {}
}

export default (state = initialState, action: any):IReduxState  => {
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
