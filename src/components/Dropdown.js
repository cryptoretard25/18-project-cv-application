import React from "react";
import * as Icons from "./Icons";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

function Dropdown({ children, name, icon }) {
  const [dropDownOpened, setDropDownOpened] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [error, setError] = useState('')

  const dropDownClickHandler = () => {
    setDropDownOpened(!dropDownOpened);
  };

  useEffect(()=>{
    const timeoutId = setTimeout(()=>{
      setError('')
    }, 1500)

    return ()=> clearTimeout(timeoutId)
  }, [error])

  return (
    <div className="input-wrapper">
      <h1 onClick={dropDownClickHandler} style={{ cursor: "pointer" }}>
        {icon}
        <span>{name}</span>
        {dropDownOpened ? <Icons.ArrowUp /> : <Icons.ArrowDown />}
      </h1>
      <AnimatePresence>
        {dropDownOpened && (
          <motion.div
            className="input-wrapper-details"
            initial={{ height: 0 }}
            animate={{
              height: "auto",
              display: "flex",
              transition: { duration: 0.6, delay: 0.1 },
            }}
            exit={{ height: 0 }}
          >
            {error && <h3>{error}</h3>}
            {React.Children.map(children, (child) =>
              React.cloneElement(child, { showInput, setShowInput, setError })
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Dropdown;
