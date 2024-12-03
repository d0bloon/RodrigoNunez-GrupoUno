export const saveCartToSessionStorage = (cart) => {
    sessionStorage.setItem('cart', JSON.stringify(cart));
};

export const getCartFromSessionStorage = () => {
    const cart = sessionStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
};
