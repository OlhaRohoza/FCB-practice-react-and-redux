

const state = [];

const ADD = 'ADD';
export const actionAddMessage = (message) => {
    return {
        type: ADD,
        message: message
    }
}

export const messageReducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
            return [...state, action.message];
        default:
            return state;
    }
}
