import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { MailContext, MailProvider } from "./contexts/MailContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export { MailContext };
root.render(
  <StrictMode>
    <MailProvider>
      <Router>
        <App />
      </Router>
    </MailProvider>
  </StrictMode>
);
