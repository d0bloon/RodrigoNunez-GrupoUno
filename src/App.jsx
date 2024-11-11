import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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

function App() {
    return (
        <>
            <BrowserRouter>
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
                    </Routes>
                </div>
                <Footer/>
            </BrowserRouter>
        </>
    )
}

export default App