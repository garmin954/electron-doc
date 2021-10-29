import React from "react";
import MdEditor from "react-markdown-editor-lite";
import MarkdownIt from "markdown-it";
import ModuleCss from "./Contents.module.scss";
// 导入编辑器的样式
import "react-markdown-editor-lite/lib/index.css";

export default function Contents() {
  // 初始化Markdown解析器
  const mdParser = new MarkdownIt(/* Markdown-it options */);

  // 完成！
  function handleEditorChange({ html, text }:any) {
    console.log("handleEditorChange", html, text);
  }

  const MKStyle = {
    height: "100%",
    borderRadius: "10px",
    overflow: "hidden",
  };
  return (
    <div className={ModuleCss.contents}>
      <MdEditor
        style={MKStyle}
        renderHTML={(text) => mdParser.render(text)}
        onChange={handleEditorChange}
      />
    </div>
  );
}
