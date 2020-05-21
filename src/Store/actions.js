import { MERGE_TASKS, OMIT_TASKS } from './constants';

export const mergeTasks = payload => ({ type: MERGE_TASKS, payload })
export const omitTasks = payload => ({ type: OMIT_TASKS, payload })