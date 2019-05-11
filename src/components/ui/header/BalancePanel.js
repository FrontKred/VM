import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {FaDollarSign, FaShoppingCart, FaTrashAlt, FaPlusCircle} from 'react-icons/fa';

class BalancePanel extends Component {
    constructor(props) {
        super(props);
        this.addAmount = this.props.addAmount;
        this.removeAmount = this.props.removeAmount;
        this.amount = this.props.amount;
    }
    shouldComponentUpdate(nextProps) {
        /*
         * Т.к amount должен участвовать и в методе
         * render и в методе removeCount
         * Было решено сделать так,
         * +++ нету дублирования кода
         * --- чуть больше кода
         */
        if (nextProps.amount !== this.amount) {
            this.amount = nextProps.amount;
            return true
        }
        return false;
    }

    addCount() {
        const {_count} = this.refs;
        if (_count.value && _count.value > 0) {
            this.addAmount(Number(_count.value));
            _count.value = "";
        }
    }

    removeCount() {
        if (this.amount) this.removeAmount();
    }

    render() {
        return (
            <div className="col-lg-6 d-flex justify-content-end align-items-center">
                <div>
                <span className="d-flex align-items-center btn btn-secondary">
                  <FaShoppingCart className="mr-1"/>
                    {(this.amount) ? <span>{this.amount.toLocaleString()} $</span> : ""}
                </span>
                </div>
                <div className="col-lg-9 input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><FaDollarSign/></span>
                    </div>
                    <input
                        type="number"
                        ref="_count"
                        className="form-control"
                        placeholder="Сумма"
                        required/>
                    <div className="input-group-append">
                        <button className="btn btn-success btn-sm align-middle"
                                onClick={() => this.addCount()}
                                type="button"><FaPlusCircle/> Добавить
                        </button>
                        <button className="btn btn-danger btn-sm align-middle"
                                onClick={() => this.removeCount()}
                                type="button"><FaTrashAlt/> Сбросить
                        </button>
                    </div>
                </div>
            </div>
        )
    }
};

BalancePanel.propTypes = {
    amount: PropTypes.number,
    addAmount: PropTypes.func,
    removeAmount: PropTypes.func
};

export default BalancePanel;