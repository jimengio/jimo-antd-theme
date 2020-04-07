import React, { useState, useEffect, useRef, useCallback } from "react";
import { css } from "emotion";

import { Radio, Divider } from "antd";
import AntdComponents from "./components";
import Variables from "./Variables";

import { JiMoTheme, getThemeCssText, DynamicThemeStyleName } from "./theme";

export default function App() {
  const [theme, setTheme] = useState<JiMoTheme>(JiMoTheme.Default);

  const styleRef = useRef<HTMLStyleElement | null>();

  const changeCssContent = useCallback(
    theme => {
      styleRef.current = document.querySelector<HTMLStyleElement>(
        `style[${DynamicThemeStyleName}=""]`
      );

      if (!styleRef.current) {
        styleRef.current = document.createElement("style");
        styleRef.current.setAttribute(DynamicThemeStyleName, "");
        document.head.appendChild(styleRef.current);
      }

      styleRef.current.textContent = getThemeCssText(theme);
    },
    [styleRef]
  );

  useEffect(() => {
    changeCssContent(theme);
  }, [theme]);

  return (
    <div className={styleApp}>
      <h1>Jimo Antd Theme</h1>
      <Radio.Group
        buttonStyle="solid"
        value={theme}
        onChange={e => setTheme(e.target.value)}
      >
        {(Object.keys(JiMoTheme) as (keyof typeof JiMoTheme)[]).map(k => {
          const value = JiMoTheme[k];

          return (
            <Radio.Button key={k} value={value}>
              {k}
            </Radio.Button>
          );
        })}
      </Radio.Group>
      <Divider orientation="left">Preview</Divider>
      <div>
        <AntdComponents />
      </div>
      <Variables theme={theme} />
    </div>
  );
}

const styleApp = css`
  padding: 16px;
`;
