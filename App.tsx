import React from "react";
import { StatusBar } from "react-native";
import LoadAssets from "./src/LoadAssets";
import { Provider as ThemeProvider } from "./src/theme";
import Root from "./src/Root";

export default function App() {
  return (
    <LoadAssets>
      <ThemeProvider>
        <Root />
      </ThemeProvider>
      <StatusBar barStyle="dark-content" />
    </LoadAssets>
  );
}
