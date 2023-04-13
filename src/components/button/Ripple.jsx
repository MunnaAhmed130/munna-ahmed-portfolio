import React, { useEffect, useState } from "react";

const Ripple = ({ children, onClick, className, type, disabled }) => {
  const value = 0;
  const [coords, setCoords] = useState({ x: value, y: value });
  const [isRippling, setIsRippling] = useState(false);
  // console.log(localCoords);

  // const handleMouseMove = (event) => {
  //     setLocalCoords({
  //         x: event.clientX - event.target.offsetLeft,
  //         y: event.clientY - event.target.offsetTop,
  //     });
  // };

  useEffect(() => {
    if (coords.x !== value && coords.y !== value) {
      setIsRippling(true);
      setTimeout(() => setIsRippling(false), 300);
    } else setIsRippling(false);
  }, [coords]);

  useEffect(() => {
    if (!isRippling) setCoords({ x: value, y: value });
  }, [isRippling]);

  return (
    <button
      // className="ripple-button"
      className={`overflow-hidden relative cursor-pointer transition-all duration-1000 ${className}`}
      type={type}
      onClick={(e) => {
        // e.preventDefault();
        const rect = e.target.getBoundingClientRect();
        setCoords({
          x: e.clientX - rect.left - 10,
          y: e.clientY - rect.top - 10,
        });
        // onClick;
        onClick && onClick(e);
      }}
      // onMouseMove={handleMouseMove}
      disabled={disabled}
    >
      {isRippling ? (
        <span
          className="w-5 h-5 bg-slate-400 absolute block rounded-full opacity-0 ripple"
          style={{
            left: coords.x,
            top: coords.y,
          }}
        />
      ) : (
        ""
      )}
      <span className="relative z-10 pointer-events-none">{children}</span>
    </button>
  );
};

export default Ripple;
