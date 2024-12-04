export const saveCartToSessionStorage = (cart) => {
    sessionStorage.setItem('cart', JSON.stringify(cart));
};
//Esto es de prueba
export const getCartFromSessionStorage = () => {
    const cart = sessionStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
};
