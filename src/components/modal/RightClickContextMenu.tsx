import React, {
  RefObject,
  useEffect, useRef, useState,
} from "react";
import ModuleCss from "./RightClickContextMenu.module.scss";

export default function RightClickContextMenu({ el }: { el: RefObject<HTMLDivElement> & any }) {
  const [visible, setVisible] = useState(false);
  const menuRef:any = useRef<RefObject<HTMLDivElement>>(null);
  setTimeout(() => {
    console.log("el-------------", el);
  }, 1000);
  const handleContextMenu = (event:MouseEvent) => {
    event.preventDefault();
    setVisible(true);

    const clickX = event.clientX;
    const clickY = event.clientY;
    const screenW = window.innerWidth;
    const screenH = window.innerHeight;
    const rootW = menuRef?.current.offsetWidth;
    const rootH = menuRef?.current.offsetHeight;

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
    el.current.addEventListener("contextmenu", handleContextMenu);
    el.current.addEventListener("click", handleClick);
    el.current.addEventListener("scroll", handleScroll);

    return () => {
      el.current.removeEventListener("contextmenu", handleContextMenu);
      el.current.removeEventListener("click", handleClick);
      el.current.removeEventListener("scroll", handleScroll);
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
      <div>新建</div>
      <div>复制</div>
      <div>粘贴</div>
      <div>重命名</div>
      <div>删除</div>
    </div>
    );
}
