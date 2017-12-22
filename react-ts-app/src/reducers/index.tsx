const actionTypes = {
    ADD: 'ADD'
};

interface ActionTypes {
    type: string;
}

const initState = 1;

export const todoApp = (state = initState, action: ActionTypes) => {
    switch (action.type) {
        case actionTypes.ADD:
            return state + 1;
        default:
            return state;
    }
};