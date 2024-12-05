// import { Link } from 'react-router-dom';
import MisImagenes from "../Imagenes/Imagenes.jsx";

export default function BrandsPage() {
    return (
        <>
            <div className="content-image">
                <MisImagenes link="/adidas" misrc="/img_adidas.svg" mialt="hola" texto="Adidas"/>
                <MisImagenes link="/asics" misrc="/img_asics.svg" mialt="hola" texto="Asics"/>
                <MisImagenes link="/converse" misrc="/img_converse.svg" mialt="hola" texto="Converse"/>
            </div>
            <div className="content-image">
                <MisImagenes link="/jordan" misrc="/img_jordan.svg" mialt="hola" texto="Jordan"/>
                <MisImagenes link="/new balance" misrc="/img_newbalance.svg" mialt="hola" texto="New Balance"/>
                <MisImagenes link="/vans" misrc="/img_vans.svg" mialt="hola" texto="Vans"/>
            </div>
        </>
    )
}
