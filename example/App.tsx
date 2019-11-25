import React from "react";
import { css } from "emotion";

interface AppProps {}

export default function App(props: AppProps) {
  return <div className={styleApp}>hello</div>;
}

const styleApp = css`
  text-align: center;
`;
