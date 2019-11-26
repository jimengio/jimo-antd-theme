import React from "react";
import { css } from "emotion";

import { Button } from "antd";

interface AppProps {}

export default function App(props: AppProps) {
  return (
    <div className={styleApp}>
      <Button>Button</Button>
    </div>
  );
}

const styleApp = css`
  text-align: center;
`;
