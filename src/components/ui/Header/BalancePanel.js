import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {FaShoppingCart, FaTrashAlt, FaPlusCircle} from 'react-icons/fa';
import CustomDropDown from "../CustomDropDown";
import Swal from "sweetalert2";
import {fetchThenResponse, currencyTransfer} from "../../../lib/helpers";


const balancePanel = ComponentItem => {
    return class extends Component {
        constructor(props) {
            super(props);
            this._count = React.createRef();
            this.addAmount = this.props.addAmount;
            this.removeAmount = this.props.removeAmount;
            this.chooseUnit = this.props.chooseUnit;
            this.amount = this.props.amount;
            this.unit = this.props.unit;
            this.getUnitsForUrl = this.props.getUnitsForUrl;
        }

        componentDidMount() {
            fetchThenResponse('https://www.cbr-xml-daily.ru/daily_json.js', 'GET')
                .then(data => {
                    this.getUnitsForUrl(data);
                })
        }

        shouldComponentUpdate(nextProps) {
            if (nextProps.amount !== this.amount) {
                this.amount = nextProps.amount;
                return true;
            } else if (nextProps.unit !== this.unit) {
                this.unit = nextProps.unit;
                return true;
            }
            return false;
        }

        addCount() {
            let unit = this.unit;
            let currentUnit;
            if (!unit) {
                return Swal.fire({
                    title: 'Выберите валюту!',
                    type: 'error'
                })
            }
            if (unit !== 'RUB') currentUnit = currencyTransfer(this.props.exchangeRates, unit);

            if (this._count.current.value && this._count.current.value > 0) {
                let count = Math.floor(((currentUnit) ?
                    Number(currentUnit) * Number(this._count.current.value) :
                    Number(this._count.current.value)));
                this.addAmount(count);
                this._count.current.value = "";
            }
        }

        removeCount() {
            if (this.amount) this.removeAmount();
        }


        render() {
            return (
                <div className="d-flex justify-content-end align-items-center">
                    <div className="d-flex align-items-center btn btn-sm btn-secondary">
                        <FaShoppingCart className="mr-1"/>
                        {(this.amount)
                            ? <span>{this.amount}</span>
                            : 0}
                    </div>
                    <div className="pl-1 col-lg-5">
                        <ComponentItem
                            chooseUnit={this.chooseUnit}
                            units={this.props.units}
                            count={this._count}
                            title={this.unit}/>
                    </div>
                    <div className="d-flex">
                        <button className="btn btn-success btn-sm align-middle"
                                onClick={() => this.addCount()}
                                type="button"><FaPlusCircle/> Добавить
                        </button>
                        <button className="btn btn-danger btn-sm align-middle ml-1"
                                onClick={() => this.removeCount()}
                                type="button"><FaTrashAlt/> Сбросить
                        </button>
                    </div>
                </div>
            )
        }
    }
};


balancePanel.propTypes = {
    units: PropTypes.object,
    unit: PropTypes.string,
    exchangeRates: PropTypes.object,
    amount: PropTypes.number,
    addAmount: PropTypes.func,
    removeAmount: PropTypes.func,
    chooseUnit: PropTypes.func,
    getUnitsForUrl: PropTypes.func
};


export default balancePanel(CustomDropDown);