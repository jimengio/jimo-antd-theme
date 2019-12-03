import platformCss from "./theme/platform";

import { platform } from "../lib";

export const DynamicThemeStyleName = "jimo-antd-theme";

export enum JiMoTheme {
  Default = "default",
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
    case JiMoTheme.Default:
    default:
      return null;
  }
}
