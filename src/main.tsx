import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./main.css";

const isTauri = typeof window !== "undefined" && "__TAURI_INTERNALS__" in window;

if (!isTauri && import.meta.env.PROD) {
  document.body.innerHTML = `<div style="background:#121212;color:white;height:100vh;display:flex;align-items:center;justify-content:center;font-family:sans-serif;"><h1>Usa l'App Desktop NoteUp</h1></div>`;
} else {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>
  );
}
