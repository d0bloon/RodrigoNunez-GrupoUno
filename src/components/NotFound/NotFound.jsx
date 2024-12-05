import './notfound.css';

const NotFound = () => {
    return (
        <div className="not-found-container">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>Lo sentimos, la página que estás buscando no existe.</p>
            <a href="/" className="home-link">Volver a la página principal</a>
        </div>
    );
};

export default NotFound;
