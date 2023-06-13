import './HomeStyle.css';
import Thirukkural from './Thirukkural';
export default function Home(){
    return(
        <div className="home">
            <div className="home-title">
                 <h1>Thirukkural (திருக்குறள்)</h1>
                    <h3>-Thiruvalluvar (திருவள்ளுவர்)</h3>
            </div>
            <div className='home-content'>
                <img src='https://wallpapercave.com/wp/wp5489522.png'/>
                <div className='home-thiru'>
                <p><span>Thiruvalluvar (திருவள்ளுவர்),</span> commonly known as Valluvar, was a celebrated Tamil poet and philosopher. He is best known as the author of the <span>Tirukkuṟaḷ,</span> a collection of couplets on 
                    ethics, political and economical matters, and love.</p>
                 <p>As with most other details about Valluvar, the exact place of his birth remains uncertain. Valluvar is believed to have lived in Madurai and later in the town of Mayilapuram or
                     Thirumayilai (present-day Mylapore in Chennai). There are also accounts that say he was born in Mayilapuram and later moved to Madurai in order to publish his work at the royal court.
                </p>
                     <p>The Tirukkuṟaḷ text has been translated into several Indian and <span>international languages.</span>It was translated into Latin by Constanzo Beschi in 1730, which helped make the work known to European intellectuals.
                         Tirukkuṟaḷ is one of the most revered works in the Tamil language.</p>   
               </div>
    
             </div>
             <Thirukkural/>
        </div>
    );
}