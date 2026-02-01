# 📓 NoteUp - Progetto Obsidian-like con Tauri & React

Benvenuto in **NoteUp**. Questa applicazione utilizza **Vite + React + SWC** per il frontend e **Tauri** per l'interfaccia nativa desktop in Rust.

---

## 🚀 Comandi Rapidi

| Comando | Descrizione |
| :--- | :--- |
| `npm install` | Installa tutte le dipendenze (da fare al primo avvio). |
| `npm run tauri dev` | **Avvia l'app in modalità sviluppo.** Apre la finestra nativa. |
| `npm run tauri build` | Crea l'eseguibile finale (`.exe` su Windows) nella cartella `src-tauri/target`. |
| `npm run build` | Compila solo il frontend in HTML/JS statico (cartella `dist`). |

---

## 📂 Struttura del Progetto (Cosa toccare)

### 🎨 Frontend (React + TypeScript)
- `src/main.tsx`: Il punto di ingresso. Qui c'è la protezione che impedisce l'apertura dal browser.
- `src/App.tsx`: Il "vigile urbano". Qui configuri le **Rotte** (URL) della tua app.
- `src/pages/`: Contiene le schermate principali (es. `home.tsx`).
- `src/components/`: Contiene i pezzi riutilizzabili (es. `layout.tsx` con la sidebar).
- `src/assets/`: Immagini, icone e font globali.

### 🦀 Backend & Configurazione (Tauri)
- `src-tauri/tauri.conf.json`: Il cuore della configurazione. Qui gestisci permessi, icone e titoli delle finestre.
- `src-tauri/src/main.rs`: Il codice Rust. Qui aggiungerai funzioni per scrivere/leggere file dal PC.
- `src-tauri/capabilities/default.json`: **Fondamentale!** Qui devi abilitare i permessi (es. `fs:allow-all`) per leggere le note.

---

## 🛠 Come modificare l'app

### 1. Aggiungere una nuova pagina
1. Crea un file in `src/pages/NuovaPagina.tsx`.
2. Aggiungi la rotta in `src/App.tsx`:
   ```tsx
   <Route path="nuova" element={<NuovaPagina />} />
