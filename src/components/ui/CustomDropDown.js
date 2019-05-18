import React, {Component} from 'react';
import PropTypes from "prop-types";
import Product from "./Products/Product";
import {FaClone} from 'react-icons/fa';

class CustomDropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    toggleOpen = () => this.setState({isOpen: !this.state.isOpen});

    render() {
        const {count, title, units, chooseUnit} = this.props;
        const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
        return (
            <div className="input-group">
                <div className="input-group-prepend">
                    <button style={{width: "5rem"}} className="btn btn-sm btn-warning dropdown-toggle"
                            type="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            onClick={this.toggleOpen}>
                        {(!title) ? <FaClone className="pb-1 text-secondary"/> :
                            <span>{title}</span>
                            }
                    </button>
                    <div className={menuClass}>
                        {(units && units.length === 0) ?
                            <div className="dropdown-item">Отсутствуют единицы измерения</div> :
                            units.map((el, key) => (
                                <div key={key} className="dropdown-item"
                                     onClick={(e) => {
                                         chooseUnit(e.target.textContent);
                                         this.toggleOpen();
                                     }}>
                                    {(el.style)?<span className={`dropdown-item__element ${el.style} text-danger pr-1`}></span> :""}
                                     {el.name}
                                </div>
                            ))
                        }

                    </div>
                </div>
                <input type="number" ref={count} className="form-control form-control-sm count"
                       placeholder="Сумма"/>
            </div>
        )
    }
};


Product.propTypes = {
    title: PropTypes.string,
    count: PropTypes.number,
    units: PropTypes.array,
    chooseUnit: PropTypes.func
};


export default CustomDropDown;