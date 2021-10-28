import React, { useEffect, useRef, useState } from "react";
import ModuleCss from "./RightClickContextMenu.module.scss";

export default function RightClickContextMenu() {
  const [visible, setVisible] = useState(false);
  const menuRef:any = useRef();
  setTimeout(() => {
    console.log(menuRef);
  }, 1000);
  // @ts-ignore
  const handleContextMenu = (event) => {
    event.preventDefault();
    setVisible(true);

    const clickX = event.clientX;
    const clickY = event.clientY;
    const screenW = window.innerWidth;
    const screenH = window.innerHeight;
    const rootW = menuRef.current.offsetWidth;
    const rootH = menuRef.current.offsetHeight;

    // right为true，说明鼠标点击的位置到浏览器的右边界的宽度可以放contextmenu。
    // 否则，菜单放到左边。
    // top和bottom，同理。
    const right = (screenW - clickX) > rootW;
    const left = !right;
    const top = (screenH - clickY) > rootH;
    const bottom = !top;

    if (right) {
      menuRef.current.style.left = `${clickX + 5}px`;
    }

    if (left) {
      menuRef.current.style.left = `${clickX - rootW - 5}px`;
    }

    if (top) {
      menuRef.current.style.top = `${clickY + 5}px`;
    }

    if (bottom) {
      menuRef.current.style.top = `${clickY - rootH - 5}px`;
    }
  };

  useEffect(() => {
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("click", handleClick);
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("click", handleClick);
      document.removeEventListener("scroll", handleScroll);
    };
  }, [visible]);

  const handleClick = (event:MouseEvent) => {
    if (event) {
      // @ts-ignore
      const wasOutside = !(event.target.contains === menuRef.current);
      if (wasOutside && visible) setVisible(false);
    }
  };
  const handleScroll = () => {
    if (visible) setVisible(false);
  };
  return (visible || null)
    && (
    <div ref={menuRef} className={ModuleCss["menu-modal"]}>
      <div>Share this</div>
      <div>New window</div>
      <div>Visit official site</div>
      <div>View full version</div>
      <div>Settings</div>
      <div />
      <div>About this app</div>
    </div>
    );
}
// ReactDOM.render(<ContextMenu />, document.getElementById('root'));
