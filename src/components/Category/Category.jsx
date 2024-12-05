import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './category.css';
import { getProductByCategory } from "../../data/asyncMock";
import ItemList from "../ItemList/ItemList";
import Loading from "../Loading/Loading";
import NotFound from '../NotFound/NotFound'; // Asegúrate de tener este componente

export default function ProductsCategory(){
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const {categoryId} = useParams();
    const navigate = useNavigate();

    useEffect (() => {
        setLoading(true);
        getProductByCategory(categoryId)
            .then((data) => {
                if (data && data.length > 0) {
                    setProducts(data);
                } else {
                    navigate('/not-found'); // Redirigir a la página "Not Found" si no hay productos
                }
            })
            .catch((err) => {
                console.log(err);
                navigate('/not-found'); // Redirigir a la página "Not Found" en caso de error
            })
            .finally(() => setLoading(false));
    }, [categoryId, navigate]);

    if (loading) {
        return (
            <div className="container-category">
                <Loading />
            </div>
        );
    }

    if (products.length === 0) {
        return <NotFound />;
    }

    return(
        <div className="container-category">
            <ItemList products={products}/>
        </div>
    );
};
