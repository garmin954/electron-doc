import React from "react";
import { Avatar } from "@douyinfe/semi-ui";
import { IconSetting, IconMoon, IconContrast } from "@douyinfe/semi-icons";
import ModuleCss from "./LeftMenu.module.scss";

export default function LeftMenu() {
  return (
    <div className={ModuleCss.menu}>
      <div className={ModuleCss.header}>
        <Avatar size="default" style={{ margin: 4 }}>
          G
        </Avatar>
      </div>
      <div className={ModuleCss.container}>
        con
      </div>
      <div className={ModuleCss.footer}>
        <IconMoon className={ModuleCss.item} size="large" />
        <IconSetting className={ModuleCss.item} size="large" />
        <IconContrast style={{ display: "none" }} size="large" />
      </div>
    </div>
  );
}
