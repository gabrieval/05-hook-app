import React, { useLayoutEffect, useRef, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { MultipleCustomHooks } from "../03-examples/MultipleCustomHooks";
import { useCounter } from "../../hooks/useCounter";
import "./layout.css";

export const Layout = () => {
  const { counter, increment } = useCounter(2);
  const { data } = useFetch(
    `https://officeapi.akashrajpurohit.com/quote/${counter}`
  );

  const { quote } = !!data && data;
  const pTag = useRef();
  const [boxSize, setBoxSize] = useState({});

  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div>
      <h1>LayoutEffect</h1>
      <hr />

      <blockquote className="blockquote text-right">
        <p className="mb-0" ref={pTag}>
          {quote}
        </p>
      </blockquote>
      <pre>
        {JSON.stringify( boxSize, null, 3)}
        </pre>

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
