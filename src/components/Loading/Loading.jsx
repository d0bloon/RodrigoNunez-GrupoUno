import { PacmanLoader } from 'react-spinners';
import './loading.css';

export default function Loading(){
    return(
        <div className="loading-container">
            <PacmanLoader/>
        </div>
    )
}
