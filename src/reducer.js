export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // REMOVE after finished developing... >>> token: null,
    token: 'BQCXNgtUM86ifVUwxLP95MHS0HG7ML-ilOaNNlPjcDaVzWnfOUK5Bx6WkLarLO1UJXqYzXKCCM87gyZDURZN5-3BfxW7bfSn-YdFwsqODjKgUkodjxXxcWfd4pKglPGHEwgInAoAByHSk1pCQiGedJPZZ7rrLuma_OUqRaZ0cka4EWeE_rvmiXwrLasxC3sAhA',
};


const reducer = (state, action) => {
    console.log(action);

    // Action -> type, [oayload]

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };
        default:
            return state;
    }
}

export default reducer;