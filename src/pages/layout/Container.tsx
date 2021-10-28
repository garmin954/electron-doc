import React from "react";
import ModuleCss from "./Container.module.scss";
import Note from "../note/Index";

export default function Container() {
  return (
    <div className={ModuleCss.container}>
      <Note />
    </div>
  );
}
