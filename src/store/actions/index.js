import C from "../../constants";

export const addAmount = (amount) =>
    ({
        type:C.ADD_AMOUNT,
        amount
    });

export const removeAmount = () =>
    ({
        type:C.REMOVE_AMOUNT,
    });

export const calcAmount = (price) =>
    ({
        type:C.CALC_AMOUNT,
        price
    });

export const chooseProduct = (id) =>
    ({
        type:C.CHOOSE_PRODUCT,
        productId:id,
    });