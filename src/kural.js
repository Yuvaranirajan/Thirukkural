import { Link } from 'react-router-dom';
import './kuralStyle.css';
import { useEffect,useState} from 'react';
export default function Kural(){
    const change=()=>{
        setCount(count+1);
         }
         const changepre=()=>{
          setCount(count-1);
           }
        const[apidata, setApiData]=useState([]);
        const[count, setCount]=useState(1);
        const apiCall =()=>{
         fetch(`https://api-thirukkural.vercel.app/api?num=${count}`)
         .then(response =>{
            return response.json()
          })
          .then((data)=>{
           setApiData(data);
          })
          
        }
        useEffect(()=>{
          apiCall();
        },[count]);
        
    return(
      <div className='new'>
        <div className="kural">
             {console.log(apidata)}
             <div className='container'>
                  <div className="container1">
                  <p><h3>Section : </h3>{apidata.sect_eng}</p>
                      <p><h3>Chapter Group : </h3> {apidata.chapgrp_eng}</p>
                      <p><h3>Chapter : </h3>{apidata.chap_eng}</p>
                   </div>
                 <div className="container2">
                  <p><h3>பால் : </h3>{apidata.sect_tam}</p>
                   <p><h3>அதிகாரம் தொகுப்பு : </h3>{apidata.chapgrp_tam}</p>
                   <p><h3>அதிகாரம் : </h3>{apidata.chap_tam}</p>
                 </div>
            </div>
            <div className='container3'>
              <div className='container4'>
              <h2>குறள்: {apidata.number}</h2>
              <p>{apidata.line1}</p>
              <p>{apidata.line2}</p>
              <h2>விளக்கம்</h2>
              <p>{apidata.tam_exp}</p>
              </div>
              <div className='container5'>
              <h2>Number : {apidata.number}</h2>
              <p>{apidata.eng}</p>
              <h2>Explanation : </h2>
              <p>{apidata.eng_exp}</p>
              
              </div>
            </div>
            
            
         {/* {apidata.map((item,index)=>{
             return <p key={index}>{apidata.number}</p>
        })}  */}
        </div>
        <div className='btn'>
        
              <button onClick={changepre} className='prev'>Previous</button>
              <button onClick={change} className='next'>Next</button>
              <Link to='/'><button>Bact to Home</button></Link>
        </div>
        </div>
    );
}