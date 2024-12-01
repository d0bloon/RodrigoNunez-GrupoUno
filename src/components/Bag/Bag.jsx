import { useEffect, useState } from 'react';
import './bag.css';
import useBag from "../../UseBag/UseBag.jsx";
import { getSizesByProductId } from '../../data/asyncMock.jsx'; // Importa tu método para obtener las tallas

const BagPage = () => {
    const cart = useBag(state => state.cart);
    const total = useBag(state => state.total);
    const incrementQuantity = useBag(state => state.incrementQuantity);
    const decrementQuantity = useBag(state => state.decrementQuantity);
    const removeFromCart = useBag(state => state.removeFromCart);
    const updateSize = useBag(state => state.updateSize);
    const clearCart = useBag(state => state.clearCart);

    const [availableSizes, setAvailableSizes] = useState({});

    useEffect(() => {
        const fetchSizes = async () => {
            const sizesData = await Promise.all(
                cart.map(item => getSizesByProductId(item.id))
            );
            const sizesMap = {};
            cart.forEach((item, index) => {
                sizesMap[item.id] = sizesData[index];
            });
            setAvailableSizes(sizesMap);
        };

        fetchSizes();
    }, [cart]);

    return (
        <div className="bag">
            <h1>Tu Carrito de Compras</h1>
            <div className="cart-container">
                {cart.length === 0 ? (
                    <p>Tu carrito está vacío</p>
                ) : (
                    <table className="cart-table">
                        <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Talla</th>
                            <th>Total</th>
                            <th>Acciones</th>
                        </tr>
                        </thead>
                        <tbody>
                        {cart.map(item => (
                            <tr key={`${item.id}-${item.selectedSize}`} className="cart-item">
                                <td className="cart-item-details">
                                    <img src={item.img} alt={item.name} className="cart-item-img" />
                                    <div className="cart-item-info">
                                        <h3>{item.name}</h3>
                                    </div>
                                </td>
                                <td>${item.price.toLocaleString('es-CL')}</td>
                                <td>
                                    <div className="quantity-controls">
                                        <button onClick={() => decrementQuantity(item)}>-</button>
                                        {item.quantity}
                                        <button onClick={() => incrementQuantity(item)}>+</button>
                                    </div>
                                </td>
                                <td>
                                    <select
                                        value={item.selectedSize}
                                        onChange={(e) => updateSize(item, e.target.value)}
                                        className="size-dropdown"
                                    >
                                        {(availableSizes[item.id] || []).map(size => (
                                            <option key={size} value={size}>{size}</option>
                                        ))}
                                    </select>
                                </td>
                                <td>${(item.price * item.quantity).toLocaleString('es-CL')}</td>
                                <td>
                                    <button className="remove-button" onClick={() => removeFromCart(item)}>Quitar</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}
                {cart.length > 0 && (
                    <div className="cart-summary">
                        <h3>Resumen del Carrito</h3>
                        <p>Subtotal: ${total.toLocaleString('es-CL')}</p>
                        <button className="clear-button" onClick={clearCart}>Vaciar Carrito</button>
                        <button className="checkout-button">Ir a Pagar</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default BagPage;
