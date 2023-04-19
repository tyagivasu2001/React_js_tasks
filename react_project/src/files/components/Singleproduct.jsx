import React from 'react'
import Navbar from './Navbar'
import { useParams,useLocation } from 'react-router-dom'

function Singleproduct() {
    const parms = useParams();
    const loc = useLocation();
    const arr =loc.state.dummy;
    return (
    <div>
        
       { arr.map((i)=>{
              if(i.id==parms.id)
              {
                 return( <div>
                 <Navbar name={i.name}/> 
                 <h1>{i.name}</h1>
                 <img id="img" src={i.src} alt={i.alt} />
                 <p>{i.disc}</p>
                 <button >Buy</button>
                </div>)
              }

             })
        }
        
        
    </div>
  )
}

export default Singleproduct;