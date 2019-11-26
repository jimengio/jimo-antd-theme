import React, { useState, useEffect, useRef } from "react";
import { css } from "emotion";

import { Radio } from "antd";
import AntdComponents from "./components";

import platform from "./theme/platform";

export default function App() {
  const [theme, setTheme] = useState("default");

  const styleRef = useRef<HTMLStyleElement | null>();

  useEffect(() => {
    styleRef.current = document.querySelector<HTMLStyleElement>(
      `style[jimo-antd-theme=""]`
    );

    if (!styleRef.current) {
      styleRef.current = document.createElement("style");
    }

    styleRef.current.setAttribute("jimo-antd-theme", "");
    styleRef.current.innerText = theme === "platform" ? platform : "";
    document.head.appendChild(styleRef.current);
  }, [theme]);

  return (
    <div className={styleApp}>
      <Radio.Group
        buttonStyle="solid"
        value={theme}
        onChange={e => setTheme(e.target.value)}
      >
        <Radio.Button value="default">Antd Default</Radio.Button>
        <Radio.Button value="platform">Platform</Radio.Button>
      </Radio.Group>
      <div style={{ marginTop: 16 }}>
        <AntdComponents />
      </div>
    </div>
  );
}

const styleApp = css`
  padding: 16px;
`;
