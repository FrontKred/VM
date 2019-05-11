import React from 'react';
import PropTypes from 'prop-types'


const Product= ({row, title, price, src, count, isNew,chooseProduct=f=>f})=>(
            <tr className="text-center" onClick={chooseProduct}>
                <td>{row}</td>
                <td>
                    <div>
                        <img
                            className="border"
                            width={50}
                            alt={title}
                            src={src}
                        />
                    </div>
                </td>
                <td>
                    <div>
                         <span className="font-weight-bold">{title}
                             {(isNew) ?
                                 <sup><span className="badge badge-info"> New</span></sup>
                                 : ""
                             }
                         </span>
                    </div>
                </td>
                <td>{price}</td>
                <td>{count}</td>
            </tr>
);
Product.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number,
    count: PropTypes.number,
    src: PropTypes.string,
    row:PropTypes.number,
    chooseProduct: PropTypes.func
};
export default Product;