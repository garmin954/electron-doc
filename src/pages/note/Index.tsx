import React from "react";
import Files from "./Files";
import Contents from "./Contents";
import ModuleCss from "./Index.module.scss";

export default function Index() {
  return (
    <div className={ModuleCss.node}>
      <Files />
      <Contents />
    </div>
  );
}
