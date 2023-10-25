import React from "react";
import * as Icons from "./Icons";
import { useState } from "react";
import EducationInput from "./Education/EducationInput";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useEffect } from "react";

function ItemCollapsed({ item, setError }) {
  const { portfolioState, portfolioDispatch } = useContext(AppContext);
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
    const complete = Object.values(editItem).every((item) => item);
    const modified = Object.values(editItem).some( (i, index) => i !== Object.values(item)[index] );

    if (!complete) {
      setError("You need to fill all the fields");
      return;
    }
    if(!modified) {
      setError('There is nothing to update');
      return
    }
    const uid = item.uid;
    portfolioDispatch({ type: "EDIT_EDUCATION", uid: uid, value: editItem });
    setError("Item updated");
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    console.log(editItem);
  }, [editItem]);

  const onRemoveCLickHandler = () => {
    const uid = item.uid;
    portfolioDispatch({ type: "REMOVE_EDUCATION", uid: uid });
    setError("Item removed");
  };

  return (
    <div className="item-collapsed">
      <div className="item-collapsed-title">
        <h2 className="justify-start items-center">
          <span className="flex-1">{editItem.school}</span>
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
          <EducationInput
            inputState={editItem}
            setInputState={setEditItem}
            inputHandler={editItemInputHandler}
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
            {/* <div
              className="hover:text-slate-500"
              style={{ paddingBottom: "1px" }}
            >
              
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default ItemCollapsed;
