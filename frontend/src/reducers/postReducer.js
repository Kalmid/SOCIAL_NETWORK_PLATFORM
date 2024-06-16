const initialState = [];

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;
    case 'NEW_POST':
      return [action.payload, ...state];
    default:
      return state;
  }
};

export default postReducer;
