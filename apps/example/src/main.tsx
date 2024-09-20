import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@/global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <h1 className="text-3xl font-bold underline text-red-400">Hello World !</h1>
  </StrictMode>
);
