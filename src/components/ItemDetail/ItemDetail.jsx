import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../data/asyncMock.jsx';
import Loading from '../Loading/Loading.jsx';
import useBag from "../../UseBag/UseBag.jsx"; // Importa tu tienda Zustand
import './itemdetail.css';

export default function ItemDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState({ product: 0, stock: 0 });
    const formatPrice = (price) => {
        return price.toLocaleString('es-CL');
    };

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProductById(productId).then((data) => {
            setProduct(data);
            setLoading(false);
        });
    }, [productId]);

    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState(product.sizes ? product.sizes[0] : null);

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const incrementQuantity = () => {
        if (quantity < product.stock) {
            setQuantity(quantity + 1);
        }
    };

    const addToCart = useBag(state => state.addToCart);

    if (loading) {
        return (
            <div className="container-items">
                <Loading />
            </div>
        );
    }

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="container-items">
            <div className="grid">
                <div className="img-container">
                    <img src={product.img} alt="Imagen del producto" className="product-img" />
                </div>
                <div className="details-container">
                    <h1 className="product-name">{product.name} / {product.colorway}</h1>
                    <div className="content-price">
                        <p className="price">${formatPrice(product.price)}</p>
                        <p className="stock">Stock: {product.stock}</p>
                    </div>
                    <div className="sizes-section">
                        <h3>Tallas disponibles:</h3>
                        <ul className="sizes-list">
                            {product.sizes.map((size, index) => (
                                <li key={index} className="size-item">
                                    <button
                                        className={`size-button ${selectedSize === size ? 'selected' : ''}`}
                                        onClick={() => setSelectedSize(size)}
                                    >
                                        {size}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="quantity-section">
                        <h3>Cantidad:</h3>
                        <div className="quantity-and-button">
                            <div className="quantity-controls-butt">
                                <button onClick={decrementQuantity} className="quantity-button-sub">-</button>
                                <p className="quantity-display">{quantity}</p>
                                <button onClick={incrementQuantity} className="quantity-button-add">+</button>
                            </div>
                            <button
                                className="bag-button"
                                onClick={() => addToCart({ ...product, quantity, selectedSize })}
                            >
                                Agregar a la bolsa
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
