import './notfound.css';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const NotFound = () => {
    return (
        <div className="not-found-container">
            <a href="/"><img src='PageNotFound.gif' alt="Not Found" className="not-found-gif" /></a>
            <a href="/" className="home-link"><FontAwesomeIcon icon={faArrowLeft}/>VOLVER A LA PÁGINA PRINCIPAL</a>
        </div>
    );
};

export default NotFound;
