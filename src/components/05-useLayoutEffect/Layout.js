import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hook/useCounter';

import '../02-useEffect/effects.css';


export const Layout = () => {
  const [show, setShow ] = useState (false);  

  return (
    <div>
      <h1>RealExampleRef!</h1>
      <hr />

      {show && <MultipleCustomHooks   />}
      <button
      className="btn btn-primary mt-5"
      onClick={()=>{
        setShow( !show );
      }}
      >
    Show/Hide


      </button>
    </div> 
  )
}
