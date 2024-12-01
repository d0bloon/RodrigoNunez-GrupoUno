import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBagShopping, faUser, } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
import './header.css';


const Header = () => {
    return(
        <div>
            <header className="header">
                <div className="search-bar">
                        <FontAwesomeIcon  className="search-icon" icon={faMagnifyingGlass}/>
                        <input type="text" placeholder="Buscar..."/>
                </div>
                <div className="header-container">
                    <div className="header-content">
                        <a href="/">
                            <img className="logo" src="/logozapstore.png" alt="logo"/>
                        </a>
                    </div>
                </div>
                <div className="icon">
                    <Link to='/user'><FontAwesomeIcon className="icon-user" icon={faUser}/></Link>
                    <Link to='/bag'><FontAwesomeIcon className="icon-bag" icon={faBagShopping}/></Link>
                </div>
            </header>
        </div>
    )
}

export default Header