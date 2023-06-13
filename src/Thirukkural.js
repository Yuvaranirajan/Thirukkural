import { Link } from 'react-router-dom';
import './HomeStyle.css';
export default function Thirukkural(){
    return(
        <div>
            <div className='kural01'>
                
                <h1>Thirukkural</h1>
                 <p>The book is divided into three parts on a high level, each describing a theme</p>
                 <ul>
                    <li>  <span>Aṟam (அறத்துப்பால்): </span> Book of Virtue<br/>
                          Deals with moral values of an individual<br/>
                          Chapters 1 - 38
                    </li>
                    <li>
                    <span>Poruḷ (பொருட்பால்): </span> Book of Polity<br/>
                          Deals with wealth and socio-economic values<br/>
                          Chapters 39 - 108
                    </li>
                    <li>
                    <span>Kamam (காமத்துப்பால்): </span> Book of Love<br/>
                        Deals with love and psychological values<br/>
                        Chapters 109 - 133
                    </li>
                 </ul>
                 <Link to="/kural"><button>Thirukkural</button></Link>
            
        </div>
        </div>
    );
}