export const mergeAction = data => {
    return {
      type: 'MERGE_TASKS',
      payload: {
        ...data,
      },
    };
  }

export const omitAction = data => {
    return {
        type: 'OMIT_TASKS',
        payload: data,
    };
}