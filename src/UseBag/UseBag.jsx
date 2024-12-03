import { create } from 'zustand';
import { saveCartToSessionStorage, getCartFromSessionStorage } from '../utils/sessionStorage';

const useBag = create((set) => ({
    cart: getCartFromSessionStorage(), // Recuperar el carrito desde sessionStorage al inicio
    total: 0,
    addToCart: (item) => set((state) => {
        const existingItem = state.cart.find(cartItem => cartItem.id === item.id && cartItem.selectedSize === item.selectedSize);
        let newCart;
        if (existingItem) {
            newCart = state.cart.map(cartItem =>
                cartItem.id === item.id && cartItem.selectedSize === item.selectedSize
                    ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
                    : cartItem
            );
        } else {
            newCart = [...state.cart, { ...item }];
        }
        const newTotal = newCart.reduce((acc, cartItem) => acc + (cartItem.price * cartItem.quantity), 0);
        saveCartToSessionStorage(newCart); // Guardar el carrito actualizado en sessionStorage
        return {
            cart: newCart,
            total: newTotal
        };
    }),
    removeFromCart: (item) => set((state) => {
        const existingItem = state.cart.find(cartItem => cartItem.id === item.id && cartItem.selectedSize === item.selectedSize);
        let newCart;
        if (existingItem.quantity > 1) {
            newCart = state.cart.map(cartItem =>
                cartItem.id === item.id && cartItem.selectedSize === item.selectedSize
                    ? { ...cartItem, quantity: cartItem.quantity - 1 }
                    : cartItem
            );
        } else {
            newCart = state.cart.filter(cartItem => cartItem.id !== item.id || cartItem.selectedSize !== item.selectedSize);
        }
        const newTotal = newCart.reduce((acc, cartItem) => acc + (cartItem.price * cartItem.quantity), 0);
        saveCartToSessionStorage(newCart); // Guardar el carrito actualizado en sessionStorage
        return {
            cart: newCart,
            total: newTotal
        };
    }),
    incrementQuantity: (item) => set((state) => {
        const newCart = state.cart.map(cartItem =>
            cartItem.id === item.id && cartItem.selectedSize === item.selectedSize
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
        const newTotal = newCart.reduce((acc, cartItem) => acc + (cartItem.price * cartItem.quantity), 0);
        saveCartToSessionStorage(newCart); // Guardar el carrito actualizado en sessionStorage
        return {
            cart: newCart,
            total: newTotal
        };
    }),
    decrementQuantity: (item) => set((state) => {
        const newCart = state.cart.map(cartItem =>
            cartItem.id === item.id && cartItem.selectedSize === item.selectedSize && cartItem.quantity > 1
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
        ).filter(cartItem => cartItem.quantity > 0);
        const newTotal = newCart.reduce((acc, cartItem) => acc + (cartItem.price * cartItem.quantity), 0);
        saveCartToSessionStorage(newCart); // Guardar el carrito actualizado en sessionStorage
        return {
            cart: newCart,
            total: newTotal
        };
    }),
    updateSize: (item, newSize) => set((state) => {
        const newCart = state.cart.map(cartItem =>
            cartItem.id === item.id && cartItem.selectedSize === item.selectedSize
                ? { ...cartItem, selectedSize: newSize }
                : cartItem
        );
        saveCartToSessionStorage(newCart); // Guardar el carrito actualizado en sessionStorage
        return { cart: newCart };
    }),
    clearCart: () => set(() => {
        saveCartToSessionStorage([]); // Limpiar el carrito en sessionStorage
        return {
            cart: [],
            total: 0
        };
    }),
    setCart: (cart) => set(() => {
        saveCartToSessionStorage(cart); // Guardar el carrito en sessionStorage
        return { cart, total: cart.reduce((acc, item) => acc + (item.price * item.quantity), 0) };
    })
}));

export default useBag;
