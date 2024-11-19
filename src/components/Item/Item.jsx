import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import useBag from "../UseBag/UseBag.jsx";
import './item.css';
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Item({ id, brand, name, price, img }) {
    const formatPrice = (price) => {
        return price.toLocaleString('es-CL');
    };

    const addToCart = useBag(state => state.addToCart);

    const product = { id, brand, name, price, img, quantity: 1 };

    return (
        <div className="card">
            <Link to={`/products/${id}`} className="card-link">
                <img src={img} alt="Imagen Producto" className="card-img"/>
            </Link>
            <hr className="divider"/>
            <div className="card-info">
                <Link to={`/products/${id}`} className="card-title">
                    {name}
                </Link>
                <h3 className="card-brand">{brand}</h3>
                <h3 className="card-price">${formatPrice(price)}</h3>
                <button
                    className="card-button"
                    onClick={() => addToCart({...product})}
                >
                    Agregar <FontAwesomeIcon icon={faBagShopping}/>
                </button>
            </div>
        </div>
    );
}

Item.propTypes = {
    id: PropTypes.number.isRequired,
    brand: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
};
