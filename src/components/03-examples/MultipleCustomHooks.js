import React from "react";
import { useFetch } from "../../hooks/useFetch";
// import { useState } from "../03-examples/MultipleCustomHooks";
import { useCounter } from "../../hooks/useCounter";
import "../02-useEffect/effects.css";


export const MultipleCustomHooks = () => {
  
  const { counter, increment } = useCounter(1);
  const { loading, data } = useFetch(`https://officeapi.akashrajpurohit.com/quote/${ counter }`);
  
  
  const { character, quote }= !!data && data[0];


  return (
    <div>
      <h1>The Office Quotes</h1>
      <hr />
      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-right">
          <p className="mb-0"> {quote} </p>
          <footer className="blockquote-footer"> { character } </footer>
        </blockquote>
      )}
      <button 
      className="btn btn-primary"
      onClick={ increment }
      >
        Siguiente quote
      </button>
    </div>
  );
};
export const RealExampleRef = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>RealExampleRef!</h1>
      <hr />

      {show && <MultipleCustomHooks />}
      <button
        className="btn btn-primary mt-5"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide
      </button>
    </div>
  );
};
