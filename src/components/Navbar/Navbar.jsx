import {Link} from "react-router-dom";
import { useState } from "react";
import Dropdown from "../Dropdown/Dropdown.jsx";
import { faTags, faFire } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className="navbar">
            <ul className={`nav-links ${isOpen && "open"}`}>
                <li className="nav-item">
                    <a href="/category/ofertas" className="nav-link, item-sale"> <FontAwesomeIcon icon={faTags}/> OFERTAS</a>
                </li>
                <li className="nav-item">
                    <a href="/category/sneakers" className="nav-link">SNEAKERS</a>
                    <Dropdown items={[
                        {title: 'MARCAS POPULARES', subItems: ['Nike', 'Air Jordan', 'New Balance', 'Adidas', 'ASICS', 'Converse', 'Yeezy']},
                        {title: 'MODELOS MÁS POPULARES', subItems: ['adidas Yeezy Slide', 'Air Jordan 4', 'Air Jordan 11', 'ASICS Gel-1130', 'New Balance 9060', 'Nike Dunk', 'Nike Air Max']},
                        {title: 'MÁS MARCAS', subItems: ['Reebok', 'Puma', 'Vans', 'Salomon', 'Under Armour', 'Kappa', 'Fila']},
                        {title: 'MARCAS DE LUJO', subItems: ['Balenciaga', 'Gucci', 'Louis Vuitton', 'Off-White', 'Common Projects', 'Alexander McQueen', 'Boos']}
                    ]}/>
                </li>
                <li className="nav-item">
                    <a href="/category/hombre" className="nav-link">HOMBRE</a>
                    <Dropdown items={[
                        {title: 'SNEAKERS', subItems: ['Nike', 'Air Jordan', 'New Balance', 'Adidas', 'ASICS', 'Converse', 'Yeezy']},
                        {title: 'CALZADO', subItems: ['Birkenstock', 'Crocs', 'Dr. Nartens', 'Gucci', 'Timberland', 'UGG']},
                        {title: 'ROPA', subItems: ['Anti Social Social Club', 'ARTIST MERCH', 'Bape', 'FOG Essentials', 'Nike', 'Sp5der', 'Supreme']},
                        {title: 'ACCESORIOS', subItems: ['Bape', 'Casio G-Shock', 'Gucci', 'Goyard', 'Louis Vuitton', 'Off-White', 'Supreme']},
                        {title: 'CATEGORIAS', subItems: ['Poleras', 'Cinturones', 'Pantalones', 'Chaquetas', 'Gafas de sol', 'Jockeys', 'Relojes']}
                    ]}/>
                </li>
                <li className="nav-item">
                    <a href="/category/mujer" className="nav-link">MUJER</a>
                    <Dropdown items={[
                        {title: 'SNEAKERS', subItems: ['Nike', 'Air Jordan', 'New Balance', 'Adidas', 'ASICS', 'Converse', 'Yeezy']},
                        {title: 'CALZADO', subItems: ['Chanel', 'Christian Louboutin', 'Gucci', 'Hermes', 'Prada', 'UGG']},
                        {title: 'ROPA', subItems: ['CDG Play', 'Jacquemus', 'Mugler', 'Off-White', 'Palm Angels', 'The North Face']},
                        {title: 'ACCESORIOS', subItems: ['Chanel', 'Dior', 'Gucci', 'Louis Vuitton', 'Marc Jacobs', 'Prada', 'Telfar']},
                        {title: 'CATEGORIAS', subItems: ['Vestidos', 'Bolsas', 'Chaquetas y abrigos', 'Joyas', 'Gafas de sol', 'Tops', 'Bolsos tote']}
                    ]}/>
                </li>
                <li className="nav-item">
                    <Link to='/niños' className="nav-link">NIÑOS</Link>
                    <Dropdown items={[
                        {title: 'ESCOLARES', subItems: ['Nike', 'Air Jordan', 'New Balance', 'Adidas', 'Puma', 'Converse', 'Yeezy']},
                        {title: 'PREESCOLARES', subItems: ['Nike', 'Air Jordan', 'Timberland', 'Adidas', 'UGG', 'Converse', 'Yeezy']},
                        {title: 'ROPA', subItems: ['adidas', 'FOG Essentials', 'Kith', 'Moncler', 'Nike', 'The North Face', 'Yeezy']},
                        {title: 'CATEGORIAS', subItems: ['Poleras', 'Jeans', 'Pantalones', 'Chaquetas', 'Jockeys', 'Bolsos', 'Polerones']}
                    ]}/>
                </li>
                <li className="nav-item">
                    <Link to='/ultimos_lanzamientos' className="nav-link, item-sale"><FontAwesomeIcon icon={faFire}/> ULTIMOS
                        LANZAMIENTOS</Link>
                </li>
            </ul>
            <div className={`nav_toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
};

export default Navbar;
