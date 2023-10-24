import React from "react";
import * as Icons from "./Icons";
import { useState } from "react";
import EducationInput from "./EducationInput";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function ItemCollapsed({ item }) {
  const { portfolioState, portfolioDispatch } = useContext(AppContext);
  const [editItem, setEditItem] = useState({ ...item });
  const [collapsed, setCollapsed] = useState(true);

  const onTitleClickHandler = (e) => {
    setEditItem({ ...item });
    setCollapsed(!collapsed);
  };

  // const onCancelClickHandler = ()=>{
  //   setEditItem({...item})
  //   setCollapsed(!collapsed)
  // }

  const editItemInputHandler = (e) => {
    setEditItem({
      ...editItem,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="item-collapsed">
      <div className="item-collapsed-title">
        <h2
          className="justify-start hover:text-slate-600"
          onClick={onTitleClickHandler}
        >
          <span className="flex-1">{editItem.school}</span>
          {collapsed ? <Icons.Plus size={"lg"} /> : <Icons.Close size={"xl"} />}
        </h2>
      </div>
      {!collapsed && (
        <div className="education-input-wrapper">
          <EducationInput
            inputState={editItem}
            setInputState={setEditItem}
            inputHandler={editItemInputHandler}
          />
          <div className="interface" style={{ padding: "6px 0 0 0", justifyContent: "end" }} >
            <div className="hover:text-slate-500">
              <Icons.Accept size={"2x"} />
            </div>
            {/* <div className="hover:text-slate-500" onClick={onCancelClickHandler}>
              <Icons.Close size={"2x"} />
            </div> */}
            <div className="hover:text-slate-500" style={{paddingBottom: '1px'}}>
              <Icons.Remove size={"xl"} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ItemCollapsed;
