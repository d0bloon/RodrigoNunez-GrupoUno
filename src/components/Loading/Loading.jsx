import { SyncLoader } from 'react-spinners';
import './loading.css';

export default function Loading(){
    return(
        <div className="loading-container">
            <SyncLoader color='#D03F30'/>
        </div>
    )
}
