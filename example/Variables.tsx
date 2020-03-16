import React, { FC, useState, CSSProperties } from "react";
import { css } from "emotion";
import { JiMoTheme, getThemeVars } from "./theme";

import { Button, Drawer } from "antd";

const Variables: FC<{ theme: JiMoTheme }> = props => {
  const { theme } = props;
  const [showVisible, setShowVisible] = useState<boolean>(false);

  const disabledBtn = theme === JiMoTheme.Default;

  return (
    <>
      <Button
        style={styleBtn}
        disabled={disabledBtn}
        type={"link"}
        onClick={() => setShowVisible(true)}
      >
        {"Show Variables"}
      </Button>
      <Drawer
        title="Theme Variables"
        placement="right"
        visible={showVisible}
        onClose={() => setShowVisible(false)}
        className={styleDrawer}
      >
        <pre>{JSON.stringify(getThemeVars(theme), null, 2)}</pre>
      </Drawer>
    </>
  );
};

export default Variables;

const styleBtn: CSSProperties = {
  position: "fixed",
  width: 120,
  height: 32,
  top: 180,
  right: -44,
  transform: "rotate(-90deg)",
};

const styleDrawer = css`
  .ant-drawer-content-wrapper {
    width: 520px !important;

    @media (max-width: 520px) {
      width: 100% !important;
    }
  }
`;
