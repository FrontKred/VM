import C from '../../constants'

export const info = (state = [], action = {type: null}) => {
    switch (action.type) {
        case C.ADD_AMOUNT:
            return {
                ...state,
                amount: state.amount + action.amount
            };
        case C.CALC_AMOUNT:
            return {
                ...state,
                amount: state.amount - action.price
            };
        case C.CHOOSE_UNIT:
            return {
                ...state,
                unit: action.unit
            };
        case C.GET_UNITS_FOR_URL:
            return {
                ...state,
                exchangeRates:action.units
            };
        case C.REMOVE_AMOUNT:
            return {
                ...state,
                amount: 0
            };
        default:
            return state
    }
};


/*Вспомогательный редьюсер для products*/
export const product = (state = {}, action = {type: null}) => {
    switch (action.type) {
        case C.CHOOSE_PRODUCT:
            return (state.id !== action.productId) ? state :
                {
                    ...state,
                    count: state.count - 1,
                }
        default:
            return state;
    }
};
export const products = (state = [], action = {type: null}) => {
    switch (action.type) {
        case C.CHOOSE_PRODUCT:
            return state.map(item => product(item, action));
        default:
            return state;
    }
};