import React, {Component} from 'react';
import PropTypes from 'prop-types'
import Product from "./Product";
import {FaCubes, FaDollarSign, FaArchive, FaPencilAlt} from 'react-icons/fa';
import Swal from 'sweetalert2';

class ProductsList extends Component {
    constructor(props) {
        super(props);
        this.chooseProduct = this.props.chooseProduct;
        this.calcAmount=this.props.calcAmount;
        this.amount = this.props.amount;
    }
    shouldComponentUpdate(nextProps) {
        this.amount = nextProps.amount;
        return true
    }
    choose(product) {
        if (this.amount >= product.price) {
            Swal.fire({
                title: 'Выбрать данный товар?',
                text: `Цена ${product.price}$`,
                imageUrl: product.src,
                imageWidth: 200,
                imageHeight: 200,
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Да',
                cancelButtonText: 'Отмена!',
                reverseButtons: true
            }).then((result) => {
                if (result.value) {
                    this.calcAmount(product.price);
                    this.chooseProduct(product.id);
                    Swal.fire({
                        title: 'Примите товар',
                        width: 600,
                        imageUrl: product.src,
                        imageWidth: 200,
                        imageHeight: 200,
                        padding: '3em',
                        background: 'rgb(165, 186, 216) url(/images/trees.png)',
                        backdrop: `
                                rgb(54, 70, 92)
                                url("https://i.gifer.com/6os.gif")
                                center left
                                no-repeat
                              `
                    })

                }
            })
        } else {
            Swal.fire({
                title: 'Пополните баланс!',
                type: 'error'
            })
        }
    }
    render() {
        const {products} = this.props;
        return (
            <div className="list-products m-2 bg-white">
                {(products.length === 0) ?
                    <h4>Товары отсутствуют</h4> :
                    <table className="table table-bordered table-hover">
                        <thead>
                        <tr>
                            <th>
                                <div className="text-muted">#</div>
                            </th>
                            <th>
                                <div><FaCubes className="text-warning"/> <span className="text-muted"> Товар</span>
                                </div>
                            </th>
                            <th>
                                <div><FaPencilAlt className="text-warning"/> <span
                                    className="text-muted"> Название</span></div>
                            </th>
                            <th>
                                <div><FaDollarSign className="text-warning"/> <span className="text-muted"> Цена</span>
                                </div>
                            </th>
                            <th>
                                <div><FaArchive className="text-warning"/> <span
                                    className="text-muted"> Количество</span></div>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {products.map((product, key) =>
                            <Product
                                chooseProduct={() => this.choose(product)}
                                key={key}
                                {...product}
                                row={++key}
                            />
                        )}
                        </tbody>
                    </table>
                }
            </div>
        )
    }
}

ProductsList.propTypes = {
    products: PropTypes.array.isRequired,
    calcAmount: PropTypes.func,
    chooseProduct:PropTypes.func
};
export default ProductsList;