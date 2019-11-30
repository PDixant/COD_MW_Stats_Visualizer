const actionTypes = {
    FETCH_MW_API_DATA: "FETCH_MW_API_DATA"
}

// actions
export const actions = {
    fetchMWApiData: (id) => ({
        type: actionTypes.FETCH_MW_API_DATA,
        payload: id,
    }),
}

// initial state
const initialState= {
    myData: {},
}


//reducers
export function reducer(state=initialState, action){
    switch(action.type){
        case actionTypes.FETCH_MW_API_DATA : {
            const { payload } = action;
            return {
                ...state,
                myData: payload,
            }
        }
    }
}

// epics
export const epics = {
    
}