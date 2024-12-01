export const products = [
    {
        id: 1,
        brand: 'ASICS',
        name: 'Asics GEL-Quantum™ Kinetic',
        colorway: 'Khaki Beige / Pure Silver',
        price: 332423,
        stock: 10,
        img: '/product_1.jpg',
        category: 'zapatillas',
        gender: 'hombre',
        sizes: ['US 9', 'US 9.5', 'US 10', 'US 10.5', 'US 11', 'US 11.5', 'US 12']
    },
    {
        id: 2,
        brand: 'ADIDAS',
        name: 'Bad Bunny x Adidas Gazelle (Benito)',
        colorway: ' Black / White',
        price: 129990,
        stock: 10,
        img: '/product_2.jpg',
        category: 'zapatillas',
        gender: 'hombre',
        sizes: ['US 9', 'US 9.5', 'US 10', 'US 10.5', 'US 11', 'US 11.5', 'US 12']
    },
    {
        id: 3,
        brand: 'NIKE',
        name: 'Nike SB Dunk Low "Paisley"',
        colorway: 'Brown',
        price: 199000,
        stock: 10,
        img: '/product_3.jpg',
        category: 'zapatillas',
        gender: 'hombre',
        sizes: ['US 9', 'US 9.5', 'US 10', 'US 10.5', 'US 11', 'US 11.5', 'US 12']
    },
    {
        id: 4,
        brand: 'NIKE X OFF-WHITE',
        name: 'Air Jordan 1 Retro High "Off-White - UNC',
        colorway: 'Blue',
        price: 2639990,
        stock: 10,
        img: '/product_4.jpg',
        category: 'zapatillas',
        gender: 'hombre',
        sizes: ['US 9', 'US 9.5', 'US 10', 'US 10.5', 'US 11', 'US 11.5', 'US 12']
    },
    {
        id: 5,
        brand: 'NIKE',
        name: 'Air Jordan 3 "White Cement Reimagined"',
        colorway: 'White / Gray',
        price: 304832,
        stock: 10,
        img: '/product_5.jpg',
        category: 'zapatillas',
        gender: 'mujer',
        sizes: ['US 9', 'US 9.5', 'US 10', 'US 10.5', 'US 11', 'US 11.5', 'US 12']
    },
    {
        id: 6,
        brand: 'NEW BALANCE',
        name: 'Bodega x New Balance 9060 "Age of Discovery"',
        colorway: 'Rosa/Gris/Blanco',
        price: 242709,
        stock: 10,
        img: '/product_6.jpg',
        category: 'zapatillas',
        gender: 'mujer',
        sizes: ['US 9', 'US 9.5', 'US 10', 'US 10.5', 'US 11', 'US 11.5', 'US 12']
    }
];

export const getProducts = () =>{
    return new Promise((res) =>{
        setTimeout(() =>{
            res(products)
        }, 3000);
    })
};

export const getProductById = (id) => {
    return new Promise((res) => {
        const productoFiltrado = products.find((product) => product.id === parseInt(id));
        setTimeout(() => {
            res(productoFiltrado);
        }, 2000);
    });
};
export const getProductByCategory = (gender) => {
    return new Promise((res) => {
        const productosFiltrados = products.filter((product) => product.gender === gender);
        setTimeout(() => {
            res(productosFiltrados);
        }, 2000);
    });
};
// asyncMock.jsx
export const getSizesByProductId = async (id) => {
    const productoFiltrado = products.find((product) => product.id === parseInt(id));
    return new Promise((res) => {
        setTimeout(() => {
            res(productoFiltrado ? productoFiltrado.sizes : []);
        }, 1000);
    });
};
