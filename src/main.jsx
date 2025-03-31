import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={chosenTheme}>
      <>
        <div>
          <App theme={chosenTheme} />
        </div>
      </>
    </ThemeProvider>
  </StrictMode>
);
