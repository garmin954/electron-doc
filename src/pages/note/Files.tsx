import React, { RefObject, useRef } from "react";
import {
  Input, Tree, ButtonGroup, Button, Toast,
} from "@douyinfe/semi-ui";
import { IconSearch, IconPlus } from "@douyinfe/semi-icons";
import ModuleCss from "./Files.module.scss";
import RightClickContextMenu from "../../components/modal/RightClickContextMenu";

export default function Files() {
  const opts = {
    content: "Hi, Bytedance dance dance",
    duration: 3,
  };

  // eslint-disable-next-line no-unused-vars
  const button = (
    <ButtonGroup
      size="small"
      theme="borderless"
    >
      <Button
        onClick={(e) => {
          Toast.info(opts);
          e.stopPropagation();
        }}
      >
        提示
      </Button>
      <Button>点击</Button>
    </ButtonGroup>
  );

  const style = {
    // display: "flex",
    // justifyContent: "space-between",
    // alignItems: "center",
    color: "#ffffff",
  };

  // @ts-ignore
  const treeDataWithNode = [
    {
      label: (
        <div style={style}>
          <span>亚洲</span>
          {button}
        </div>
      ),
      value: "yazhou",
      key: "yazhou",
      children: [
        {
          label: (
            <div style={style}>
              <span>中国</span>
              {/* {button} */}
            </div>
          ),
          value: "zhongguo",
          key: "zhongguo",
          children: [
            {
              label: (
                <div style={style}>
                  <span>湖南</span>
                  {/* {button} */}
                </div>
              ),
              value: "hunan",
              key: "hunan",
              children: [
                {
                  label: (
                    <div style={style}>
                      <span>长沙</span>
                      {/* {button} */}
                    </div>
                  ),
                  value: "cs",
                  key: "cs",
                },
              ],
            }],
        },
      ],
    },
  ];
  const treeStyle = {
    width: 190,
    border: "1px solid var(--semi-color-border)",
    color: "#ffffff",
  };
  const els:any = useRef<RefObject<HTMLDivElement>>(null);

  return (
    <div ref={els} className={ModuleCss.files}>
      <RightClickContextMenu el={els} />

      <div className={ModuleCss.searchbox}>
        <Input className={ModuleCss.search} suffix={<IconSearch />} showClear />
        <div className={`${ModuleCss.create} d-table`}>
          <IconPlus className="t-midden" />
        </div>
      </div>
      <Tree
        treeData={treeDataWithNode}
        style={treeStyle}
      />
    </div>
  );
}
