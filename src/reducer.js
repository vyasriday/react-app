const initialState = {
  messageVisibility: false,
};

// you can not do an unnamed default export on arrow functions

export default function (state = initialState, action) {
  const { type } = action;
  switch (type) {
    case 'TOGGLE_MESSAGE':
      return {
        ...state,
        messageVisibility: !state.messageVisibility,
      };
    default:
      return state;
  }
}
