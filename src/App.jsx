import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import Banner from "./components/Banner/Banner.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import ProductsPage from './components/Products/Products.jsx';
import OffertsPage from "./components/Offerts/Offerts.jsx";
import SneakersPage from "./components/Sneakers/Sneakers.jsx";
import ManPage from "./components/Man/Man.jsx";
import WomanPage from "./components/Woman/Woman.jsx";
import UserPage from "./components/User/User.jsx";
import BagPage from "./components/Bag/Bag.jsx";
import KidsPage from "./components/Kids/Kids.jsx";
import ReleasesPage from "./components/Releases/Releases.jsx";
import ItemDetail from "./components/ItemDetail/ItemDetail.jsx";
import ProductsCategory from "./components/Category/Category.jsx";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";
import NotFound from './components/NotFound/NotFound';
import useBag from "./UseBag/UseBag";
import { getCartFromSessionStorage } from './utils/SessionStorage';

function App() {
    const setCart = useBag(state => state.setCart);

    useEffect(() => {
        const cart = getCartFromSessionStorage();
        setCart(cart);
    }, [setCart]);

    return (
        <>
            <BrowserRouter>
                <ScrollToTop />
                <Banner/>
                <Header/>
                <Navbar/>
                <div className="main-container h3">
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/ofertas' element={<OffertsPage/>}/>
                        <Route path='/sneakers' element={<SneakersPage/>}/>
                        <Route path='/products' element={<ProductsPage/>}/>
                        <Route path='/hombre' element={<ManPage/>}/>
                        <Route path='/mujer' element={<WomanPage/>}/>
                        <Route path='/user' element={<UserPage/>}/>
                        <Route path='/bag' element={<BagPage/>}/>
                        <Route path='/niños' element={<KidsPage/>}/>
                        <Route path='/category/:categoryId' element={<ProductsCategory />} />
                        <Route path='/products/:productId' element={<ItemDetail/>} />
                        <Route path='/ultimos_lanzamientos' element={<ReleasesPage/>}/>
                        <Route path='/not-found' element={<NotFound />} />
                        <Route path='*' element={<NotFound/>}/>
                    </Routes>
                </div>
                <Footer/>
            </BrowserRouter>
        </>
    )
}

export default App;
