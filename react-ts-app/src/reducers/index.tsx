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

// const INCRMENT = 'INCRMENT';
// const ADD = 'ADD';

// type Actions = {
//     INCRMENT: {
//         type: typeof INCRMENT,
//     },
//     ADD: {
//         type: typeof ADD,
//         payload: number,
//     },
// };

// const actions = {
//     increment: (): Actions[typeof INCRMENT] => ({
//         type: INCRMENT,
//     }),
//     add: (amount: number): Actions[typeof ADD] => ({
//         type: ADD,
//         payload: amount
//     })
// }