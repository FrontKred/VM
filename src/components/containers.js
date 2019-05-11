import { connect } from 'react-redux';
import ProductsList from "./ui/Products/Index";
import Main from "./ui/header/Main";
import {addAmount,removeAmount,chooseProduct,calcAmount} from "../store/actions";
import {filterByAmount} from "../lib/helpers";


export const Headers = connect(
    ({info}) =>
        ({
            title: info.title,
            amount:info.amount,
        }),
    dispatch =>
        ({
            addAmount(number) {
                dispatch(addAmount(number))
            },

            removeAmount() {
                dispatch(removeAmount())
            }
        })
)(Main);


export const Products = connect(
    ({products,info}) =>
        ({
            products: filterByAmount(products,info.amount),
            amount:info.amount
        }),
    dispatch =>
        ({
            chooseProduct(id) {
                dispatch(chooseProduct(id))
            },
            calcAmount(sum){
                dispatch(calcAmount(sum))
            },
        })
)(ProductsList);
