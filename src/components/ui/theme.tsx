import { Button, createTheme } from "@mantine/core";

import buttonStyle from "./mantine/buttons/button.module.css";

export const theme = createTheme({
  black: "var(--color-gray-800)",
  primaryColor: "violet",
  cursorType: "pointer",
  //   fontFamily: "Inter, sans-serif",
  components: {
    Button: {
      classNames: buttonStyle,
    },
  },
});
