import { extendTheme } from "@chakra-ui/react";

export const Theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        fontFamily: "Roboto",
        fontWeight: "500",
        backgroundColor: "#2e2e2e",
        color: "#fff",
      },
      option: {
        color: "#2e2e2e",
      },
    }),
  },
});
