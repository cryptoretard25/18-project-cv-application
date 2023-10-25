import React from "react";
import * as Icons from "../Icons";
import { useState } from "react";
import ExperienceInput from "./ExperienceInput";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

function ExperienceItemCollapsed({ item, setError }) {
  const { portfolioDispatch } = useContext(AppContext);
  const [editItem, setEditItem] = useState({ ...item });
  const [collapsed, setCollapsed] = useState(true);

  const onTitleClickHandler = () => {
    setEditItem({ ...item });
    setCollapsed(!collapsed);
  };

  const editItemInputHandler = (e) => {
    setEditItem({
      ...editItem,
      [e.target.id]: e.target.value,
    });
  };

  const onAcceptClickHandler = () => {
    const complete = Object.values(editItem).every((i) => i);
    const modified = Object.values(editItem).some( (i, index) => i !== Object.values(item)[index] );
    if (!complete) {
      setError("You need to fill all the fields");
      return;
    }
    if (!modified) {
      setError("There is nothing to update");
      return;
    }
    const uid = item.uid;
    portfolioDispatch({ type: "EDIT_EXPERIENCE", uid: uid, value: editItem });
    setError("Experience item updated");
    setCollapsed(!collapsed);
  };

  const onRemoveCLickHandler = () => {
    const uid = item.uid;
    portfolioDispatch({ type: "REMOVE_EXPERIENCE", uid: uid });
    setError("Experience item removed");
  };

  return (
    <div className="item-collapsed">
      <div className="item-collapsed-title">
        <h2 className="justify-start items-center">
          <span className="flex-1">{item.company}</span>
          <Icons.Remove
            size={"1x"}
            onClick={onRemoveCLickHandler}
            className={"hover:text-slate-600"}
          />
          {collapsed ? (
            <Icons.Edit
              size={"1x"}
              onClick={onTitleClickHandler}
              className={"hover:text-slate-600"}
            />
          ) : (
            <Icons.Close
              size={"xl"}
              onClick={onTitleClickHandler}
              className={"hover:text-slate-600"}
            />
          )}
        </h2>
      </div>
      {!collapsed && (
        <div className="education-input-wrapper">
          <ExperienceInput
            experience={editItem}
            setExperience={setEditItem}
            experienceInputHandler={editItemInputHandler}
          />
          <div
            className="interface"
            style={{ padding: "12px 8px 0 0", justifyContent: "end" }}
          >
            <div
              className="hover:text-slate-500"
              onClick={onAcceptClickHandler}
            >
              <Icons.Accept size={"2x"} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ExperienceItemCollapsed;
