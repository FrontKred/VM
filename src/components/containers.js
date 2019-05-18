import { connect } from 'react-redux';
import ProductsList from "./ui/Products/Index";
import Main from "./ui/Header/Main";
import balancePanel from "./ui/Header/BalancePanel";
import {getUnitsForUrl,chooseUnit,addAmount,removeAmount,chooseProduct,calcAmount} from "../store/actions";
import {filterByAmount} from "../lib/helpers";


export const Headers = connect(
    ({info}) =>
        ({
            title: info.title,
        }),
        null
)(Main);

export const Panel = connect(
    ({info}) =>
        ({
            amount:info.amount,
            units:info.units,
            unit:info.unit,
            exchangeRates:info.exchangeRates
        }),
    dispatch =>
        ({
            addAmount(number) {
                dispatch(addAmount(number))
            },
            chooseUnit(unit){
                dispatch(chooseUnit(unit))
            },
            getUnitsForUrl(data,date){
              dispatch(getUnitsForUrl(data,date))
            },
            removeAmount() {
                dispatch(removeAmount())
            }
        })
)(balancePanel);



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
