import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout.tsx";
import Home from "./pages/home.tsx";

// Definiamo un mini-componente per l'Editor per evitare errori di componenti mancanti
const EditorPlaceholder = () => (
  <div style={{ padding: "20px" }}>
    <h2>Editor</h2>
    <p>Qui caricheremo il contenuto Markdown.</p>
  </div>
);

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="note/:id" element={<EditorPlaceholder />} />
      </Route>
    </Routes>
  );
}
