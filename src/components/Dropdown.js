import React from "react";
import * as Icons from "./Icons";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

function Dropdown({ children, name, icon }) {
  const [dropDownOpened, setDropDownOpened] = useState(false);
  const [animationEnded, setAnimationEnded] = useState(false);

  const dropDownClickHandler = () => {
    setDropDownOpened(!dropDownOpened);
  };

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
            initial={{ height: 0}}
            animate={{
              height: "auto",
              display: 'flex',
              transition: { duration: 0.5, delay: 0.2 },
            }}
            exit={{ height: 0 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Dropdown;
