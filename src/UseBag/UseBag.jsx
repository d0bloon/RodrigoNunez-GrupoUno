import { create } from 'zustand';

const useBag = create((set) => ({
    cart: [],
    total: 0,
    addToCart: (item) => set((state) => {
        const existingItem = state.cart.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            return {
                cart: state.cart.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                ),
                total: state.total + item.price
            };
        } else {
            return {
                cart: [...state.cart, { ...item, quantity: 1 }],
                total: state.total + item.price
            };
        }
    }),
    removeFromCart: (item) => set((state) => {
        const existingItem = state.cart.find(cartItem => cartItem.id === item.id);
        if (existingItem.quantity > 1) {
            return {
                cart: state.cart.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity - 1 }
                        : cartItem
                ),
                total: state.total - item.price
            };
        } else {
            return {
                cart: state.cart.filter(cartItem => cartItem.id !== item.id),
                total: state.total - item.price
            };
        }
    }),
    clearCart: () => set(() => ({
        cart: [],
        total: 0
    }))
}));

export default useBag;
