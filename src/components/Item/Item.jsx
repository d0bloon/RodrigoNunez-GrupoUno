import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './item.css';
// import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Item({ id, brand, name, price, img }) {
    const formatPrice = (price) => {
        return price.toLocaleString('es-CL');
    };

    return (
        <div className="card">
            <Link to={`/products/${id}`} className="card-link">
                <img src={img} alt="Imagen Producto" className="card-img"/>
            </Link>
            <hr className="card-divider"/>
            <div className="card-info">
                <Link to={`/products/${id}`} className="card-title">
                    {name}
                </Link>
                <h3 className="card-brand">{brand}</h3>
                <h3 className="card-price">${formatPrice(price)}</h3>
                <Link to={`/products/${id}`} className="card-button">
                    Ver producto
                </Link>
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
