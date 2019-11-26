import platform from "./theme/platform";

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
      return platform;
    case JiMoTheme.Default:
    default:
      return "";
  }
}
