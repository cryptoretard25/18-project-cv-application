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
    setCollapsed(!collapsed);
  };

  return (
    <div className="item-collapsed">
      <div className="item-collapsed-title">
        <h2
          className="justify-start hover:text-slate-600"
          onClick={onTitleClickHandler}
        >
          <span className="flex-1">{editItem.school}</span>
          {collapsed ? <Icons.Plus size={"lg"} /> : <Icons.Minus size={"lg"} />}
        </h2>
      </div>
      {!collapsed && (
        <div className="education-input-wrapper">
          <EducationInput education={editItem} />
          {/* <div className="interface" style={{ padding: "6px 6px 0 6px" }}>
            <button className="text-base text-white bg-red-500 hover:bg-red-400">
              <Icons.Thrash size={"1x"} />
              Delete
            </button>
            <button
              className="text-base bg-cyan-600 text-white hover:bg-cyan-500 "
            >
              <Icons.Save size={"lg"} />
              Save
            </button>
          </div> */}
          <div
            className="interface"
            style={{ padding: "6px 12px 0 12px", justifyContent: "end" }}
          >
            <div className="hover:text-slate-500">
              <Icons.Accept size={"2x"} />
            </div>
            <div className="hover:text-slate-500">
              <Icons.Decline size={"xl"} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ItemCollapsed;
