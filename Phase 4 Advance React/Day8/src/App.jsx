import NoteForm from "./components/NoteForm";
import NotesList from "./components/NotesList";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <h1>📝 Notes App</h1>
        <ThemeToggle />
        <NoteForm />
        <NotesList />
      </div>
    </ThemeProvider>
  );
}

export default App;
