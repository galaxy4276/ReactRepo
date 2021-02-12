import produce from 'immer';

export default (initialState, handlerMap) => (state = initialState, action) =>
  produce(state, draft => {
    const handler = handlerMap[action.type];
    if (handler)
      handler(draft, action);
  });
