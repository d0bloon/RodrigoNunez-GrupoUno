import './NotFound.css';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const NotFound = () => {
    return (
        <div className="not-found-container">
            <img src='PageNotFound.gif' alt="Not Found" className="not-found-gif" />
            <a href="/" className="home-link"><FontAwesomeIcon icon={faArrowLeft}/>VOLVER A LA PÁGINA PRINCIPAL</a>
        </div>
    );
};

export default NotFound;
