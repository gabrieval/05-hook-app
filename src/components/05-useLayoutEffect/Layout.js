import React, { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { MultipleCustomHooks } from "../03-examples/MultipleCustomHooks";
import { useCounter } from "../../hooks/useCounter";
import "../02-useEffect/effects.css";

export const Layout = () => {
  const { counter, increment } = useCounter(1);
  const { data } = useFetch(
    `https://officeapi.akashrajpurohit.com/quote/${counter}`
  );

  const { character, quote } = !!data && data;

  return (
    <div>
      <h1>LayoutEffect</h1>
      <hr />

      <blockquote className="blockquote text-right">
        <p className="mb-0"> {quote} </p>
        <footer className="blockquote-footer mt-1"> {character} </footer>
      </blockquote>

      <button className="btn btn-primary" onClick={increment}>
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
