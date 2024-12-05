import Carousel from "../Carousel/Carousel.jsx";
import BrandsPage from "../Brands/Brands.jsx";
import ProductsPage from "../Products/Products.jsx";

const Home = () => {
    return (
        <div>
            <Carousel/>
            <h3>MARCAS DESTACADAS</h3>
            <BrandsPage/>
            <h3>RECOMENDADAS PARA TI</h3>
            <ProductsPage/>
        </div>
    )
}
export default Home;