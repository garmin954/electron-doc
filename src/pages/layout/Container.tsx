import React from "react";
import ModuleCss from "./Container.module.scss";
import Note from "../note/Index";
import RightClickContextMenu from "../../components/modal/RightClickContextMenu";

export default function Container() {
  return (
    <div className={ModuleCss.container}>
      <RightClickContextMenu />

      <Note />
    </div>
  );
}
