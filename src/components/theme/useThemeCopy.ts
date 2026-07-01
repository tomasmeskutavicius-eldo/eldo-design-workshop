import { useCallback } from "react";

import { uwuify } from "./uwuify";
import { useTheme } from "./ThemeProvider";

export function useThemeCopy() {
  const { theme } = useTheme();

  return useCallback(
    (text: string) => (theme === "uwu" ? uwuify(text) : text),
    [theme],
  );
}
