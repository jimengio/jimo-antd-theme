import platformCss from "./theme/platform";
import q806Css from "./theme/q806";

import { platform, q806 } from "../lib";

export const DynamicThemeStyleName = "jimo-antd-theme";

export enum JiMoTheme {
  Default = "default",
  Q806 = "q806",
  Platform = "platform",
}

/**
 * Get css text
 * @param theme
 */
export function getThemeCssText(theme: JiMoTheme): string {
  switch (theme) {
    case JiMoTheme.Platform:
      return platformCss;
    case JiMoTheme.Q806:
      return q806Css;
    case JiMoTheme.Default:
    default:
      return "";
  }
}

/**
 * Get Less variables obj
 * @param theme
 */
export function getThemeVars(theme: JiMoTheme) {
  switch (theme) {
    case JiMoTheme.Platform:
      return platform;
    case JiMoTheme.Q806:
      return q806;
    case JiMoTheme.Default:
    default:
      return null;
  }
}
