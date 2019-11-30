import React from 'react';
import { identifier } from '@babel/types';

const actionTypes = {
    FETCH_MW_API_DATA: "FETCH_MW_API_DATA"
}

export const actions = {
    fetchMWApiData: (id) => ({
        type: actionTypes.FETCH_MW_API_DATA,
        payload: identifier,
    }),
}

const initialState= {
    myData: {},
}

export function reducer(state=initialState, action){
    switch(action.type){
        case actionTypes.FETCH_MW_API_DATA : {
            const { payload } = action;
            return {
                ...state,
                myData : payload,
            }
        }
    }
}