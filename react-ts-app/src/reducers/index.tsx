const actionTypes = {
    ADD: 'ADD'
};

interface ActionTypes {
    type: string;
}

const initState = 1;

import { RootState, RootAction } from '@types/redux';
export const todoApp = (state = initState, action: ActionTypes) => {
    switch (action.type) {
        case actionTypes.ADD:
            return state + 1;
        default:
            return state;
    }
};

export const INCRMENT = 'INCRMENT';
export const ADD = 'ADD';

export type Actions = {
    INCRMENT: {
        type: typeof INCRMENT,
    },
    ADD: {
        type: typeof ADD,
        payload: number,
    },
};

export const actions = {
    increment: (): Actions[typeof INCRMENT] => ({
        type: INCRMENT,
    }),
    add: (amount: number): Actions[typeof ADD] => ({
        type: ADD,
        payload: amount
    })
}