import React from 'react';
import PropTypes from 'prop-types'
import BalancePanel from "./BalancePanel";
import {FaWeightHanging} from 'react-icons/fa';

const Main = ({title = "", amount = 0, addAmount = f => f, removeAmount = f => f}) => (
    <header className="d-flex justify-content-between border-bottom align-items-center p-2">
        <div className="col-lg-6">
            <h2 className="text-white d-flex align-items-center">
                <FaWeightHanging className="mr-1"/>
                {title}
            </h2>
        </div>
        <BalancePanel amount={amount}
                      addAmount={(count) => addAmount(count)}
                      removeAmount={()=>removeAmount()}
        />
    </header>
);
Main.propTypes = {
    title: PropTypes.string,
    amount: PropTypes.number,
    addAmount: PropTypes.func,
    removeAmount: PropTypes.func
};
export default Main;