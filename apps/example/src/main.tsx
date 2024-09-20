import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@/global.css";
import HomePage from "@/pages/page";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <h1 className="text-3xl font-bold underline text-red-400">Hello World !</h1>
    <HomePage />
  </StrictMode>
);
