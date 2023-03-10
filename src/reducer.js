export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // REMOVE after finished developing... >>> token: null,
  // token: 'BQCXNgtUM86ifVUwxLP95MHS0HG7ML-ilOaNNlPjcDaVzWnfOUK5Bx6WkLarLO1UJXqYzXKCCM87gyZDURZN5-3BfxW7bfSn-YdFwsqODjKgUkodjxXxcWfd4pKglPGHEwgInAoAByHSk1pCQiGedJPZZ7rrLuma_OUqRaZ0cka4EWeE_rvmiXwrLasxC3sAhA',
};

const reducer = (state, action) => {
  console.log(action);

  // Action -> type, [payload]

  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };

    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };

    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      };

    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
